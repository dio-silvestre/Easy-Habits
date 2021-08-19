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
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import ProgressBar from "../../components/ProgressBar";

const Dashboard = () => {
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
    difficulty: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        "Fácil" || "Intermediária" || "Difícil",
        "Selecione entre Fácil,Média ou Difícil"
      ),
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
                    helperText="Selecione entre Fácil,Média ou Difícil"
                  />
                  <div className="error"> {errors.difficulty?.message}</div>

                  <TextField
                    id="standard-select-currency"
                    select
                    label="Frequência"
                    helperText="Selecione a frequência"
                    {...register("frequency")}
                    name="frequency"
                  >
                    {currencies.map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                        onChange={handleChange}
                      >
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
        {loading ? (
          <CircularProgress size={50} />
        ) : (
          habits.map((habit) => (
            <CardHabit key={habit.id}>
              <div className="habit-container">
                <div className="habit-title">Hábito: {habit.title}</div>
                <hr />
                <div className="habit-difficulty">
                  <p>Dificuldade: {habit.difficulty}</p>
                </div>
                <hr />
                <div className="habit-category">
                  <p>Categoria: {habit.category}</p>
                </div>
                <hr />
                <div className="habit-progression">
                  <p>Progresso:</p>
                </div>
                <ProgressBar color='yellow' completed={`${habit.how_much_achieved}%`} />
                <div className="container-button">
                  <button
                    className="habit-button-giveup"
                    onClick={() => handleDelete(habit)}
                  >
                    <DeleteForeverIcon />
                  </button>
                  <button
                    className="habit-button"
                    onClick={() => handleUpdate(habit)}
                  >
                    <DoubleArrowIcon />
                  </button>
                </div>
              </div>
            </CardHabit>
          ))
        )}
      </CardContainer>
      <PContainer>Concluídos</PContainer>
      <CardContainer>
        {loading ? (
          <CircularProgress size={50} />
        ) : (
          finishedHabits.map((habit) => (
            <CardHabit key={habit.id}>
              <div className="habit-container">
                <div className="habit-title">Hábito: {habit.title}</div>
                <hr />
                <div className="habit-difficulty">
                  <p>Dificuldade: {habit.difficulty}</p>
                </div>
                <hr />
                <div className="habit-category">
                  <p>Categoria: {habit.category}</p>
                </div>
                <hr />
                <div className="habit-progression">
                  <p>Progresso:</p>
                </div>
                <ProgressBar color='blue' completed={`${habit.how_much_achieved}%`} />
              </div>
            </CardHabit>
          ))
        )}
      </CardContainer>
    </>
  );
};

export default Dashboard;
