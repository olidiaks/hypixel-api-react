import PropTypes from "prop-types";
import {useId} from "react";

const propTypes = {
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    showError: PropTypes.bool,
    isValid: PropTypes.bool,
    validFeedback: PropTypes.string,
    invalidFeedback: PropTypes.string,
};

const defaultProps = {
    type: "text",
    isValid: false,
    showError: false,
};

const InputTextNumber = props => {
    const id = useId();
    return <div className="form-group">
        <label htmlFor={id} className="form-label">{props.label}</label>
        <input
            id={id}
            type={props.type}
            value={props.value}
            onChange={event => props.onChange(event.target.value)}
            className={`form-control ${props.showError && (props.isValid ? 'is-valid' : 'is-invalid')}`}
        />
        <div className="valid-feedback">{props.validFeedback}</div>
        <div className="invalid-feedback">{props.invalidFeedback}</div>
    </div>;
};

InputTextNumber.defaultProps = defaultProps;
InputTextNumber.propTypes = propTypes;

export default InputTextNumber