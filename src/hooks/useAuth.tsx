import React, { createContext, useCallback, useContext, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

type Payload = {
  email: string;
  password: string;
};

type User = {
  isAdmin: boolean;
} & FirebaseAuthTypes.User;

export type AuthContextData = {
  signOut: () => Promise<void>;
  signUpOrSignIn: (data: Payload) => Promise<void>;
  changeUser: (userChanged: FirebaseAuthTypes.User | null) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  user: User | null;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const changeUser = useCallback(
    async (userChanged: FirebaseAuthTypes.User | null) => {
      if (userChanged) {
        const userRef = await firestore()
          .collection('users')
          .doc(userChanged.uid)
          .get();

        const userData = userRef.data();

        setUser({ ...userChanged, isAdmin: userData?.isAdmin });
      } else {
        setUser(null);
      }
    },
    [],
  );

  const signIn = async ({ email, password }: Payload) => {
    try {
      const _user = await auth().signInWithEmailAndPassword(email, password);
      const userRef = await firestore()
        .collection('users')
        .doc(_user.user.uid)
        .get();

      const userData = userRef.data();

      setUser({ ..._user.user, isAdmin: userData?.isAdmin });
    } catch (error: any) {
      throw new Error('Falha ao realizar login');
    }
  };

  const signUpOrSignIn = async ({ email, password }: Payload) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        await signIn({ email, password });

        return;
      }
      if (error.code === 'auth/invalid-email') {
        throw new Error('E-mail inválido!');
      }
      if (error.code === 'auth/weak-password') {
        throw new Error('A senha deve ter no minimo 6 digitos!');
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

  const forgotPassword = async (email: string) => {
    try {
      if (!email) {
        Alert.alert(
          'Informe o e-mail para enviarmos um email para redefinir sua senha',
        );

        return;
      }

      await auth().sendPasswordResetEmail(email);
      Alert.alert('E-mail enviado para redefinir senha');
    } catch (error: any) {
      Alert.alert('Falha ao enviar e-mail de redefinição de senha');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signUpOrSignIn,
        changeUser,
        forgotPassword,
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
