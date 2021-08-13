import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useHabits } from "../../Providers/Habits";

const Dashboard = () => {

  const { habits, addNewHabit, handleDelete } = useHabits();
  const { register, handleSubmit } = useForm();


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
      <Link to="/groups">Grupos</Link>
    </div>
  );
};

export default Dashboard;
