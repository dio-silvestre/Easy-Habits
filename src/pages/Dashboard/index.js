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
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHabits } from "../../Providers/Habits";
import { useState } from "react";
import React from "react";

const currencies = [
  {
    value: 1,
    label: "1 vez por semana",
  },
  {
    value: 2,
    label: "2 vezes por semana",
  },
  {
    value: 3,
    label: "3 vezes por semana",
  },
  {
    value: 4,
    label: "4 vezes por semana",
  },
  {
    value: 5,
    label: "5 vezes por semana",
  },
];

const Dashboard = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
        fontsize: "60px",
      },
    },
  }));

  const classes = useStyles();

  const {
    habits,
    addNewHabit,
    handleDelete,
    finishedHabits,
    handleUpdate,
    loading,
    openNewHabit,
    setOpenNewHabit,
  } = useHabits();

  const schema = yup.object().shape({
    habit: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
    frequency: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [currency, setCurrency] = React.useState(1);

  const handleChange = (event) => {
    setCurrency(Number(event.target.value));
  };

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
              <form
                onSubmit={handleSubmit(addNewHabit)}
                className={classes.root}
                noValidate
                autoComplete="off"
              >
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
                    id="standard-select-currency"
                    select
                    label="Frequência"
                    //value={currency}
                    onChange={handleChange}
                    helperText="Selecione a frequência"
                    {...register("frequency")}
                    name="frequency"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <Button type="submit">Adicionar</Button>

                  <p>
                    <ArrowBackIcon
                      cursor="pointer"
                      onClick={() => document.location.reload()}
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
              <div className="habit-container">
                <div className="habit-title">{habit.title}</div>
                <hr />
                <div className="habit-difficulty">
                  <p>Fácil</p>
                </div>
                <div className="habit-progression">
                  <h3>{habit.how_much_achieved}</h3>
                </div>
                <div className="progress-bar"></div>
                <div className="habit-category">
                  <p>Categoria</p>
                </div>
                <div className="container-button">
                  <button
                    className="habit-button-giveup"
                    onClick={() => handleDelete(habit)}
                  >
                    Desistir
                  </button>
                  <button
                    className="habit-button"
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
