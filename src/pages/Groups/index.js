import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useGroups } from "../../Providers/Groups";

const Groups = () => {

  const { register, handleSubmit } = useForm();
  const { groups, subscriptions, addNewGroup } = useGroups();

  return (
    <div>
      <form onSubmit={handleSubmit(addNewGroup)}>
        <h1>Entrar no grupo</h1>
        <section>
          <input placeholder="Novo Grupo" {...register("name")} name="name" />
          <input
            placeholder="Descrição"
            {...register("description")}
            name="description"
            value="Grupo bolado"
          />
          <input
            placeholder="Categoria"
            {...register("category")}
            name="category"
            value="Saúde"
          />
          <button type="submit">Adicionar</button>
        </section>
      </form>
      <div>
        <h1>Grupos Abertos</h1>
        {groups.map((group) => (
          <div>
            <p>{group.name}</p>
            <p>{group.description}</p>
            <p>{group.category}</p>
          </div>
        ))}
      </div>
      <div>
        <h1>Inscrições</h1>
        {subscriptions.map((group) => (
          <div>
            <p>{group.name}</p>
            <p>{group.description}</p>
            <p>{group.category}</p>
          </div>
        ))}
      </div>
      <Link to="/dashboard">Hábitos</Link>
    </div>
  );
};

export default Groups;
