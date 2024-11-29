import { useState } from "react";
import TextInput from "../../../../components/TextInput";
import { FormLogin } from "./styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/Auth";

export default function LoginForm() {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState("");
  const [pass, setPass] = useState("");
  const { login } = useAuth();

  async function submitForm(e: React.FormEvent) {
    e.preventDefault();
    login(userLogin, pass);
    
  }

  return (
    <FormLogin>
      <div id="header">
        <h4>Não possui uma conta ainda ?</h4>
        <button type="button" onClick={() => navigate("/signup")}>
          Crie uma
        </button>
      </div>

      <form action="" method="get" onSubmit={submitForm}>
        <div id="mainContent">
          <div id="singUp">
            <h1>Entrar no</h1>
            <h1 id="knowtes">knowtes</h1>
          </div>
          <h6>
            Bem-vindo de volta ao Knowtes! Faça login com suas credenciais para
            continuar aproveitando todos os recursos do app.
          </h6>

          <div className="inputs">
            <TextInput label="Usuário" type='text' onChangeText={setUserLogin} required />
            <TextInput label="Senha" pass onChangeText={setPass} required />
          </div>
        </div>

        <button id="btnSubmit" type="submit" >
          Login
        </button>
      </form>
    </FormLogin>
  );
}
