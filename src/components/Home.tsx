import { Box, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

export interface HomeProps {
	children?: ReactNode;
}

const Home: FC<HomeProps> = ({ children }) => {
	return (
		<Box
			width="100vw"
			height="100vh"
			display="flex"
			alignItems="center"
			justifyContent="center"
			flexDirection="column"
		>
			<Typography variant="h3" color="primary">
				🎲 Flintstone Parchis
			</Typography>
			{children}
		</Box>
	);
};

export default Home;
