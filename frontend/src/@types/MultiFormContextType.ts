import { ReactNode } from "react";
import { FormDataType } from "./FormDataType";

interface FormContextType {
  currentStep: number;
  nextStep: () => void;
  backStep: () => void;
  formData: FormDataType;
  setFormData: (values: FormDataType) => void;
  setFormValues: (values: Partial<FormDataType>) => void;
}

interface MultiStepFormProviderProps {
  children: ReactNode;
}

export type { MultiStepFormProviderProps, FormContextType };
