import React from "react";

function Popup({ onCloseClick, onSaveClick, oldTask = {} }) {
  const textRef = React.useRef();
  const handleCloseClick = () => {
    onCloseClick();
  };
  const handleSaveClick = () => {
    onSaveClick(textRef.current.value);
  };

  return (
    <div className="modal-wrap open-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              New message
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="message-text" className="col-form-label">
                  Message:
                </label>
                <textarea
                  ref={textRef}
                  className="form-control"
                  id="message-text"
                  defaultValue={oldTask.text}
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              onClick={handleCloseClick}
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              onClick={handleSaveClick}
              type="button"
              className="btn btn-primary"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
