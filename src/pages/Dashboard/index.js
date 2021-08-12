import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useAuth } from '../../Providers/Auth'

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

  const onSubmit = ({ habit }) => {
    api
      .post(
        `/habits/personal/`,
        {
          title: habit,
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

  const handleDelete = (id) => {
    const newHabits = habits.filter((habit) => habit.id !== id);

    api
      .delete(`/habits/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(setHabits(newHabits));
  };


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <input
            placeholder="Novo hábito"
            {...register("habit")}
            name="habit"
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
    </div>
  );
};

export default Dashboard;
