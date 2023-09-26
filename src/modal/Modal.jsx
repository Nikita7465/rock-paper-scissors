import "./modal.css";
import PropTypes from "prop-types";

const Modal = ({ result, reset }) => {
  return (
    <div>
      <div className="backdrop">
        <div className="modal">
          <h1 className="result">{result}</h1>

          <button className="reset_btn" onClick={reset}>
            <img src="reset-arrow.svg" alt="reset" className="reset_icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  result: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Modal;
