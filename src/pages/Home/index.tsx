import { Container, Header } from "./styles";
import Logo from '../../assets/logo.svg?component';
import { FiLogOut } from 'react-icons/fi';
import { VideosList } from "../../components/VideosList";
import { CurrentVideo } from "../../components/CurrentVideo";
import { useAuth } from "../../contexts/AuthContext";

export function Home() {
  const { logout } = useAuth();

  return (
    <Container>
      <Header>
        <Logo />
        <FiLogOut onClick={logout} />
      </Header>
      <CurrentVideo />
      <VideosList />
    </Container>
  )
}