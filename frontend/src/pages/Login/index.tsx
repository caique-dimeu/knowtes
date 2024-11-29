import { useNavigate } from "react-router-dom";
import ContainerContentLogin from "./components/ContainerContentLogin";
import { LoginContainer } from "./styles";
import { useEffect } from "react";
import { useAuth } from "../../contexts/Auth";

export default function Login() {
  const navigate = useNavigate();
  const { userId } = useAuth();

  useEffect(() => {
    if (userId) {
      navigate('/');
    }
  }, [navigate, userId]);

  return (
    <LoginContainer>
      <ContainerContentLogin />
    </LoginContainer>
  );
}
