import Title from "../../components/Title/Title";
import { useForm } from "react-hook-form";
import {
  ButtonContainer,
  FormContainer,
  FormGroup,
  Input,
} from "../../styles/Form/FormStyle";
import NextButton from "../../components/Buttons/NextButton/NextButton";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import StepIndicator from "../../components/Step/Step";
import { useMultiStepFormContext } from "../../context/MultiStepFormContext";
import { FormDataPJ } from "../../@types/FormDataType";
import { validateDate } from "../../utils/Validator";

function PJ() {
  const { nextStep, setFormValues, backStep, formData } =
    useMultiStepFormContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataPJ>();

  const onSubmit = (data: FormDataPJ) => {
    setFormValues(data);
    nextStep();
  };

  const prevStep = () => {
    backStep();
  };

  return (
    <>
      <FormContainer>
        <StepIndicator />
        <Title name="Pessoa Jurídica 🤝🏽" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <p>Razão Social</p>
            <Input
              type="text"
              aria-label="Razão Social"
              aria-required="true"
              placeholder="Ex. Meliaz Store."
              defaultValue={formData.socialReason}
              {...register("socialReason", { required: true, pattern: /^[a-zA-Z ]+$/ })}
            />
             {errors.socialReason && errors.socialReason.type === "required" && (
              <span>Razão Social é obrigatório.</span>
            )}
            {errors.socialReason && errors.socialReason.type === "pattern" && (
              <span>Razão Social não deve conter números e símbolos</span>
            )}
          </FormGroup>

          <FormGroup>
            <p>CNPJ</p>
            <Input
              type="text"
              aria-label="cnpj"
              placeholder="12345677654321"
              aria-required="true"
              defaultValue={formData.cnpj}
              {...register("cnpj", { required: true, pattern: /^[0-9]+$/ })}
            />
            {errors.cnpj && errors.cnpj.type === "required" && (
              <span>CNPJ é obrigatório.</span>
            )}
            {errors.cnpj && errors.cnpj.type === "pattern" && (
              <span>CNPJ inválido! Não deve conter letras e símbolos.</span>
            )}
          </FormGroup>

          <FormGroup>
            <p>Data de Abertura</p>
            <Input
              type="date"
              aria-label="data de abertura"
              aria-required="true"
              defaultValue={formData.openingDate}
              {...register("openingDate", {
                required: true,
                validate: validateDate,
              })}
            />
            {errors.openingDate && errors.openingDate.type === "required" && (
              <span>Data de Abertura é obrigatório.</span>
            )}
            {errors.openingDate && errors.openingDate.type === "validate" && (
              <span>Data de Abertura deve ser antes do dia atual.</span>
            )}
          </FormGroup>

          <FormGroup>
            <p>Telefone</p>
            <Input
              type="text"
              aria-label="Telefone"
              aria-required="true"
              placeholder="XXXXXXXXXXX"
              defaultValue={formData.telephone}
              {...register("telephone", {
                required: true,
                pattern: /^\d{0,11}$/,
              })}
            />
            {errors.telephone && errors.telephone.type === "required" && (
              <span>Telefone é obrigatório.</span>
            )}
            {errors.telephone && errors.telephone.type === "pattern" && (
              <span>
                Telefone deve conter 10 a 11 dígitos e ter somente números.
              </span>
            )}
          </FormGroup>
        </form>
      </FormContainer>

      <ButtonContainer>
        <BackButton onClick={prevStep}></BackButton>
        <NextButton
          size="small"
          onClick={handleSubmit(onSubmit)}
          title="Continuar"
        ></NextButton>
      </ButtonContainer>
    </>
  );
}

export default PJ;
