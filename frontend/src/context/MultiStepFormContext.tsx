import React, { createContext, useContext, useState } from "react";

const FormContext = createContext({});

export const useMultiStepFormContext = () => useContext(FormContext);

export const MultiStepFormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setCurrentStep((step) => step + 1);
  const backStep = () => setCurrentStep((step) => step - 1);
  const setFormValues = (values: Object) =>
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
