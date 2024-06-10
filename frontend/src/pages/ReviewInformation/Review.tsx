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
import { FormDataType } from "../../@types/FormDataType";

function Review() {
  const { register, handleSubmit } = useForm<FormDataType>();

  const { formData, backStep } = useMultiStepFormContext();

  const prevStep = () => {
    backStep();
  };

  const onSubmit = (data: FormDataType) => {
    console.log("data", data);
  };

  return (
    <>
      <FormContainer>
        <StepIndicator />
        <Title name="Revisão das Informações" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <p>E-mail</p>
            <Input
              type="text"
              defaultValue={formData.email}
              {...register("email")}
            />
          </FormGroup>

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
                  defaultValue={formData.socialReason}
                  {...register("socialReason")}
                />
              </FormGroup>

              <FormGroup>
                <p>CPNJ</p>
                <Input
                  type="text"
                  defaultValue={formData.cnpj}
                  {...register("cnpj")}
                />
              </FormGroup>

              <FormGroup>
                <p>Data de Abertura</p>
                <Input
                  type="date"
                  defaultValue={formData.openingDate}
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
          <BackButton onClick={prevStep} />
          <NextButton
            size="small"
            title="Enviar"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          ></NextButton>
        </ButtonContainer>
      </FormContainer>
    </>
  );
}

export default Review;
