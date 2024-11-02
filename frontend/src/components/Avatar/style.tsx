import styled from "styled-components";
import defaultAvatar from '../../assets/default-avatar.jpg';

interface AvatarButtonProps {
    image: string;
}

export const AvatarButton = styled.button<AvatarButtonProps>`
    background: url(${({ image }) => image || defaultAvatar}) center/cover no-repeat;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    height: 2.75rem;
    transition: box-shadow .1s ease-out;
    width: 2.75rem;

    &:hover {
        box-shadow: 0px 0px 0px .125rem var(--neutral-400);
    }
`;