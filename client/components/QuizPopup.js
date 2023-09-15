import * as React from 'react';
import Popup from 'reactjs-popup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box textAlign="center">
        <Button onClick={handleOpen} variant="contained">Open Quiz Modal</Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
          <FormControl>
            <FormLabel>"What is 'Good morning' in Spanish?"</FormLabel>
            <RadioGroup defaultValue={"Hola"}>
              <FormControlLabel value="Hola" control={<Radio />} label="Hola" />
              <FormControlLabel value="Buenos días" control={<Radio />} label="Buenos días" />
              <FormControlLabel value="Buenas tardes" control={<Radio />} label="Buenas tardes" />
              <FormControlLabel value="Buenas noches" control={<Radio />} label="Buenas noches" />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel>"How do you say 'Nice to meet you' in Spanish?"</FormLabel>
            <RadioGroup defaultValue={"Mucho gusto"}>
              <FormControlLabel value="Mucho gusto" control={<Radio />} label="Mucho gusto" />
              <FormControlLabel value="Estoy bien, gracias" control={<Radio />} label="Estoy bien, gracias" />
              <FormControlLabel value="Por favor" control={<Radio />} label="Por favor" />
              <FormControlLabel value="Gracias" control={<Radio />} label="Gracias" />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel>"What is the Spanish translation for 'Please'?"</FormLabel>
            <RadioGroup defaultValue={"Buenos días"}>
              <FormControlLabel value="Buenos días" control={<Radio />} label="Buenos días" />
              <FormControlLabel value="Mucho gusto" control={<Radio />} label="Mucho gusto" />
              <FormControlLabel value="Por favor" control={<Radio />} label="Por favor" />
            </RadioGroup>
          </FormControl>
        </Box>
      </Modal>
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
