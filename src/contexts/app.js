import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { auth, db, storage } from "../firebaseConnection";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
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
    const [progressUpload, setProgressUpload] = useState(0);
    const [profilePhotoURL, setProfilePhotoURL] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        function checkLogin() {
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const userData = {
                        uid: user.uid,
                        email: user.email,
                        name: user.displayName,
                        photoURL: user.photoURL
                    }

                    localStorage.setItem('@detailUser', JSON.stringify(userData))

                    setProfilePhotoURL(user.photoURL)
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
                navigate('/home', { replace: true })
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
            .then((value) => {
                const userData = {
                    uid: value.user.ui,
                    email: email,
                    name: name,
                    photoURL: value.user.photoURL
                }
                setUser(userData)

                updateProfile(auth.currentUser, {
                    displayName: name
                })

                navigate('/home', { replace: true })
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

    function handleUpdateName(name) {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
                alert('Nome atualizado com sucesso!')
            })
    }

    function handleFileChange(event) {
        const file = event.target.files[0]; // Pega o primeiro arquivo selecionado
        if (file) {
            const storageRef = ref(storage, `users/${user.uid}`)
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    setProgressUpload(progress)
                },
                (err) => {
                    alert('Erro ao fazer upload da foto!')
                    console.log(err)
                    setProgressUpload(0)
                },
                async () => {
                    const url = await getDownloadURL(uploadTask.snapshot.ref)
                    updateProfile(auth.currentUser, {
                        photoURL: url
                    })
                    setProfilePhotoURL(url)
                    setProgressUpload(0)
                }
            )
        }
    };

    async function handleAddClient(name, cnpj, address) {
        if (name.trim().length === 0 || cnpj.trim().length === 0 || address.trim().length === 0) {
            alert('Preencha todos os campos!')
            return
        }

        const collectionRef = collection(db, 'clients')

        await addDoc(collectionRef, {
            name: name,
            cnpj: cnpj,
            address: address,
            userUID: user.uid
        })
            .then(() => {
                alert('Cliete cadastrado com sucesso!')
            })
            .catch((err) => {
                alert('Erro ao cadastrar o cliente!')
                console.log(err.code)
            })
    }

    return (
        <AuthContext.Provider
            value={{
                handleSignIn,
                handleSignUp,
                handleSignOut,
                handleUpdateName,
                handleFileChange,
                handleAddClient,
                signed,
                loading,
                user,
                progressUpload,
                profilePhotoURL
            }}>
            {children}
        </AuthContext.Provider>
    )
}