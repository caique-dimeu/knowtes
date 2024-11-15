import styled from "styled-components";

export const NavContainer = styled.header`
    align-items: center;
    background-color: var(--neutral-50);
    box-sizing: border-box;
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
    padding: .5rem 1rem;
    position: relative;
    width: 100%;
`;

export const BrandContainer = styled.div`
    align-items: center;
    color: var(--neutral-400);
    display: flex;
    gap: .5rem;

    span {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 600;
    }
`;
