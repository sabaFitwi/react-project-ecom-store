import styled from "styled-components";
import { media } from "../../styles/media";

export const FormWrapper = styled.form`
  width: 40%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid ${({ theme }) => theme.color.lightgray};
  border-radius: 5%;
  padding: 40px 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  ${media.tablet} {
    width: 60%;
  }
  ${media.mobile} {
    width: 90%;
  }
`;
export const InputWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 80%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.color.lightgray};
  border-radius: 4px;
  margin-bottom: 16px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.primary};
  }
`;

export const Textarea = styled.textarea`
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.color.lightgray};
  border-radius: 4px;
  margin-bottom: 16px;
  width: 100%;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.primary};
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.button};
  color: ${({ theme }) => theme.color.default};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightgray};
    color: black;
  }
`;
export const FormValid = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.color.green};
`;
