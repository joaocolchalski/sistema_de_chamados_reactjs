import { useState } from "react"
import { Link } from "react-router-dom"
import './signin.css'

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="container">
            <div className="form">
                <img src={require("../../assets/logo-maior.png")} />

                <form className="form-container">
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button>Acessar</button>
                    <Link to={'/signup'}>Criar uma conta</Link>
                </form>
            </div>
        </div>
    )
}