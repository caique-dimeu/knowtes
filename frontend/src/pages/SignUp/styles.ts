import styled from "styled-components";
import imgASide from "./assets/l-side-image-background.jpg";

export const SignUpContainer = styled.div`
    display: flex;
    height: calc(100vh - 2rem); /* Subtraindo 4rem da altura total da tela */
    padding: 1rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    #Aside {

        height: 100%;
        width: 50%;
        background-image: url(${imgASide});
        background-size: cover;
        background-position: center;
        position: relative;
        border-radius: 3rem;
        overflow: hidden;

        span {
            position: absolute;
            top: 30%; 
            left: 50%; 
            transform: translate(-50%, -50%);
            font-size: 4rem;
            color: var(--indigo-950);
            font-weight: bold;
            font-family: "Geologica", sans-serif;
            text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2); 
            text-align: center;
        }
    }
`;
