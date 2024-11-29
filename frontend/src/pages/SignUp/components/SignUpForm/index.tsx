import { useState, useRef } from "react";
import TextInput from "../../../../components/TextInput";
import { SignUpContent } from "./styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/Auth";

export default function SignUpForm() {
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [confirmpass, setConfirmPass] = useState<string>("");
  const navigate = useNavigate();
  const { register } = useAuth();

  async function submitForm(e: React.FormEvent) {
    e.preventDefault();

    if (pass !== confirmpass) {
      alert("As senhas não coincidem!");
      
      return;
    }

    register(name, pass);
    
  }

  // async function testeStorage() {
  //   const token = localStorage.getItem('User-token');
  //   console.log('teoricamente o token do usuario=>',token);  // '12345'
    
  //   // Remover um item específico
  //   localStorage.removeItem('User-token');

  //   // Limpar todo o localStorage
  //   localStorage.clear();
  // }

  return (
    <SignUpContent>
      <div id="header">
        <h4>Já possui uma conta ?</h4>
        <button type="button" onClick={()=>{navigate('/login')}}>entrar</button>
      </div>

      <form action="/" method="get" onSubmit={submitForm}>
        <div id="mainContent">
          <div id="singUp">
            <h1>Cadastre-se no</h1>
            <h1 id="knowtes">knowtes</h1>
          </div>
          <h6>
            Bem-vindo ao Knowtes! Crie sua conta para começar a usar o app e ter
            acesso a todos os recursos.
          </h6>

          <div className="inputs">
            <TextInput label="Nome completo" onChangeText={setName} required />
            <TextInput
              label="Senha"
              pass
              onChangeText={setPass}
              required
            />
            <TextInput
              label="Confirmar senha"
              pass
              onChangeText={setConfirmPass}
              required
            />
          </div>
        </div>

        <button id="btnSubmit" type="submit">
          Cadastre-se
        </button>
      </form>
    </SignUpContent>
  );
}
