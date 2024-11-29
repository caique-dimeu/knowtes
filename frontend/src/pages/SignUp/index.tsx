import { useNavigate } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import { SignUpContainer } from "./styles";
import { useEffect } from "react";
import { useAuth } from "../../contexts/Auth";

export default function SignUp() {
  const navigate = useNavigate();
  const { userId } = useAuth();

  useEffect(() => {
    if (userId) {
      navigate('/');
    }
  }, [navigate, userId]);


  return (
    <SignUpContainer>
      <div id="Aside">
        <span>Cadastre-se no knowtes!</span>
      </div>
      <SignUpForm />
    </SignUpContainer>
  );
}
