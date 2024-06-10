interface BackButtonProps {
  onClick: () => void;
}

interface NextButtonProps {
  size?: "small" | "normal";
  alone?: boolean;
  onClick: () => void;
  title?: "Continuar" | "Enviar";
  type?: "submit" | "button";
}

export type {BackButtonProps, NextButtonProps}