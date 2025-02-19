import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebaseConnection";
import {
    addDoc,
    collection,
    doc,
} from "firebase/firestore";
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [signed, setSigned] = useState(false)
    const navidate = useNavigate()

    useEffect(() => {
        function checkLogin() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const userData = {
                        uid: user.uid,
                        email: user.email,
                        name: user.displayName,
                        photoURL: user.photoURL
                    }

                    localStorage.setItem('@detailUser', JSON.stringify(userData))

                    setUser(userData)
                    setSigned(true)
                    setLoading(false)
                } else {
                    localStorage.removeItem('@detailUser')
                    setLoading(false)
                    setSigned(false)
                    setUser({})
                }
            })
        }

        checkLogin()
    }, [])

    async function handleSignIn(email, password) {
        if (email.trim().length === 0 || password.trim().length === 0) {
            alert('Preencha todos os campos!')
            return
        }

        await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navidate('/home', { replace: true })
                alert('Seja bem vindo de volta!')
            })
            .catch((error) => {
                if (error.code === 'auth/missing-password') {
                    alert('A senha é obrigatória')
                } else if (error.code === 'auth/invalid-credential') {
                    alert('Email incorreto ou senha incorreta!')
                } else if (error.code === 'auth/invalid-email') {
                    alert('O email é obrigatório')
                } else {
                    console.log(error.code)
                }
            })
    }

    async function handleSignUp(name, email, password) {
        if (name.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0) {
            alert('Preencha todos os campos!')
            return
        }

        await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                navidate('/home', { replace: true })
                alert('Bem vindo a plataforma!')
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

    async function handleSignOut() {
        await signOut(auth)
    }

    return (
        <AuthContext.Provider value={{ handleSignIn, handleSignUp, handleSignOut, signed, loading, user }}>
            {children}
        </AuthContext.Provider>
    )
}