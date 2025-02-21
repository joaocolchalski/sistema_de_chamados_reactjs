import { Spinner } from "./style";
import {
    Screen,
    Container
} from "../../pages/Settings/style";

export default function SpinnerLoading() {
    return (
        <Screen>
            <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Spinner />
            </Container>
        </Screen>
    )
}