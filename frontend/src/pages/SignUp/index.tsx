import { useNavigate } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import { SignUpContainer } from "./styles";
import { useEffect } from "react";

export default function SignUp() {
  const navigate = useNavigate();

  // Usando useEffect para garantir que a navegação só aconteça após a renderização
  useEffect(() => {
    if (localStorage.getItem('User-token')) {
      navigate('/'); // Redireciona para a página inicial se já houver um token
    }
  }, [navigate]);  // O useEffect só roda novamente se o `navigate` mudar, o que não acontece

  return (
    <SignUpContainer>
      <div id="Aside">~~
        <span>Cadastre-se no knowtes!</span>
      </div>
      <SignUpForm />
    </SignUpContainer>
  );
}
