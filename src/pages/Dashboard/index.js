import { useForm } from "react-hook-form";
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
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                  <section>
                    <h1> Cadastre seu mais novo hábito ! </h1>

                    <TextField
                      id="standard-basic"
                      label="Novo Hábito"
                      {...register("title")}
                      name="title"
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
      </PageContainer>
    </>


  );
};

export default Dashboard;
