import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useAuth } from "../../Providers/Auth";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { CardHabit } from "../../components/Card/styles";
// import HeaderDash from "../../components/HeaderDash";
// import HeaderDashMobile from "../../components/HeaderDashMobile";
import HeaderDashboard from "../../components/HeaderDashboard";
import { PContainer, CarouselContainer, CardNewHabit } from "./styles";
import Popup from "../../components/Modal";
import Carousel from "styled-components-carousel";

const Dashboard = () => {
  const [habits, setHabits] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("Habits:token")) || ""
  );
  const { decodedUser } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  console.log(decodedUser);
  const [openNewHabit, setOpenNewHabit] = useState(false);
  const [carroussel, setCarroussel] = useState(true);

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
    console.log(decodedUser);
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
    <>
      {/* <HeaderDash />
    <HeaderDashMobile /> */}
      <HeaderDashboard />
      <PContainer>
        Em progresso{" "}
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
                <Button
                  type="submit"
                  onClick={() => {
                    setOpenNewHabit(false);
                    setCarroussel(true);
                  }}
                >
                  Adicionar
                </Button>
              </section>
            </form>
          </CardNewHabit>
        </Popup>
      )}
      {carroussel && (
        <CarouselContainer>
          <Carousel slidesToShow={3} infinite dots>
            {/* <Carousel
                
                infinite
                showArrows
                showIndicator
                slidesToShow={5}
            > */}
            {habits.map((habit) => (
              <CardHabit>
                <div>
                  <p>{habit.title}</p>
                  <p>Período</p>
                  <button onClick={() => handleDelete(habit)}>Remover</button>
                </div>
              </CardHabit>
            ))}
          </Carousel>
        </CarouselContainer>
      )}

      <div>
        <Link to="/groups">Grupos</Link>
      </div>
    </>
  );
};

export default Dashboard;
