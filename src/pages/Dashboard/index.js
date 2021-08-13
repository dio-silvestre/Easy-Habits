import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useAuth } from "../../Providers/Auth";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [habits, setHabits] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("Habits:token")) || ""
  );
  const { decodedUser } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const history = useHistory();

  const loadHabits = () => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setHabits(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadHabits();
  });

  const addNewHabit = ({ habit, category, difficulty, frequency }) => {
    api
      .post(
        "/habits/",
        {
          title: habit,
          category: category,
          difficulty: difficulty,
          frequency: frequency,
          achieved: "false",
          how_much_achieved: 0,
          user: decodedUser.user_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        reset();
      });
  };

  const handleDelete = ({ id }) => {
    api.delete(`/habits/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(addNewHabit)}>
        <section>
          <input
            placeholder="Novo hábito"
            {...register("habit")}
            name="habit"
          />
          <input
            placeholder="Categoria"
            {...register("category")}
            name="category"
            value="Esporte"
          />
          <input
            placeholder="Dificuldade"
            {...register("difficulty")}
            name="difficulty"
            value="Fácil"
          />
          <input
            placeholder="Frequência"
            {...register("frequency")}
            name="frequency"
            value="Diária"
          />
          <button type="submit">Adicionar</button>
        </section>
      </form>
      <div>
        {habits.map((habit) => (
          <div>
            <p>{habit.title}</p>
            <button onClick={() => handleDelete(habit)}>Remover</button>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          localStorage.clear();
          return history.push("/");
        }}
      >
        Sair
      </button>
      <Link to="/groups">Grupos</Link>
    </div>
  );
};

export default Dashboard;
