import Title from "../../components/Title/Title";
import { useForm } from "react-hook-form";

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
      <Title name="Pessoa Física" />
      <form onSubmit={handleSubmit(() => alert("teste"))}>
        <p>Razão Social</p>
        <input type="text" {...register("socialReason", { required: true })} />
        {errors.socialReason && <span>A Razão Social é obrigatória</span>}

        <p>CNPJ</p>
        <input
          type="text"
          {...register("cnpj", { required: true, pattern: /^[0-9]+$/ })}
        />
        {errors.cnpj && (
          <span>O CNPJ é obrigatório. Não pode conter letras e símbolos. </span>
        )}

        <p>Data de Abertura</p>
        <input type="date" {...register("openingDate", { required: true })} />
        {errors.openingDate && <span>A data de nascimento é obrigatória</span>}

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

export default PJ;
