import React from 'react';
import Popup from 'reactjs-popup';

const QuizPopup = () => {
  return (
    <div>
      <Popup
        trigger={<button id="modal-button">Don't click this</button>}
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <button
              className="close"
              onClick={close}
            >
              &times;
            </button>
            <div className="header">Quiz 1</div>
            <br />
            <div className="content">I told you not to!!!!!</div>
            <br />
            <div>
              <button
                id="modal-button"
                onClick={() => close()}
              >
                Now click this
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default QuizPopup;
