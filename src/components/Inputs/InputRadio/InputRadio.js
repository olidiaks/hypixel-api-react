import PropTypes from "prop-types";
import {useId} from "react";

const propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    option: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
};

const InputRadio = props => {
    const id = useId();
    return <div className="form-group">
        <h3>{props.label}</h3>
        {props.option.map(option =>
            <div key={option.value}>
                <input
                    type="radio"
                    value={option.value}
                    checked={props.value === option.value}
                    className="form-check-input"
                    name={props.name}
                    id={`radio-${option.value}-${props.name}`}
                    onChange={event => props.onChange(event.target.value)}
                />
                <label className="form-check-label" htmlFor={`radio-${option.value}-${props.name}`}>
                    {option.label}
                </label>
                <br/>
            </div>
        )}

    </div>;
};

InputRadio.propTypes = propTypes;

export default InputRadio;