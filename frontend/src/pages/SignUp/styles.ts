import styled from "styled-components";
import imgASide from "./assets/l-side-image-background.jpg";

export const SignUpContainer = styled.div`
    display: flex;
    height: calc(100vh - 2rem); /* Subtraindo 4rem da altura total da tela */
    padding: 1rem;
    flex-direction: row; /* Mantenha 'row' se você quiser que os elementos fiquem lado a lado */
    /* align-items: center;
    justify-content: center; */

    #Aside {
        /* flex: 1; 
        display: flex;
        flex-direction: column; */
        height: 100vh;
        /* border: 1px solid; */
        width: 50%; /* Garantindo que o Aside ocupe 50% da largura */
        background-image: url(${imgASide});
        background-size: cover; /* Faz com que a imagem ocupe todo o espaço disponível */
        background-position: center; /* Centraliza a imagem */
        position: relative;
        border-radius: 3rem;
        overflow: hidden;

        span {
            position: absolute;
            top: 30%; /* Ajuste o top para posicionar o texto mais para o centro */
            left: 50%;
            transform: translate(-50%, -50%); /* Centraliza o texto */
            font-size: 4rem;
            color: var(--indigo-950);
            font-weight: bold;
            font-family: "Geologica", sans-serif;
            text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2); 
            text-align: center;
        }
    }
`;
