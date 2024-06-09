import styled from "styled-components";

const FormContainer = styled.div`
  width: 350px;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const RadioGroup = styled.div`
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const InputRadio = styled.input`
 margin-right: 5px;
 
`;
const Label = styled.label`
  margin-right: 10px;
 font-style: italic;
`;

export { Label, Input, RadioGroup, FormGroup, FormContainer, ButtonContainer, InputRadio };
