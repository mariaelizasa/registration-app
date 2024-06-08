import Title from "../../components/Title/Title";
import { useForm } from "react-hook-form";

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

  return (
    <>
      <Title name="Seja bem-vindo(a)!" />
      <form onSubmit={handleSubmit(() => alert("teste"))}>
        <p>Endereço de e-mail</p>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>Endereço de e-mail é obrigatório</span>}
        <div>
          <p>Selecione o tipo de cadastro:</p>
          <label>
            <input
              type="radio"
              value="PF"
              {...register("type", { required: true })}
            />
            Pessoa Física
          </label>
          <label>
            <input
              type="radio"
              value="PJ"
              {...register("type", { required: true })}
            />
            Pessoa Jurídica
          </label>
        </div>
      </form>
    </>
  );
}

export default Home;
