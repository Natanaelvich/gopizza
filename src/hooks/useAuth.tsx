import React, { createContext, useContext, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Alert } from 'react-native';

type Payload = {
  email: string;
  password: string;
};

export type AuthContextData = {
  signOut: () => Promise<void>;
  signUpOrSignIn: (data: Payload) => Promise<void>;
  user: FirebaseAuthTypes.User | undefined;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | undefined>();

  const signIn = async ({ email, password }: Payload) => {
    try {
      const _user = await auth().signInWithEmailAndPassword(email, password);
      setUser(_user.user);
    } catch (error: any) {
      throw new Error('Falha ao realizar login');
    }
  };

  const signUpOrSignIn = async ({ email, password }: Payload) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        signIn({ email, password });

        return;
      }
      if (error.code === 'auth/invalid-email') {
        throw new Error('E-mail inválido!');

        return;
      }
      if (error.code === 'auth/weak-password') {
        throw new Error('A senha deve ter no minimo 6 digitos!');

        return;
      }

      console.log(error);
      throw new Error('Falha ao criar conta');
    }
  };

  const signOut = async () => {
    try {
      auth().signOut();
    } catch {
      Alert.alert('Não possivel fazer o logout');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signUpOrSignIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, AuthContext };
