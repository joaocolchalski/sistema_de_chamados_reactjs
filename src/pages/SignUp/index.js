import { useContext, useState } from "react"
import { AppContext } from "../../contexts/app"
import logo from '../../assets/logo-maior.png'
import {
    ContainerCenter,
    Login,
    LogoArea,
    LogoImg,
    Form,
    FormInput,
    FormButton,
    StyledLink
} from "./style"

export default function SignIn() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { handleSignUp, loadingAuth } = useContext(AppContext)

    function SignUp(e) {
        e.preventDefault()
        handleSignUp(name, email, password)
    }

    return (
        <ContainerCenter>
            <Login>
                <LogoArea>
                    <LogoImg src={logo} alt="Logo da Empresa" />
                </LogoArea>

                <Form onSubmit={SignUp}>
                    <FormInput
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <FormInput
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <FormInput
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <FormButton type="submit">{loadingAuth ? 'Carregando...' : 'Cadastrar'}</FormButton>
                </Form>

                <StyledLink to={'/'}>Já possuo uma conta</StyledLink>
            </Login>
        </ContainerCenter>
    )
}