import { auth, googleProvider } from 'cloud/firebase/auth';
import { BaseProviderProps } from 'context/props';
import {
	onAuthStateChanged,
	signInAnonymously,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut as FirebaseSignOut,
	updateProfile,
	User,
} from 'firebase/auth';
import { useLoading, UseLoadingState } from 'hooks/useLoading';
import { createContext, FC, useEffect, useState } from 'react';

export type SignInMethod = 'google' | 'email' | 'anonymous';

export interface SignInCredentials {
	username: string;
	password?: string;
}

export interface AuthContextState {
	signIn?: (method: SignInMethod) => void;
	loading?: boolean;
	user?: User | null;
	signOut?: () => void;
	updateUsername?: (username: string) => void;
	loadingState?: UseLoadingState<AuthContextLoading>;
}

type AuthContextLoading = 'signIn' | 'signOut' | 'updateUsername' | 'stateChanges';

const AuthContext = createContext<AuthContextState>({});

export const AuthProvider: FC<BaseProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	const { loading, setLoading, loadingState } = useLoading<AuthContextLoading>({
		signIn: false,
		signOut: false,
		updateUsername: false,
		stateChanges: false,
	});

	const setNoLoading = (key: AuthContextLoading) => () => setLoading(key, false);

	const updateUsername = (username: string) => {
		if (auth.currentUser) {
			setLoading('updateUsername', true);
			updateProfile(auth.currentUser, { displayName: username }).finally(
				setNoLoading('updateUsername'),
			);
		}
	};

	const signIn = (method: SignInMethod, credentials?: SignInCredentials) => {
		setLoading('signIn', true);
		const { username, password } = credentials ?? {};

		switch (method) {
			case 'anonymous': {
				signInAnonymously(auth).finally(setNoLoading('signIn'));
				break;
			}
			case 'email': {
				if (!username) throw new Error('Missing username field');
				if (!password) throw new Error('Missing password field');
				signInWithEmailAndPassword(auth, username, password).finally(
					setNoLoading('signIn'),
				);
				break;
			}
			case 'google': {
				signInWithPopup(auth, googleProvider).finally(setNoLoading('signIn'));
				break;
			}
			default: {
				setLoading('signIn', false);
				throw new Error('Sign in method not found');
			}
		}
	};

	const signOut = () => {
		setLoading('signOut', true);
		FirebaseSignOut(auth).finally(setNoLoading('signOut'));
	};

	const data: AuthContextState = {
		signIn,
		loading,
		user,
		signOut,
		updateUsername,
		loadingState,
	};

	useEffect(() => {
		setLoading('stateChanges', true);
		const unsubscribeUser = onAuthStateChanged(auth, (newUser) => {
			setUser(newUser);
			setLoading('stateChanges', false);
		});
		return () => unsubscribeUser();
	}, []);

	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContext;
