import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { CardHabit } from "../../components/Card/styles";
import HeaderDashboard from "../../components/HeaderDashboard";
import {
  PContainer,
  CardContainer,
  CardNewHabit,
  FormContainer,
} from "./styles";
import Popup from "../../components/Modal";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHabits } from "../../Providers/Habits";

const Dashboard = () => {

  const { habits, addNewHabit, handleDelete, finishedHabits, handleUpdate, loading, openNewHabit, setOpenNewHabit } = useHabits();

  const schema = yup.object().shape({
    habit: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
    frequency: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  return (
    <>
      <HeaderDashboard />
      <PContainer>
        Em progresso
        <Button
          onClick={() => {
            setOpenNewHabit(true);
          }}
        >
          + Novo Hábito
        </Button>
      </PContainer>
      {openNewHabit && (
        <Popup>
          <CardNewHabit>
            <FormContainer>
              <form onSubmit={handleSubmit(addNewHabit)}>
                <section>
                  <h1> Cadastre seu mais novo hábito ! </h1>

                  <TextField
                    id="standard-basic"
                    label="Novo Hábito"
                    {...register("habit")}
                    name="habit"
                  />
                  <div className="error"> {errors.habit?.message}</div>
                  <TextField
                    id="standard-basic"
                    label="Categoria"
                    {...register("category")}
                    name="category"
                  />
                  <div className="error"> {errors.category?.message}</div>
                  <TextField
                    id="standard-basic"
                    label="Dificuldade"
                    {...register("difficulty")}
                    name="difficulty"
                  />
                  <div className="error"> {errors.difficulty?.message}</div>
                  <TextField
                    id="standard-basic"
                    label="Frequência"
                    {...register("frequency")}
                    name="frequency"
                  />

                  <div className="error"> {errors.frequency?.message}</div>

                  <Button type="submit">Adicionar</Button>

                  <p>
                    <ArrowBackIcon
                      onClick={() => document.location.reload(true)}
                    />
                  </p>
                </section>
              </form>
            </FormContainer>
          </CardNewHabit>
        </Popup>
      )}
      <CardContainer>
        <h2>Em progresso</h2>
        {loading ? (
          <CircularProgress size={50} />
        ) : (
          habits.map((habit) => (
            <CardHabit key={habit.id}>
              <div class="habit-container">
                <div class="habit-title">{habit.title}</div>
                <hr />
                <div class="habit-difficulty">
                  <p>Fácil</p>
                </div>
                <div class="habit-progression">
                  <h3>{habit.how_much_achieved}</h3>
                </div>
                <div class="progress-bar"></div>
                <div class="habit-category">
                  <p>Categoria</p>
                </div>
                <div class="container-button">
                  <button
                    class="habit-button-giveup"
                    onClick={() => handleDelete(habit)}
                  >
                    Desistir
                  </button>
                  <button
                    class="habit-button"
                    onClick={() => handleUpdate(habit)}
                  >
                    Progredir
                  </button>
                </div>
              </div>
            </CardHabit>
          ))
        )}
      </CardContainer>
      <CardContainer>
        <h2>Concluidos</h2>
        {loading ? (
          <CircularProgress size={50} />
        ) : (
          finishedHabits.map((habit) => (
            <CardHabit key={habit.id}>
              <div class="habit-container">
                <div class="habit-title">{habit.title}</div>
                <hr />
                <div class="habit-difficulty">
                  <p>Fácil</p>
                </div>
                <div class="habit-progression">
                  <h3>{habit.how_much_achieved}%</h3>
                </div>
                <div class="progress-bar"></div>
                <div class="habit-category">
                  <p>Categoria</p>
                </div>
              </div>
            </CardHabit>
          ))
        )}
      </CardContainer>
    </>
  );
};

export default Dashboard;
