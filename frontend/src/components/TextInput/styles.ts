import styled from "styled-components";

export const ContainerInput = styled.div`
    display: flex;
    flex: 1;
    padding: 0.2rem;

    .input-group {
        position: relative;
        display: flex;
        flex: 1;
        
    }

    .input {
        border: solid 1.5px var(--neutral-400);
        border-radius: 1rem;
        background: none;
        padding: 1rem;
        font-size: 1rem;
        color: var(--neutral-950);
        transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        flex: 1;
    }

    .user-label {
        position: absolute;
        left: 15px;
        color: var(--slate-800);
        pointer-events: none;
        transform: translateY(1rem);
        transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Quando o input está em foco ou tem valor */
    .input:focus ~ .user-label,
    .input:not(:placeholder-shown) ~ .user-label {
        transform: translateY(-50%) scale(0.8);
        background-color: var(--slate-50);
        padding: 0 0.2rem;
        color: var(--indigo-500);
    }

    .input:focus {
        outline: none;
        border: 1.5px solid var(--indigo-500);
    }
`;
