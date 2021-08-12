import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useAuth } from "../../Providers/Auth";

const Dashboard = () => {
  const [habits, setHabits] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("Habits:token")) || ""
  );
  const { userDecode } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const loadHabits = () => {
    api
      .get(`/habits/personal/`, {
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

  const onSubmit = ({ habit, category, difficulty, frequency }) => {
    api
      .post(
        `/habits/`,
        {
          title: habit,
          category: category,
          difficulty: difficulty,
          frequency: frequency,
          achieved: false,
          how_much_achieved: 0,
          user: userDecode.user_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        reset();
        loadHabits();
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Novo hábito" {...register("habit")} name="habit" />
        <input name="category" value="Saúde" {...register("category")} />
        <input name="difficulty" value="Fácil" {...register("difficulty")} />
        <input name="frequency" value="Diária" {...register("frequency")} />
        <button type="submit">Adicionar</button>
      </form>
      <div>
        {habits.map((habit) => (
          <div key={habit.id}>
            <p>{habit.title}</p>
            <button onClick={() => handleDelete(habit)}>Remover</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
