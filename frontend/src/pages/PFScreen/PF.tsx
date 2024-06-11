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
import { FormDataPF } from "../../@types/FormDataType";
import { validateDate } from "../../utils/Validator";

function PF() {
  const { nextStep, setFormValues, backStep, formData } =
    useMultiStepFormContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataPF>();

  const onSubmit = (data: FormDataPF) => {
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
        <Title name="Pessoa Física 💁‍♀️" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <p>Nome</p>
            <Input
              aria-label="Nome"
              placeholder="Ex. Maria"
              aria-required="true"
              type="text"
              {...register("name", { required: true, pattern: /^[a-zA-Z ]+$/ })}
              defaultValue={formData.name}
            />
             {errors.name && errors.name.type === "required" && (
              <span>Nome é obrigatório.</span>
            )}
            {errors.name && errors.name.type === "pattern" && (
              <span>Nome não deve conter números e símbolos.</span>
            )}
          </FormGroup>

          <FormGroup>
            <p>CPF</p>
            <Input
              type="text"
              aria-label="CPF"
              placeholder="12345678901"
              aria-required="true"
              defaultValue={formData.cpf}
              {...register("cpf", { required: true, pattern: /^\d{0,11}$/ })}
            />
            {errors.cpf && errors.cpf.type === "required" && (
              <span>CPF é obrigatório.</span>
            )}
            {errors.cpf && errors.cpf.type === "pattern" && (
              <span>CPF inválido! Não deve conter letras e símbolos</span>
            )}
          </FormGroup>

          <FormGroup>
            <p>Data de Nascimento</p>
            <Input
              type="date"
              aria-label="Data de Nascimento"
              aria-required="true"
              defaultValue={formData.dateOfBirth}
              {...register("dateOfBirth", {
                required: true,
                validate: validateDate,
              })}
            />
            {errors.dateOfBirth && errors.dateOfBirth.type === "required" && (
              <span>Data de Nascimento é obrigatório.</span>
            )}
            {errors.dateOfBirth && errors.dateOfBirth.type === "validate" && (
              <span>Data de nascimento deve ser antes do dia atual.</span>
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
                pattern:/^\d{0,11}$/,
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

export default PF;
