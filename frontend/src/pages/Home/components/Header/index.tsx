import Avatar from "../../../../components/Avatar";
import { BrandContainer, HeaderContainer } from "./styles";
import Icon from "../../../../components/Icons";
import Dropdown from "../../../../components/Dropdown";

export default function Header() {

    const handleClickAvatar = () => {

    }

    return (
        <HeaderContainer>
            <BrandContainer>
                <Icon name="sparkle" />
                <span>Notes</span>
            </BrandContainer>
            <Avatar onClick={handleClickAvatar}/>
            <Dropdown />
        </HeaderContainer>
    );
}