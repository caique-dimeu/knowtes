import styled, { keyframes } from "styled-components";

interface noteDetailsProps {
  isEditing?: boolean;
}

interface DialogProps {
  isClosing?: boolean;
}

const fadeIn = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.9);
    opacity: 0;
  }
`;

export const NoteDetailsContainer = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.5rem);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
`;

export const StyledDialog = styled.dialog<DialogProps>`
  box-sizing: border-box;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: none;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 24rem;
  padding: 2rem;
  position: relative;
  width: 38.75rem;

  animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.3s forwards;

  h2 {
    color: var(--neutral-600);
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.5rem;
    max-width: 80%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: var(--neutral-400);
  height: 1.5rem;
  padding: 0;
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1.5rem;

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  &:hover {
    color: var(--neutral-500);
  }
`;

export const StyledTextarea = styled.textarea<noteDetailsProps>`
  border: none;
  border-radius: 0.25rem;
  box-shadow: ${({ isEditing }) =>
    isEditing ? "0px 0px 0px 1px var(--neutral-300)" : "none"};
  box-sizing: border-box;
  font-family: var(--primary-font);
  color: var(--neutral-600);
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  height: calc(100% - 3rem);
  outline: none;
  padding: ${({ isEditing }) => (isEditing ? "0.5rem" : "0")};
  resize: none;
  width: 100%;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--neutral-200);
    border-radius: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--neutral-400);
    border-radius: 0.25rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--neutral-500);
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

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const SaveButton = styled(StyledButton)`
  color: var(--neutral-50);
  background-color: var(--violet-500);

  &:hover {
    color: var(--neutral-50);
  }
`;

export const DeleteButton = styled(StyledButton)`
  color: var(--neutral-50);
  background-color: var(--red-500);

  &:hover {
    color: var(--neutral-50);
  }
`;
