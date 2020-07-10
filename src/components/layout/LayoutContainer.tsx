import React from 'react';

import { Box } from 'rebass';

const LayoutContainer: React.FC = ({ children }) => {

	return (
		<Box
	    sx={{
	      maxWidth: 1200,
	      mx: 'auto',
	      height: '100%',
	      px: [3, 5]
	    }}>
	    	{children}
	  </Box>
	)
}

export default LayoutContainer;