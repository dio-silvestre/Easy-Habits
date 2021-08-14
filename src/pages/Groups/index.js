import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("Habits:token")) || ""
  );
  const { register, handleSubmit, reset } = useForm();

  const loadGroups = () => {
    api
      .get("/groups/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const filteredGroups = response.data.results.filter(
          (group) => group.category === "CORINGA"
        );
        setGroups(filteredGroups);
      })
      .catch((err) => console.log(err));
  };

  const loadSubscriptions = () => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const filteredGroups = response.data.filter(
          (group) => group.category === "CORINGA"
        );
        setSubscriptions(filteredGroups);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadGroups();
    loadSubscriptions();
  });

  const addNewGroup = ({ name, description, category }) => {
    api
      .post(
        "/groups/",
        {
          name: name,
          description: description,
          category: category,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        reset();
      });
  };

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
            value="CORINGA"
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
