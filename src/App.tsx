import { Box, Button, Typography } from '@mui/material';
import AuthContext from 'context/auth/AuthContext';
import { FC, useContext } from 'react';

const App: FC = () => {
	const { signIn, user, signOut, loading } = useContext(AuthContext);

	return (
		<Box
			width="100vw"
			height="100vh"
			display="flex"
			alignItems="center"
			justifyContent="center"
			flexDirection="column"
		>
			<Typography variant="h1">Flintstone Parchis 🎲</Typography>
			<Button
				onClick={() => (user ? signOut && signOut() : signIn && signIn('anonymous'))}
			>
				Anonymous
			</Button>
			{loading && 'cargando...'}
			{user?.isAnonymous ? 'anonimo' : 'nope'}
		</Box>
	);
};

export default App;
