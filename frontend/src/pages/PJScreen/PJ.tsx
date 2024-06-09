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

interface FormData {
  socialReason: string;
  cnpj: string;
  openingDate: Date;
  telephone: number;
}

function PJ() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <>
      <FormContainer>
        <Title name="Pessoa Jurídica" />
        <form onSubmit={handleSubmit(() => alert("teste"))}>
          <FormGroup>
            <p>Razão Social</p>
            <Input
              type="text"
              {...register("socialReason", { required: true })}
            />
            {errors.socialReason && <span>A Razão Social é obrigatória</span>}
          </FormGroup>

          <FormGroup>
            <p>CNPJ</p>
            <Input
              type="text"
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
        <BackButton></BackButton>
        <NextButton size="small"></NextButton>
      </ButtonContainer>
    </>
  );
}

export default PJ;
