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
} from "../SignUp/style"

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { handleSignIn } = useContext(AppContext)

    function SignIn(e) {
        e.preventDefault()
        handleSignIn(email, password)
    }

    return (
        <ContainerCenter>
            <Login>
                <LogoArea>
                    <LogoImg src={logo} alt="Logo da Empresa" />
                </LogoArea>

                <Form onSubmit={SignIn}>
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

                    <FormButton type="submit">Acessar</FormButton>
                </Form>

                <StyledLink to={'/signup'}>Criar uma conta</StyledLink>
            </Login>
        </ContainerCenter>
    )
}