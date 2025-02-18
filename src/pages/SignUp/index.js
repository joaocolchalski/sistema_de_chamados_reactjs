import { useState } from "react"
import { Link } from "react-router-dom"

export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="container">
            <div className="form">
                <img src={require("../../assets/logo-maior.png")} />

                <form className="form-container">
                    <input
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

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

                    <button>Cadastrar</button>
                    <Link to={'/'}>Já possuo uma conta</Link>
                </form>
            </div>
        </div>
    )
}