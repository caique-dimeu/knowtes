import { useNavigate } from "react-router-dom";
import ContainerContentLogin from "./components/ContainerContentLogin";
import { LoginContainer } from "./styles";
import { useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se já existe um token de usuário
    if (localStorage.getItem('User-token')) {
      navigate('/');  // Se tiver token, redireciona para a página inicial
    }
  }, [navigate]);  // Adiciona o `navigate` como dependência

  return (
    <LoginContainer>
      <ContainerContentLogin />
    </LoginContainer>
  );
}
