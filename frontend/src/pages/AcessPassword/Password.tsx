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
import { FormDataPassword } from "../../@types/FormDataType";



function Password() {
  const { nextStep, setFormValues, backStep, formData } =
    useMultiStepFormContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataPassword>();

  const onSubmit = (data: FormDataPassword) => {
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
              defaultValue={formData.password}
            />
            {errors.password && <span>A senha deve ser obrigatória</span>}
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

export default Password;
