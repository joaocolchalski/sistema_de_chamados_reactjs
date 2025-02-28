import {
    Container
} from "./style"

export default function Title({ icon, title }) {
    return (
        <Container>
            {icon}{title}
        </Container>
    )
}