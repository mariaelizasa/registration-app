import Title from "../../components/Title/Title";
import { useForm } from "react-hook-form";

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
    <>
      <Title name="Seja bem-vindo(a)!" />
      <form onSubmit={handleSubmit(() => alert("teste"))}>
        <p>Insira sua senha</p>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>A senha deve ser obrigatória</span>}
      </form>
    </>
  );
}

export default Password;
