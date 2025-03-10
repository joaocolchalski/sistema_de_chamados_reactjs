import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { auth, storage } from "../firebaseConnection";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

export const AppContext = createContext({})

export default function AppProvider({ children }) {
    const [user, setUser] = useState(null)
    const [progressUpload, setProgressUpload] = useState(0);
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loadingVerifySigned, setLoadingVerifySigned] = useState(true)
    const [profilePhotoURL, setProfilePhotoURL] = useState('')

    const navigate = useNavigate()

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

                    setProfilePhotoURL(userData.photoURL)
                    setUser(userData)
                    setLoadingVerifySigned(false)
                } else {
                    setUser(null)
                    setLoadingVerifySigned(false)
                }
            })
        }

        checkLogin()
    }, [])

    async function handleSignIn(email, password) {
        if (email.trim().length === 0 || password.trim().length === 0) {
            toast.warn('Preencha todos os campos!');
            return
        }

        setLoadingAuth(true)
        await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/dashboard', { replace: true })
                toast.success('Seja bem vindo de volta!');
                setLoadingAuth(false)
            })
            .catch((error) => {
                if (error.code === 'auth/missing-password') {
                    toast.warn('A senha é obrigatória!')
                } else if (error.code === 'auth/invalid-credential') {
                    toast.warn('Email incorreto ou senha incorreta!')
                } else if (error.code === 'auth/invalid-email') {
                    toast.warn('O email é obrigatório!')
                } else {
                    console.log(error.code)
                }
                setLoadingAuth(false)
            })
    }

    async function handleSignUp(name, email, password) {
        if (name.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0) {
            toast.warn('Preencha todos os campos!')
            return
        }

        setLoadingAuth(true)
        await createUserWithEmailAndPassword(auth, email, password)
            .then((value) => {
                const userData = {
                    uid: value.user.uid,
                    email: email,
                    name: name,
                    photoURL: value.user.photoURL
                }
                setUser(userData)

                updateProfile(auth.currentUser, {
                    displayName: name
                })

                navigate('/dashboard', { replace: true })
                toast.success('Bem vindo a plataforma!')
                setLoadingAuth(false)
            })
            .catch((err) => {
                if (err.code === 'auth/email-already-in-use') {
                    toast.warn('Email já em uso por outro usuário!')
                } else if (err.code === 'auth/missing-email') {
                    toast.warn('O email é obrigatório1')
                } else if (err.code === 'auth/invalid-email') {
                    toast.warn('Email inválido!')
                } else if (err.code === 'auth/missing-password') {
                    toast.warn('A senha é obrigatória!')
                } else if (err.code === 'auth/weak-password') {
                    toast.warn('A senha precisa ter no mínimo 6 caracteres!')
                } else {
                    console.log(err.code)
                }
                setLoadingAuth(false)
            })
    }

    async function handleSignOut() {
        await signOut(auth)
    }

    function handleUpdateName(name) {
        if (name.trim().length === 0) {
            toast.warn('Preencha o campo nome!')
            return
        }

        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
                user.name = name
                toast.success('Nome atualizado com sucesso!')
            })
            .catch((err) => {
                toast.error('Erro ao atualizar o nome!')
                console.log(err.code)
            })
    }

    function handleUpdatePhotoUser(event) {
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
                    toast.error('Erro ao fazer upload da foto!')
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
                    toast.success('Foto atualizada com sucesso!')
                }
            )
        }
    };

    return (
        <AppContext.Provider
            value={{
                handleSignIn,
                handleSignUp,
                handleSignOut,
                handleUpdateName,
                handleUpdatePhotoUser,
                signed: !!user,
                user,
                loadingAuth,
                loadingVerifySigned,
                progressUpload,
                profilePhotoURL
            }}>
            {children}
        </AppContext.Provider>
    )
}