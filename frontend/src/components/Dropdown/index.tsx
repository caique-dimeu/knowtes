import { DropdownContainer, OptionButton } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleHalfStroke,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import useLogout from "../../hooks/logout";

export default function Dropdown() {
  const { logout } = useLogout();

  return (
    <DropdownContainer>
      <OptionButton>
        <span>Jhon Doe</span>
      </OptionButton>
      <hr />
      <OptionButton>
        <FontAwesomeIcon icon={faCircleHalfStroke} />
        <span>Tema</span>
      </OptionButton>
      <OptionButton onClick={logout}>
        <FontAwesomeIcon icon={faRightFromBracket} />
        <span>Sair</span>
      </OptionButton>
    </DropdownContainer>
  );
}
