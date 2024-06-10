import { ReactElement } from "react";
import {
  MultiStepFormProvider,
  useMultiStepFormContext,
} from "./context/MultiStepFormContext";
import Password from "./pages/AcessPassword/Password";
import Home from "./pages/HomeScreen/Home";
import PF from "./pages/PFScreen/PF";
import PJ from "./pages/PJScreen/PJ";
import Review from "./pages/ReviewInformation/Review";
import { FormCard, GlobalStyle } from "./styles/global";

interface StepComponents {
  [key: number]: ReactElement;
}

const FormSteps = () => {
  const { currentStep, formData } = useMultiStepFormContext();

  const stepComponents: StepComponents = {
    1: <Home />,
    2: formData.type === "PF" ? <PF /> : <PJ />,
    3: <Password />,
    4: <Review />,
  };

  const renderStep = () => {
    return stepComponents[currentStep] || null;
  };

  return renderStep();
};

function App() {
  return (
    <>
      <MultiStepFormProvider>
        <GlobalStyle />
        <FormCard>
          <FormSteps />
        </FormCard>
      </MultiStepFormProvider>
    </>
  );
}

export default App;
