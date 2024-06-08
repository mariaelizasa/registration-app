import Title from "../../components/Title/Title";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  cpf: string;
  dateOfBirth: string;
  telephone: number;
}

function PF() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <>
      <Title name="Pessoa Física" />
      <form onSubmit={handleSubmit(() => alert("teste"))}>
        <p>Nome</p>
        <input type="text" {...register("name", { required: true })} />
        {errors.name && <span>O nome é obrigatório</span>}

        <p>CPF</p>
        <input
          type="text"
          {...register("cpf", { required: true, pattern: /^[0-9]+$/ })}
        />
        {errors.cpf && (
          <span>O CPF é obrigatório. Não pode conter letras e símbolos. </span>
        )}

        <p>Data de Nascimento</p>
        <input type="date" {...register("dateOfBirth", { required: true })} />
        {errors.dateOfBirth && <span>A data de nascimento é obrigatória</span>}

        <p>Telefone</p>
        <input
          type="text"
          {...register("telephone", { required: true, pattern: /^[0-9]+$/ })}
        />
        {errors.telephone && (
          <span>O telefone é obrigatório e deve conter apenas números</span>
        )}
      </form>
    </>
  );
}

export default PF;
