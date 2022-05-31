import Home from 'components/Home';
import { RouteObject, useRoutes } from 'react-router-dom';

import App from '../App';

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <Home />,
		children: [
			{
				path: 'login',
			},
			{
				path: 'logout',
			},
			{
				path: 'register',
			},
		],
	},
	{
		path: '/game',
		element: <App />,
	},
];

const Routes = () => {
	return useRoutes(routes);
};

export default Routes;
