import AuthContext from 'context/auth/AuthContext';
import { FC, ReactNode, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from 'routes/routes';

export interface AppProps {
	children?: ReactNode;
}

const App: FC<AppProps> = ({ children }) => {
	const { user, signOut } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		const route = routes[0].children
			?.filter(({ path }) => path !== 'logout')
			.find(({ path }) => path && location.pathname.includes(path));

		if (!user && !route) {
			navigate('/');
		}

		if (location.pathname === '/logout' && signOut) {
			signOut();
			navigate('/');
		}
	}, [user, location.pathname]);

	return <>{children}</>;
};

export default App;
