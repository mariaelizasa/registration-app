import { createContext, useContext, useState } from "react";
import {
  FormContextType,
  MultiStepFormProviderProps,
} from "../@types/MultiFormContextType";
import { FormDataType } from "../@types/FormDataType";

const FormContext = createContext<FormContextType>({} as FormContextType);

export const useMultiStepFormContext = () => useContext(FormContext);

export const MultiStepFormProvider = ({
  children,
}: MultiStepFormProviderProps) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    type: "",
    telephone: "",
    name: "",
    cpf: "",
    dateOfBirth: "",
    socialReason: "",
    cnpj: "",
    openingDate: "",
    password: "",
  });

  const nextStep = () => setCurrentStep((step) => step + 1);
  const backStep = () => setCurrentStep((step) => step - 1);

  const setFormValues = (values: Partial<FormDataType>) =>
    setFormData({ ...formData, ...values });

  return (
    <FormContext.Provider
      value={{
        currentStep,
        nextStep,
        backStep,
        formData,
        setFormData,
        setFormValues,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
