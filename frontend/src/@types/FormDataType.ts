interface FormDataType {
  email: string;
  type: string;
  telephone: string;
  name?: string;
  cpf?: string;
  dateOfBirth?: string;
  socialReason?: string;
  cnpj?: string;
  openingDate?: string;
  password: string;
}

interface FormDataPassword {
  password: string;
}

interface FormDataHome {
  email: string;
  type: string;
}

interface FormDataPF {
  name: string;
  cpf: string;
  dateOfBirth: string;
  telephone: string;
}

interface FormDataPJ {
  socialReason: string;
  cnpj: string;
  openingDate: string;
  telephone: string;
}

export type {
  FormDataType,
  FormDataPassword,
  FormDataHome,
  FormDataPF,
  FormDataPJ,
};
