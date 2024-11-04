import LoginForm from "../LoginForm";
import { ContentLogin } from "./styles";

export default function ContainerContentLogin() {
  return (
    <ContentLogin>
      <div id="Aside">
        <span>Bem vindo ao knowtes!</span>
      </div>
      <LoginForm />
    </ContentLogin>
  );
}
