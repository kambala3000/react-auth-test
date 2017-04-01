import React from 'react';
import classnames from 'classnames';

const FormItem = ({ fieldName, value, label, error, type, onChange, checkUserExists }) => {
    return (
        <div>
            <p className="signup__item-head">
                <label className="signup__label">{label}</label>
                {error && <span className="signup__error"> {error}</span>}
            </p>
            <input
                type={type}
                className={classnames('signup__input', {
                    'signup__input--err': error
                })}
                name={fieldName}
                value={value}
                onChange={onChange}
                onBlur={checkUserExists}
            />
        </div>
    );
};

FormItem.propTypes = {
    fieldName: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    type: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    checkUserExists: React.PropTypes.func
};

FormItem.defaultProps = {
    type: 'text'
};

export default FormItem;
