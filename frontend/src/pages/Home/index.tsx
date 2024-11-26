import React, { useState } from "react";
import Modal from "../../components/modal";
import Header from "./components/Header";
import { HomeContainer } from "./styles";

export default function Home() {
    const [isModalVisible, setIsModalVisible] = useState(true); // Controla o estado do modal

    return (
        <HomeContainer>
            <Header />
            <Modal visible={isModalVisible} onClose={() => setIsModalVisible(false)} />
        </HomeContainer>
    );
}
