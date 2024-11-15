import Avatar from "../../../../components/Avatar";
import { BrandContainer, NavContainer } from "./styles";
import Icon from "../../../../components/Icons";
import Dropdown from "../../../../components/Dropdown";
import { useState } from "react";

export default function Nav() {
    const [openDropdown, setOpenDropdown] = useState(false);

    const handleClickAvatar = () => {
        setOpenDropdown((prev) => !prev);
    }

    return (
        <NavContainer>
            <BrandContainer>
                <Icon name="sparkle" />
                <span>Notes</span>
            </BrandContainer>
            <Avatar onClick={handleClickAvatar}/>
            {openDropdown && <Dropdown />}
        </NavContainer>
    );
}