import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import { auth, db } from "../firebaseConnection";
import {
    addDoc,
    collection,
    doc,
} from "firebase/firestore";
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
    const navidate = useNavigate()

    async function handleSignIn(email, password) {
        alert(email)
    }

    async function handleSignUp(name, email, password) {
        if (name.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0) {
            alert('Preencha todos os campos!')
            return
        }

        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (value) => {
                const collectionRef = collection(db, 'users')
                await addDoc(collectionRef, {
                    name: name,
                    email: value.user.email,
                    createdAt: new Date(),
                    avatarUrl: ''
                }).then(() => {
                    navidate('/home', { replace: true })
                })
            })
            .catch((err) => {
                if (err.code === 'auth/email-already-in-use') {
                    alert('Email já em uso por outro usuário!')
                } else if (err.code === 'auth/missing-email') {
                    alert('O email é obrigatório')
                } else if (err.code === 'auth/invalid-email') {
                    alert('E-mail Inválido')
                } else if (err.code === 'auth/missing-password') {
                    alert('A senha é obrigatória')
                } else if (err.code === 'auth/weak-password') {
                    alert('A senha precisa ter no mínimo 6 caracteres')
                } else {
                    console.log(err.code)
                }
            })
    }

    return (
        <AuthContext.Provider value={{ handleSignIn, handleSignUp }}>
            {children}
        </AuthContext.Provider>
    )
}