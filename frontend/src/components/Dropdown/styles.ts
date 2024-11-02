import styled from "styled-components";

export const DropdownContainer = styled.div`
    background-color: var(--neutral-25);
    border-radius: .75rem;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    color: var(--neutral-400);
    display: flex;
    flex-direction: column;
    padding: .5rem;
    position: absolute;
    right: 0;
    top: calc(100% + 0.5rem);
    width: 10rem;

    hr {
        border: 1px solid var(--neutral-50);
        margin-bottom: .5rem;
        width: calc(100% - 1rem);
    }

    & > span {
        font-size: 0.875rem;
        font-weight: 600;
        line-height: 1rem;
        padding-left: 0.5rem;
        padding-top: 0.5rem;
    }
`;

export const OptionButton = styled.button`
    align-items: center;
    display: flex;
    background-color: transparent;
    border-radius: .75rem;
    color: var(--neutral-400);
    gap: .5rem;
    padding: .75rem;
    transition: background-color .1s ease-in-out;
    width: 100%;

    &:hover {
        background-color: var(--neutral-50);
    }

    span {
        font-size: 0.875rem;
        font-weight: 600;
        line-height: 1rem;
    }
`;