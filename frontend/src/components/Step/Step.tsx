import { useMultiStepFormContext } from "../../context/MultiStepFormContext";
import { StepNumber, StyledStepIndicator } from "./style";

const StepIndicator = () => {
  const { currentStep } = useMultiStepFormContext();

  return (
    <StyledStepIndicator>
    Etapa <StepNumber>{currentStep}</StepNumber> de 4.
  </StyledStepIndicator>
  
  );
};

export default StepIndicator;
