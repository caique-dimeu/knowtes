import Nav from "./components/Nav";
import { HomeContainer } from "./styles";

export default function Home() {
    const [isModalVisible, setIsModalVisible] = useState(true); // Controla o estado do modal

    return (
        <HomeContainer>
            <Nav />
        </HomeContainer>
    );
}
