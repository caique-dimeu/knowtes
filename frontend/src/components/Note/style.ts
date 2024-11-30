import styled from "styled-components";

export const NoteContainer = styled.div`
    display: flex;
    width: 30%;
    height: 20vh;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 1rem;
    flex-direction: column;
    padding: 0.5rem;
    gap: 1rem;

    h2 {
        font-size: 1.25rem;
        line-height: 1.5rem;
        color: var(--violet-500);
        font-weight: 600;
    }

    p {
        max-height: 80%;
        max-width: 99%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-weight: 500;
        color: var(--neutral-600);
    }
`;

export const StyledButton = styled.button`
  border-radius: 0.75rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  line-height: 1.5rem;
  padding: 0.5rem 1rem;
  color: var(--neutral-500);
  background-color: var(--neutral-100);

  &:hover {
    color: var(--neutral-600);
  }

  &:active {
    transform: scale(0.98);
  }

  svg {
    height: 1rem;
    width: 1rem;
  }
`;
