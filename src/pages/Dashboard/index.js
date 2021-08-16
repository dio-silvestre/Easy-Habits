import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useAuth } from "../../Providers/Auth";
import Button from "../../components/Button";
import { CardHabit } from "../../components/Card/styles";
import { Link, useHistory } from "react-router-dom";
// import HeaderDash from "../../components/HeaderDash";
// import HeaderDashMobile from "../../components/HeaderDashMobile";
import HeaderDashboard from "../../components/HeaderDashboard";
import { PContainer, CarouselContainer, CardNovoHabito } from "./styles";
import Popup from "../../components/Modal";
import Carousel from 'styled-components-carousel';


const Dashboard = () => {
  const [habits, setHabits] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("Habits:token")) || ""
  );
  const { decodedUser } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const history = useHistory();
  const [abrirNovoHabito, setAbrirNovoHabito] = useState(false);
  const [carrossel, setCarrossel] = useState(true)

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
  }, []);

  const addNewHabit = ({ habit, category, difficulty, frequency }) => {
    console.log(decodedUser)
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
          user: decodedUser,
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
    Em progresso <Button onClick={() => {
      setAbrirNovoHabito(true)
      setCarrossel(false)
      }}>+ Novo Hábito</Button>
    </PContainer>
    {abrirNovoHabito && 
      <Popup>
      <CardNovoHabito>
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
            <Button type="submit" onClick={() => {
              setAbrirNovoHabito(false)
              setCarrossel(true)
              }}>Adicionar</Button>
            </section>
          </form>
          </CardNovoHabito>
          </Popup>}
          {carrossel && 
          <CarouselContainer>
          <Carousel slidesToShow={3} infinite dots>
            {/* <Carousel
                
                infinite
                showArrows
                showIndicator
                slidesToShow={5}
            > */}
              {habits.map((habit) => (
                <CardHabit><div>
                  <p>{habit.title}</p>
                  <p>Período</p>
                  <button onClick={() => handleDelete(habit)}>Remover</button>
                </div></CardHabit>
              ))}
            </Carousel>
          </CarouselContainer>}

        
          
        
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
