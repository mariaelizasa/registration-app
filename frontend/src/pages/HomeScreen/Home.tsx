import Title from "../../components/Title/Title";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  FormGroup,
  Input,
  InputRadio,
  Label,
  RadioGroup,
} from "../../styles/Form/FormStyle";
import NextButton from "../../components/Buttons/NextButton/NextButton";
import StepIndicator from "../../components/Step/Step";
import { useMultiStepFormContext } from "../../context/MultiStepFormContext";

interface FormData {
  email: string;
  type: string;
}

function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { nextStep, setFormValues } = useMultiStepFormContext();

  const onSubmit = (data: any) => {
    setFormValues(data);
    nextStep();
  };

  return (
    <>
      <FormContainer>
        <StepIndicator />
        <Title name="Seja bem-vindo(a)!" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <p>Endereço de e-mail:</p>
            <Input type="email" {...register("email", { required: true })} />
            {errors.email && <span>Endereço de e-mail é obrigatório</span>}
          </FormGroup>
          <FormGroup>
            <p>Selecione o tipo de cadastro:</p>
            <RadioGroup>
              <Label>
                <InputRadio
                  type="radio"
                  value="PF"
                  {...register("type", { required: true })}
                />
                Pessoa Física
              </Label>
              <Label>
                <InputRadio
                  type="radio"
                  value="PJ"
                  {...register("type", { required: true })}
                />
                Pessoa Jurídica
              </Label>
            </RadioGroup>
          </FormGroup>
        </form>
        <NextButton
          size="normal"
          alone
          onClick={handleSubmit(onSubmit)}
        ></NextButton>
      </FormContainer>
    </>
  );
}

export default Home;
