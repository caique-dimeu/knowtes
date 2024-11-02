import { DropdownContainer, OptionButton } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import useLogout from "../../hooks/logout";
import { useTheme } from "styled-components";

export default function Dropdown() {
    const { logout } = useLogout();
    const { theme } = useTheme();

    return (
        <DropdownContainer theme={theme}>
            <span>Jhon Doe</span>
            <hr />
            <OptionButton theme={theme}>
                <FontAwesomeIcon icon={faCircleHalfStroke} />
                <span>Tema</span>
            </OptionButton>
            <OptionButton onClick={logout} theme={theme}>
                <FontAwesomeIcon icon={faRightFromBracket} />
                <span>Sair</span>
            </OptionButton>
        </DropdownContainer>
    );
}