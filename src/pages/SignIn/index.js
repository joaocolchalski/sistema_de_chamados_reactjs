import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import './signin.css'
import { AuthContext } from "../../contexts/auth"

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { handleSignIn } = useContext(AuthContext)

    function SignIn(e) {
        e.preventDefault()
        handleSignIn(email, password)
    }

    return (
        <div className="container">
            <form className="form" onSubmit={SignIn}>
                <div className="logo-container">
                    <img src={require("../../assets/logo-maior.png")} />
                </div>

                <div className="form-container">
                    <input
                        autoComplete={false}
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        autoComplete={false}
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">Acessar</button>
                    <Link to={'/signup'}>Criar uma conta</Link>
                </div>
            </form>
        </div>
    )
}