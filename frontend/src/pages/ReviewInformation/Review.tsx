import { useForm } from "react-hook-form";

import StepIndicator from "../../components/Step/Step";
import Title from "../../components/Title/Title";
import {
  ButtonContainer,
  FormContainer,
  FormGroup,
  Input,
} from "../../styles/Form/FormStyle";
import { useMultiStepFormContext } from "../../context/MultiStepFormContext";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import NextButton from "../../components/Buttons/NextButton/NextButton";

function Review() {
  const { register, handleSubmit } = useForm<FormData>();

  const { formData, backStep } = useMultiStepFormContext();

  const prevStep = () => {
    backStep();
  };

  return (
    <>
      <FormContainer>
        <StepIndicator />
        <Title name="Revisão das Informações" />
        <form onSubmit={() => alert("oi")}>
          {formData.type === "PF" && (
            <>
              <FormGroup>
                <p>Nome</p>
                <Input
                  type="text"
                  defaultValue={formData.name}
                  {...register("name")}
                />
              </FormGroup>

              <FormGroup>
                <p>CPF</p>
                <Input
                  type="text"
                  defaultValue={formData.cpf}
                  {...register("cpf")}
                />
              </FormGroup>

              <FormGroup>
                <p>Data de Nascimento</p>
                <Input
                  type="date"
                  defaultValue={formData.dateOfBirth}
                  {...register("dateOfBirth")}
                />
              </FormGroup>
            </>
          )}

          {formData.type === "PJ" && (
            <>
              <FormGroup>
                <p>Razão Social</p>
                <Input
                  type="text"
                  defaultValue={formData.name}
                  {...register("socialReason")}
                />
              </FormGroup>

              <FormGroup>
                <p>CPNJ</p>
                <Input
                  type="text"
                  defaultValue={formData.cpf}
                  {...register("cnpj")}
                />
              </FormGroup>

              <FormGroup>
                <p>Data de Abertura</p>
                <Input
                  type="date"
                  defaultValue={formData.dateOfBirth}
                  {...register("openingDate")}
                />
              </FormGroup>
            </>
          )}

          <FormGroup>
            <p>Telefone</p>
            <Input
              type="text"
              defaultValue={formData.telephone}
              {...register("telephone")}
            />
          </FormGroup>

          <FormGroup>
            <p>Senha de acesso</p>
            <Input
              type="text"
              defaultValue={formData.password}
              {...register("password")}
            />
          </FormGroup>
        </form>
        <ButtonContainer>
          <BackButton onClick={prevStep}>Voltar</BackButton>
          <NextButton size="small" type="submit" onClick={() => alert("oi")}>
            Salvar
          </NextButton>
        </ButtonContainer>
      </FormContainer>
    </>
  );
}

export default Review;
