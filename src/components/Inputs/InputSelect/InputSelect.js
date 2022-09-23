import PropTypes from "prop-types";
import {useId} from "react";

const propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    onChange: PropTypes.func.isRequired,
    option: PropTypes.array.isRequired,
};


const InputSelect = props => {
    const id = useId();
    return <div className="form-group">
        <label htmlFor={id} className="form-label">{props.label}</label>
        <select
            id={id}
            value={props.value}
            onChange={event => props.onChange(event.target.value)}
            className="form-select"
        >
            {props.option.map(option =>
                <option key={option.value} value={option.value}>{option.label}</option>
            )}
        </select>
    </div>;
};


InputSelect.propTypes = propTypes;


export default InputSelect