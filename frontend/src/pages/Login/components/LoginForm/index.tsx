import { useState } from "react";
import TextInput from "../../../../components/TextInput";
import { FormLogin } from "./styles";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  async function submitForm(e: React.FormEvent) {
    e.preventDefault();
    

    // await fetch('api/validauser', { method: 'POST', body: JSON.stringify({ name, email, pass, confirmpass }) })
    // .then(response => response.json())
    // .then(data => {
    //  if(data.succes){
    //   localStorage.setItem('User-token', data.data.id);
    //   navigate('/')
    //   }
    //   console.log("Usuário adicionado com sucesso", data);
    // })
    // .catch(error => {
    //   console.error("Erro ao adicionar usuário:", error);
    // });

    await fetch('https://pokeapi.co/api/v2/pokemon/abra', { method: 'GET'})
    .then(response => response.json())
    .then(data => {
      console.log("somente para simular uma requisição", data);
      console.log(data.id)
      localStorage.setItem('User-token', data.id);
      navigate('/')
    })
    .catch(error => {
      console.error("Erro ao fazer req:", error);
    });
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
            <TextInput label="E-mail" type='email' onChangeText={setLogin} required />
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
