import styled from "styled-components";
import imgASide from "./assets/l-side-image-background.jpg";

export const ContentLogin = styled.div`

    display: flex;
    flex: 1;
    flex-direction: row;
    /* border-width: 2px; */
    /* border-radius: 10rem; */
    /* border: .2rem solid var(--neutral-300); */
    overflow: hidden;
    gap: 1rem;

    #Aside {
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

    /* Media query para esconder o #Aside em telas menores que 1000px */
    @media (max-width: 1000px) {
        #Aside {
            display: none;
        }
    }
`;
