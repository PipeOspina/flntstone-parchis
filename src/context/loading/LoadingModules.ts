export type LoadingModule<Keys extends string> = { [Key in Keys]: boolean };

export type AuthLoading = LoadingModule<
	'signIn' | 'signOut' | 'updateUsername' | 'stateChanges'
>;

export const initialAuthLoading: AuthLoading = {
	signIn: false,
	signOut: false,
	stateChanges: false,
	updateUsername: false,
};

export interface Modules {
	auth: AuthLoading;
}

export const initialModules: Modules = {
	auth: initialAuthLoading,
};
