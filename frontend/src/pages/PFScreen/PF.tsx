import Title from "../../components/Title/Title";
import { useForm } from "react-hook-form";
import { ButtonContainer, FormContainer, FormGroup, Input } from "../../styles/Form/FormStyle";
import NextButton from "../../components/Buttons/NextButton/NextButton";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import StepIndicator from "../../components/Step/Step";
import { useMultiStepFormContext } from "../../context/MultiStepFormContext";

interface FormData {
  name: string;
  cpf: string;
  dateOfBirth: string;
  telephone: number;
}

function PF() {
  const { nextStep, setFormValues, backStep } = useMultiStepFormContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: any) => {
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
            <Input type="text" {...register("name", { required: true })} />
            {errors.name && <span>O nome é obrigatório</span>}
          </FormGroup>

          <FormGroup>
            <p>CPF</p>
            <Input
              type="text"
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
      <NextButton size="small" onClick={handleSubmit(onSubmit)}></NextButton>
      </ButtonContainer>
   
    </>
  );
}

export default PF;
