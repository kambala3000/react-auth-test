import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { serverPort } from "./config.json";
import validateInput from "./utils/inputsValidation";
import * as db from "./utils/dbUtils";

db.setUpConnection();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const server = app.listen(serverPort, () => {
    console.log(`We are live on ${serverPort}`);
});

// new user
app.post("/users", (req, res) => {
    const { errors, isValid } = validateInput(req.body);
    if (isValid) {
        db
            .addUser(req.body)
            .then(data => res.json({ success: true }))
            .catch(err => res.status(500).json({ error: err }));
    } else {
        res.status(400).json(errors);
    }
});
// app.use('/api/users', db.router);
