import { useForm } from "react-hook-form";
//import { Link } from "react-router-dom";
import { useGroups } from "../../Providers/Groups";
import {
  PageContainer,
  FormContainer,
  OpenGroups,
  SubscribedGroups,
} from "./styles";
import Button from "../../components/Button";
import TextField from "@material-ui/core/TextField";

const Groups = () => {
  const { register, handleSubmit } = useForm();
  const { groups, subscriptions, addNewGroup } = useGroups();

  return (
    <PageContainer>
      <FormContainer>
        <h1>Novo grupo</h1>
        <h3>Juntos você pode mais!</h3>
        <form onSubmit={handleSubmit(addNewGroup)}>
          <TextField
            placeholder="Novo Grupo"
            {...register("name")}
            name="name"
          />
          <TextField
            placeholder="Descrição"
            {...register("description")}
            name="description"
            value="Grupo bolado"
          />
          <TextField
            placeholder="Categoria"
            {...register("category")}
            name="category"
            value="CORINGA"
          />
          <Button type="submit">Adicionar</Button>
        </form>
      </FormContainer>
      <OpenGroups>
        <h1>Grupos Abertos</h1>
        {groups.map((group) => (
          <div key={group.id}>
            <p>{group.name}</p>
            <p>{group.description}</p>
            <p>{group.category}</p>
          </div>
        ))}
      </OpenGroups>
      <SubscribedGroups>
        <h1>Inscrições</h1>
        {subscriptions.map((group) => (
          <div key={group.id}>
            <p>{group.name}</p>
            <p>{group.description}</p>
            <p>{group.category}</p>
          </div>
        ))}
      </SubscribedGroups>
      {/* <Link to="/dashboard">Hábitos</Link> */}
    </PageContainer>
  );
};

export default Groups;
