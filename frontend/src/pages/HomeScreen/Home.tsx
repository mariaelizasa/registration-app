import Title from "../../components/Title/Title";
import { Controller, useForm } from "react-hook-form";
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
import { FormDataHome } from "../../@types/FormDataType";

function Home() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormDataHome>();

  const { nextStep, setFormValues, formData } = useMultiStepFormContext();

  const onSubmit = (data: FormDataHome) => {
    setFormValues(data);
    nextStep();
  };

  return (
    <>
      <FormContainer>
        <StepIndicator />
        <Title name="Seja bem-vindo(a)! 🌸" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <p>Endereço de e-mail:</p>
            <Input
              type="email"
              placeholder="e-mail"
              aria-label="email"
              aria-required="true"
              defaultValue={formData.email}
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && errors.email.type === "required" && (
              <span>Email é obrigatório.</span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span>Email inválido.</span>
            )}
          </FormGroup>
          <FormGroup>
            <p>Selecione o tipo de cadastro:</p>
            <RadioGroup>
              <Label>
                <InputRadio
                  type="radio"
                  value="PF"
                  aria-label="Pessoa Fisica"
                  aria-required="true"
                  {...register("type", { required: true })}
                />
                Pessoa Física
              </Label>
              <Label>
                <InputRadio
                  type="radio"
                  value="PJ"
                  aria-label="Pessoa Juridica"
                  aria-required="true"
                  {...register("type")}
                />
                Pessoa Jurídica
                {errors.type && (
                  <div>
                    <span>
                      Selecione uma opção!
                    </span>
                  </div>
                )}
              </Label>
            </RadioGroup>
          </FormGroup>
        </form>
        <NextButton
          size="normal"
          alone
          title="Continuar"
          onClick={handleSubmit(onSubmit)}
        ></NextButton>
      </FormContainer>
    </>
  );
}

export default Home;
