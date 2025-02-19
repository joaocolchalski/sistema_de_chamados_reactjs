import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/auth"

export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { handleSignUp } = useContext(AuthContext)

    function SignUp(e) {
        e.preventDefault()
        handleSignUp(name, email, password)
    }

    return (
        <div className="container">
            <form className="form" onSubmit={SignUp}>
                <div className="logo-container">
                    <img src={require("../../assets/logo-maior.png")} />
                </div>

                <div className="form-container">
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

                    <button type="submit">Cadastrar</button>
                    <Link to={'/'}>Já possuo uma conta</Link>
                </div>
            </form>
        </div>
    )
}