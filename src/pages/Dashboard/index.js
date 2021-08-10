import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import api from "../../services/api";
import jwtDecode from "jwt-decode";

const Dashboard = ({ authenticated }) => {
  const [habits, setHabits] = useState([]);
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI4OTgyNzQ4LCJqdGkiOiI3NTFjYmNjOTljNWQ0NTIyYWJkZmNjNjc0YTU1OTA4NyIsInVzZXJfaWQiOjE2MjN9.6OwSf_CG2CT8YoiTGk20BvBGuty6OVY2oKuaawe90MY";
  const decoded = jwtDecode(token);
  console.log(decoded);

  const { register, handleSubmit, reset } = useForm();

  const loadHabits = () => {
    api
      .get(`/habits/${decoded.user_id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadHabits();
  });

  const onSubmit = ({ habit }) => {
    api
      .post(
        `/habits/${decoded.user_id}`,
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
      .delete(`/habits/${id.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(setHabits(newHabits));
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

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
          <div onClick={() => handleDelete(habit)} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
