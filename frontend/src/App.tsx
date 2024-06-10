import {
  MultiStepFormContext,
  MultiStepFormProvider,
} from "./context/MultiStepFormContext";
import Password from "./pages/AcessPassword/Password";
import Home from "./pages/HomeScreen/Home";
import PF from "./pages/PFScreen/PF";
import PJ from "./pages/PJScreen/PJ";
import { FormCard, GlobalStyle } from "./styles/global";

const FormSteps = () => {
  const { currentStep, formData } = MultiStepFormContext();

  switch (currentStep) {
    case 1:
      return <Home />;
    case 2:
      return formData.type === "PF" ? <PF /> : <PJ />;
    case 3:
      return <Password />;
    default:
      return null;
  }
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
