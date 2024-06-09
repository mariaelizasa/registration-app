import styled from "styled-components";

const ButtonContainer = styled.div<{ alone: boolean }>`
  display: flex;
  justify-content: ${({ alone }) => (alone ? "center" : "")};
  margin-right: ${({ alone }) => (alone ? "auto" : "10px")};
`;

const Button = styled.button<{ size?: "small" | "normal" }>`
  padding: ${({ size }) => (size === "small" ? "15px 30px" : "15px 50px")};
  background-color: #fc0fc0;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export { ButtonContainer, Button };
