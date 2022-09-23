import PropTypes from "prop-types";
import {useId, useRef} from "react";

const propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

const defaultProps = {
    isValid: false,
    showError: false,
};

const InputFile = props => {
    const id = useId();
    const ref = useRef()
    return <div className="form-group">
        <label htmlFor={id} className="form-label"><h3 className="fw-bold">{props.label}</h3></label><br/>
        <input type="file" id={id} ref={ref} onChange={event => props.onChange(event.target.files)}/>
    </div>;
};

InputFile.defaultProps = defaultProps;
InputFile.propTypes = propTypes;

export default InputFile;