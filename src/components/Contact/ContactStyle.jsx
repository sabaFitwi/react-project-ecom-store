import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: blue;
  }
`;

export const Textarea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
  width: 100%;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: blue;
  }
`;

export const Button = styled.button`
  background-color: blue;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;
