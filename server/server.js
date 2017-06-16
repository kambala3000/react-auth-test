import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import { serverPort } from "./config.json";
import inputsValidation from "./utils/inputsValidation";
import * as db from "./utils/dbUtils";
import "./models/User";

const User = mongoose.model("User");

function validateInput(data, additionalValid) {
    let { errors } = additionalValid(data);
    const { login, email } = data;

    return Promise.all([
        User.findOne({ login }, (err, user) => {
            if (err) return err;
            if (user) {
                if (user.login === login) {
                    errors.login = "There is user with such username";
                }
            }
        }),
        User.findOne({ email }, (err, user) => {
            if (err) return err;
            if (user) {
                if (user.email === email) {
                    errors.email = "There is user with such email";
                }
            }
        })
    ]).then(() => {
        return {
            errors,
            isValid: Object.keys(errors).length === 0
        };
    });

    // return User.find(
    //     {
    //         $or: [{ login }, { email }]
    //     },
    //     (err, user) => {
    //         if (err) return err;
    //         if (user) {
    //             if (user.login === login) {
    //                 errors.login = "There is user with such username";
    //             }
    //             if (user.email === email) {
    //                 errors.email = "There is user with such email";
    //             }
    //         }
    //     }
    // ).then(() => {
    //     return {
    //         errors,
    //         isValid: Object.keys(errors).length === 0
    //     };
    // });
}

db.setUpConnection();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const server = app.listen(serverPort, () => {
    console.log(`We are live on ${serverPort}`);
});

// get user
app.get("/users:id", (req, res) => {
    return Promise.all([
        User.findOne({ login: req.params.id }, "login", (err, user) => {
            if (err) return err;
            if (user) {
                res.json({ user });
            }
        }),
        User.findOne({ email: req.params.id }, "email", (err, user) => {
            if (err) return err;
            if (user) {
                res.json({ user });
            }
        })
    ]);
});

// new user
app.post("/users", (req, res) => {
    validateInput(req.body, inputsValidation).then(({ errors, isValid }) => {
        if (isValid) {
            db
                .addUser(req.body)
                .then(data => res.json({ success: true }))
                .catch(err => res.status(500).json({ error: err }));
        } else {
            res.status(400).json(errors);
        }
    });
});
