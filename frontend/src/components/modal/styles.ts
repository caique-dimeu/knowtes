import styled from "styled-components";

export const ModalBackground = styled.div`
    position: fixed; /* Faz o modal se posicionar em relação à viewport */
    top: 0;
    left: 0;
    width: 100vw; /* Largura total da viewport */
    height: 100vh; /* Altura total da viewport */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5); /* Fundo semitransparente */
    background-color: var(--slate-800-opacity, rgba(0, 0, 0, 0.6)); /* Variável com opacidade */
    z-index: 1000; /* Garante que esteja acima de outros elementos */
`;
export const ModalContainer = styled.div`
    width:80%;
    height:60%; /* Espaçamento interno */
    background-color: #f0f0f0; /* Cor de fundo para visualização */
    border: 1px solid #ccc; /* Borda para destacar o retângulo */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center; 
    /* justify-content: center; */
    border-radius: 2rem;
    border: .2rem solid var(--violet-200); /* Borda clara */
    border-radius: 2rem; /* Bordas arredondadas */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    margin: auto; /* Centraliza o card no container pai */
    overflow: hidden;
    overflow-y: auto;

    form {
        padding: 1rem;
        margin-top: 1rem;
        /* border: 1px solid saddlebrown; */
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;
        /* height: 100%; */

        .dates {
            /* border: 1px solid;          */
            display: flex;             
            flex-direction: row;       
            align-items: center;         
        }
        
        #max-height {
           height: 14rem;
        }

        #btnSubmit {
            /* display: flex;
            border: 10px solid; */
            
            /* margin-left: 45vh; */
            background-color: var(--violet-600);
            padding: 1.2rem;
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
    }
`;
export const ModalContainerHeader = styled.div`
    border: .1rem solid var(--violet-200); /* Borda clara */
    
    width: 100%;
    padding: 2rem;
    display: flex;
    justify-content :space-between ;
    padding-left:2rem;
    flex-direction: row;
    /* flex: 1; */

    h1 {
        margin-left: 2rem;
        text-align: center;
        font-size: 2rem;
        
    }
    button {
        margin-right:1rem;
        /* background-color: var(--red-500);  */
        background-color: var(--violet-500); /* Cor de fundo vermelha */
        border-radius: 50%; /* Botão redondo */
        padding: 0.3rem; /* Ajuste no padding para um tamanho menor */
        border: none; /* Remover borda padrão do botão */
        color: white; /* Cor do texto (branco) */
        font-size: 1rem; /* Tamanho da fonte reduzido */
        width: 2rem; /* Largura do botão menor */
        height: 2rem; /* Altura do botão menor */
        display: flex;
        justify-content: center;
        align-items: center; /* Centraliza o conteúdo dentro do botão */
        cursor: pointer; /* Cursor de ponteiro para indicar interatividade */
        transition: background-color 0.3s ease; /* Efeito de transição suave ao passar o mouse */
    }

    button:hover {
        /* background-color: var(--red-600);  */
        background-color: var(--violet-900); /* Cor do fundo ao passar o mouse */
    }

    button:focus {
        outline: none; /* Remove o contorno padrão ao focar no botão */
    }

`;
