import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "../../components/Button";
import { CardHabit } from "../../components/Card/styles";
import HeaderDashboard from "../../components/HeaderDashboard";
import {
  PContainer,
  CardContainer,
  CardNewHabit,
  FormContainer,
  PageContainer,
} from "./styles";
import Popup from "../../components/Modal";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHabits } from "../../Providers/Habits";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import ProgressBar from "../../components/ProgressBar";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const Dashboard = () => {
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

  const allFrequencies = [
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

  const allDifficulties = [
    {
      value: "Fácil",
      label: "Fácil",
    },
    {
      value: "Médio",
      label: "Médio",
    },
    {
      value: "Difícil",
      label: "Difícil",
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

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
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

  const [frequencies, setFrequencies] = useState(1);
  const [difficulties, setDifficulties] = useState("Fácil");

  const onSubmitFunction = (data) => {
    addNewHabit(data);
    reset();
  };

  return (
    <>
      <HeaderDashboard />
      <PageContainer>
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
                  onSubmit={handleSubmit(onSubmitFunction)}
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <section>
                    <h1> Cadastre seu mais novo hábito ! </h1>

                    <TextField
                      id="standard-basic"
                      label="Novo Hábito"
                      {...register("title")}
                      name="title"
                    />
                    <div className="error"> {errors.title?.message}</div>
                    <TextField
                      id="standard-basic"
                      label="Categoria"
                      {...register("category")}
                      name="category"
                    />
                    <div className="error"> {errors.category?.message}</div>
                    <TextField
                      id="standard-basic"
                      select
                      label="Dificuldade"
                      {...register("difficulty")}
                      name="difficulty"
                      value={difficulties}
                      onChange={(event) => setDifficulties(event.target.value)}
                    >
                      {allDifficulties.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <div className="error"> {errors.difficulty?.message}</div>
                    <TextField
                      id="standard-basic"
                      select
                      label="Frequência"
                      {...register("frequency")}
                      name="frequency"
                      value={frequencies}
                      onChange={(event) => setFrequencies(event.target.value)}
                    >
                      {allFrequencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>

                    <div className="error"> {errors.frequency?.message}</div>

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
          ) : habits.length === 0 ? (
            <span className="msgDsh">Comece já um novo hábito</span>
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
                  <ProgressBar
                    color="yellow"
                    completed={`${habit.how_much_achieved}%`}
                  />
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
          ) : finishedHabits.length === 0 ? (
            <span className="msgDsh">
              Não há hábitos concluídos, continue firme para concluir os atuais!
            </span>
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
                  <ProgressBar
                    color="blue"
                    completed={`${habit.how_much_achieved}%`}
                  />
                </div>
              </CardHabit>
            ))
          )}
        </CardContainer>
      </PageContainer>
    </>
  );
};

export default Dashboard;
