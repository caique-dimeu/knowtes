import React, { useEffect, useState } from "react";
import { AvatarButton } from "./style";
import { fetchAvatar } from "./services/fetchAvatar";

interface AvatarProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Avatar({ onClick }: AvatarProps) {
    const [avatar, setAvatar] = useState('');

    const getAndSetAvatar = async () => {
        const newAvatar = await fetchAvatar(0);
        setAvatar(newAvatar);
    };

    useEffect(() => {
        getAndSetAvatar()
    }, [] );

    return (
        <AvatarButton image={avatar} onClick={onClick} />
    );
}