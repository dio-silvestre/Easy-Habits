import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useAuth } from "../../Providers/Auth";
import Button from "../../components/Button";
import { CardHabit } from "../../components/Card/styles";
import { useHistory } from "react-router-dom";
import HeaderDashboard from "../../components/HeaderDashboard";
import { PContainer, CarouselContainer, CardNewHabit } from "./styles";
import Popup from "../../components/Modal";
import Carousel from "styled-components-carousel";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Dashboard = () => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("Habits:token")) || ""
  );
  const { userId } = useAuth();

  //const history = useHistory();
  const [habits, setHabits] = useState([]);
  const [finishedHabits, setFinishedHabits] = useState([])
  const [openNewHabit, setOpenNewHabit] = useState(false);
  const [carroussel, setCarroussel] = useState(true);

  const schema = yup.object().shape({
    habit: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
    frequency: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const loadHabits = () => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setHabits(response.data.filter((habit) =>
          habit.achieved === false));
        setFinishedHabits(response.data.filter((habit) =>
          habit.achieved === true));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadHabits();
  });

  const addNewHabit = ({ habit, category, difficulty, frequency }) => {
    console.log(habit, category, difficulty, frequency);
    api
      .post(
        "/habits/",
        {
          title: habit,
          category: category,
          difficulty: difficulty,
          frequency: frequency,
          achieved: false,
          how_much_achieved: 0,
          user: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("response", response);
        loadHabits();
        reset();
      });

    setOpenNewHabit(false);
    setCarroussel(true);
  };

  //console.log("habit", habits);

  const handleDelete = ({ id }) => {
    api.delete(`/habits/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <>
      <HeaderDashboard />
      <PContainer>
        Em progresso
        <Button
          onClick={() => {
            setOpenNewHabit(true);
            setCarroussel(false);
          }}
        >
          + Novo Hábito
        </Button>
      </PContainer>
      {openNewHabit && (
        <Popup>
          <CardNewHabit>
            <form onSubmit={handleSubmit(addNewHabit)}>
              <section>
                <input
                  placeholder="Novo hábito"
                  {...register("habit")}
                  name="habit"
                //error={!!errors.habit}
                />
                <input
                  placeholder="Categoria"
                  {...register("category")}
                  name="category"
                  value="Esporte"
                //error={!!errors.category}
                />
                <input
                  placeholder="Dificuldade"
                  {...register("difficulty")}
                  name="difficulty"
                  value="Fácil"
                //error={!!errors.difficulty}
                />
                <input
                  placeholder="Frequência"
                  {...register("frequency")}
                  name="frequency"
                  value="Diária"
                //error={!!errors.frequency}
                />
                <Button type="submit">Adicionar</Button>
              </section>
            </form>
          </CardNewHabit>
        </Popup>
      )}
      {carroussel && (
        <>
          <div>
            <h1>Em progresso</h1>
            <CarouselContainer>
              <Carousel center showArrows showIndicator slidesToShow={3}>
                {habits.map((habit) => (
                  <CardHabit>
                    <div key={habit.id}>
                      <p>{habit.title}</p>
                      <p>Período</p>
                      <button onClick={() => handleDelete(habit)}>Remover</button>
                    </div>
                  </CardHabit>
                ))}
              </Carousel>
            </CarouselContainer>
          </div>
          <div>
            <h1>Concluidos</h1>
            <CarouselContainer>
              <Carousel center showArrows showIndicator slidesToShow={3}>
                {finishedHabits.map((habit) => (
                  <CardHabit>
                    <div key={habit.id}>
                      <p>{habit.title}</p>
                      <p>Período</p>
                      <button onClick={() => handleDelete(habit)}>Remover</button>
                    </div>
                  </CardHabit>
                ))}
              </Carousel>
            </CarouselContainer>
          </div>
        </>
      )}

      {/* <button
        onClick={() => {
          localStorage.clear();
          return history.push("/");
        }}
      >
        Sair
      </button>
      <Link to="/groups">Grupos</Link> */}
    </>
  );
};

export default Dashboard;
