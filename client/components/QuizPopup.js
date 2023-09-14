import React from 'react';
import Popup from 'reactjs-popup';
import { motion } from 'framer-motion';

// need to change trigger to some input from GameBoard,
// use 'open' with a true/false variable instead of 'trigger'
// const ControlledPopup = () => {
//   const [open, setOpen] = useState(false);
//   const closeModal = () => setOpen(false);
//   return (
//     <div>
//       <button type="button" className="button" onClick={() => setOpen(o => !o)}>
//         Controlled Popup
//       </button>
//       <Popup open={open} closeOnDocumentClick onClose={closeModal}>
//         <div className="modal">
//           <a className="close" onClick={closeModal}>
//             &times;
//           </a>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
//           omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
//           ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
//           doloribus. Odit, aut.
//         </div>
//       </Popup>
//     </div>
//   );
// };

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
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="close"
              onClick={close}
            >
              &times;
            </motion.button>
            <div className="header">Quiz 1</div>
            <br />
            <div className="content">Oops!!!!!</div>
            <br />
            <div>
              <motion.button
                id="modal-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => close()}
              >
                Now click this
              </motion.button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default QuizPopup;
