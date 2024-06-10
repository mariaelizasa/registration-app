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

interface FormData {
  password: string;
}

function Password() {
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
        <Title name="Senha de Acesso" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <p>Insira sua senha</p>
            <Input
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && <span>A senha deve ser obrigatória</span>}
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

export default Password;
