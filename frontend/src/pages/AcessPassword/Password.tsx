import Title from "../../components/Title/Title";
import { useForm } from "react-hook-form";
import { FormContainer, FormGroup, Input } from "../../styles/Form/FormStyle";
import NextButton from "../../components/Buttons/NextButton/NextButton";

interface FormData {
  password: string;
}

function Password() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <FormContainer>
      <Title name="Senha de Acesso" />
      <form onSubmit={handleSubmit(() => alert("teste"))}>
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
  );
}

export default Password;
