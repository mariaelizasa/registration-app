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


function PJ() {
  const { nextStep, setFormValues, backStep, formData } = useMultiStepFormContext();

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
        <Title name="Pessoa Jurídica" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <p>Razão Social</p>
            <Input
              type="text"
              defaultValue={formData.socialReason}
              {...register("socialReason", { required: true })}
            />
            {errors.socialReason && <span>A Razão Social é obrigatória</span>}
          </FormGroup>

          <FormGroup>
            <p>CNPJ</p>
            <Input
              type="text"
              defaultValue={formData.cnpj}
              {...register("cnpj", { required: true, pattern: /^[0-9]+$/ })}
            />
            {errors.cnpj && (
              <span>
                O CNPJ é obrigatório. Não pode conter letras e símbolos.{" "}
              </span>
            )}
          </FormGroup>

          <FormGroup>
            <p>Data de Abertura</p>
            <Input
              type="date"
              defaultValue={formData.openingDate}
              {...register("openingDate", { required: true })}
            />
            {errors.openingDate && (
              <span>A data de abertura é obrigatória</span>
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

export default PJ;
