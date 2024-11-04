import styled from "styled-components";

export const SignUpContent = styled.div`
    display:flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    overflow-y: auto; /* Barra de rolagem só aparece quando necessário */
    scrollbar-width: none; /* Para navegadores compatíveis (Firefox) */
    -ms-overflow-style: none; /* Para navegadores compatíveis (Internet Explorer) */

    /* Ocultando a barra de rolagem em navegadores WebKit (Chrome, Safari) */
    &::-webkit-scrollbar {
        display: none;
    }
    /* border: 12px solid ; */
    /* background: linear-gradient(to right, var(--indigo-300), var(--violet-900)); */
    /* padding: 8rem; */

    #header{   
        display: flex;
        gap:1rem;
        justify-content: center;
        align-items: center;
        color: var(--slate-500);
        padding-bottom: 12rem;

        button{
            padding: .5rem;
            border-radius: .4rem;
        }
        button:hover{
            background-color: var(--neutral-300);
        }
    }

    form{
        display: flex;
        flex-direction: column;
    }
    #mainContent{
        /* display: flex;
        flex: 1; */
        padding-bottom: 6rem;

        h6{
            font-size: .8rem;
            color: var(--slate-400);
            padding: 1.4rem;
            text-align: center;
        }
        .inputs{
            display: flex;
            flex-direction: column;
            gap: .5rem;
        }
        #singUp{
            /* border: 1px solid; */
            display: flex;
            gap: .5rem;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            
            h1 {
                font-size: clamp(1.5rem, 2vh, 3rem); /* Escala responsiva para o tamanho da fonte */
                white-space: nowrap; /* Impede que o texto quebre em linhas */
                overflow: hidden; /* Evita que o texto ultrapasse os limites */
                text-overflow: ellipsis; /* Adiciona "..." caso o texto ultrapasse o limite */
            }

            #knowtes{
                color: var(--indigo-600);
            }
        }
        
    }

    #btnSubmit {
    /* display: flex;
    border: 10px solid; */
    background-color: var(--violet-600);
    padding: 2rem;
    border-radius: 1rem;
    color: var(--neutral-50);
    transition: all 0.3s ease-in-out; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
}

    #btnSubmit:hover {
        background-color: var(--violet-950);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); /* Sombra mais pronunciada ao hover */
        border: 2px solid var(--violet-800);
        color: white;
        transform: translateX(1px); 
    }
    
    @media (max-width: 400) {
        overflow-x:scroll
    }
`;


