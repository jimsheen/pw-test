import React, { useState } from 'react';

type AuthContextTypes = {
	user: string,
	login: (email: string) => void,
	logout: (email: string) => void,
}
const AuthContext = React.createContext<Partial<AuthContextTypes>>({}); 

const AuthProvider: React.FC = ({ children }) =>{
	const [user, setUser] = useState < any > (null);
	const login = (email: string) => {
		setUser(email);
	} // make a login request
	const logout = () => {
		setUser(null);
	} // clear the token in localStorage and the user data
	return (
		<AuthContext.Provider value={{user, login, logout}}>
			{children}
		</AuthContext.Provider>
	)
}
const useAuth = () => {
	const context = React.useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within AuthProvider');
	}
	return context;
}
export { AuthProvider, useAuth }
