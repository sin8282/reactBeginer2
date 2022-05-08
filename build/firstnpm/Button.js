import PropTypes from "prop-types"
import style from "./Button.module.css";

function Button({ text }) {
    return (
        <button className={style.test}>
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired
};
export default Button;