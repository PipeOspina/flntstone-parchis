import { Box, Typography } from '@mui/material';
import { FC } from 'react';

const App: FC = () => {
	return (
		<Box
			width="100vw"
			height="100vh"
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			<Typography variant="h1">Flintstone Parchis 🎲</Typography>
		</Box>
	);
};

export default App;
