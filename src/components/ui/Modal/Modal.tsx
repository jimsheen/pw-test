import React from 'react';

import {
	Flex,
	Box,
	Button
} from 'rebass';

type ModalTypes = {
	isVisible: boolean,
	closeModal: () => void,
};

const Modal: React.FC < ModalTypes > = ({ children, isVisible, closeModal }) => {

	if (!isVisible) return null;

	return (
		<Flex
      sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.4)',
          zIndex: '50'
      }}
      flex={1}
      alignItems="center"
      justifyContent="center"
  >
      <Box 
          bg="white"
          width={[1, 1/2]}
      >
          <Box p={4}>
              {children}
              <Box mt={4}>
                  <Button 
                      onClick={closeModal}
                  >
                      Close
                  </Button>
              </Box>
          </Box>
      </Box>
  </Flex>
	)
}

export default Modal;
