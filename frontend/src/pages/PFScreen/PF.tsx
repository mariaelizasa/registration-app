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



function PF() {
  const { nextStep, setFormValues, backStep, formData } = useMultiStepFormContext();

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
        <Title name="Pessoa Física" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <p>Nome</p>
            <Input type="text" {...register("name", { required: true })}
              defaultValue={formData.name} />
            {errors.name && <span>O nome é obrigatório</span>}
          </FormGroup>

          <FormGroup>
            <p>CPF</p>
            <Input
              type="text"
              defaultValue={formData.cpf}
              {...register("cpf", { required: true, pattern: /^[0-9]+$/ })}
            />
            {errors.cpf && (
              <span>
                O CPF é obrigatório. Não pode conter letras e símbolos.{" "}
              </span>
            )}
          </FormGroup>

          <FormGroup>
            <p>Data de Nascimento</p>
            <Input
              type="date"
              defaultValue={formData.dateOfBirth}
              {...register("dateOfBirth", { required: true })}
            />
            {errors.dateOfBirth && (
              <span>A data de nascimento é obrigatória</span>
            )}
          </FormGroup>

          <FormGroup>
            <p>Telefone</p>
            <Input
              type="text"
              defaultValue={formData.telephone}
              {...register("telephone", {
                required: true,
                pattern: /^[0-9]+$/,
              })}
            />
            {errors.telephone && (
              <span>O telefone é obrigatório e deve conter apenas números</span>
            )}
          </FormGroup>
        </form>
      </FormContainer>
      <ButtonContainer>
        <BackButton onClick={prevStep}></BackButton>
        <NextButton size="small" onClick={handleSubmit(onSubmit)} title="Continuar"></NextButton>
      </ButtonContainer>
    </>
  );
}

export default PF;
