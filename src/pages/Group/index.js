import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@material-ui/core/TextField";
import { useParams, useHistory } from "react-router-dom";
import { useGroups } from "../../Providers/Groups";
import { useState, useEffect } from "react";
import {
  GroupContainer,
  InfoContainer,
  BottomContainer,
  FormModal,
  FormContainer,
  GoalsCard,
  Line,
} from "./style";
import LottieAnimation from "../../components/Lotties";
import Animation from "../../assets/AnimationGroup.json";
import Button from "../../components/Button";
import { useGoals } from "../../Providers/Goals";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DoneIcon from "@material-ui/icons/Done";

const Group = () => {
  const { groups } = useGroups();
  const { id } = useParams();
  const idNum = Number(id);
  const {
    groupGoals,
    addNewGroupGoal,
    getGroupGoals,
    updateGroupGoal,
    deleteGroupGoal,
  } = useGoals();

  const history = useHistory();

  const [openForm, setOpenForm] = useState(false);
  const [openGroup, setOpenGroup] = useState(true);
  const schema = yup.object().shape({
    title: yup.string().required("Defina uma meta para o grupo"),
    difficulty: yup
      .string()
      .required("Selecione entre Fácil, Média ou Difícil"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleGoalForm = (data) => {
    addNewGroupGoal(data, idNum);
    setOpenForm(false);
    setOpenGroup(true);
    getGroupGoals(idNum);
  };

  useEffect(() => {
    getGroupGoals(idNum);
    // eslint-disable-next-line
  }, [deleteGroupGoal]);

  return (
    <>
      <FormModal>
        {openForm && (
          <FormContainer>
            <h1>Meta do grupo</h1>
            <h3>Juntos podemos mais!</h3>
            <form onSubmit={handleSubmit(handleGoalForm)}>
              <TextField placeholder="Meta" {...register("title")} />
              <div className="error"> {errors.title?.message}</div>
              <TextField
                placeholder="Dificuldade"
                {...register("difficulty")}
                helperText="Fácil, Média ou Difícil"
              />
              <div className="error"> {errors.difficulty?.message}</div>
              <Button type="submit">Adicionar</Button>
            </form>
            <div>
              <ArrowBackIcon
                cursor="pointer"
                onClick={() => document.location.reload()}
              />
            </div>
          </FormContainer>
        )}
      </FormModal>

      {openGroup && (
        <GroupContainer>
          {groups
            .filter((group) => group.id === idNum)
            .map((group, index) => (
              <div className="infoWrapper" key={index}>
                <div className="groupName">{group.name}</div>
                <InfoContainer>
                  <div className="animation">
                    <LottieAnimation
                      lotti={Animation}
                      height={500}
                      width={400}
                    />
                  </div>
                  <div className="groupInfoWrapper">
                    <div className="groupDescription">
                      {" "}
                      Este grupo é da categoria
                      <strong> {group.category}</strong> e seu objetivo é{" "}
                      <strong> {group.description}</strong>
                    </div>
                    <Button
                      onClick={() => {
                        setOpenForm(true);
                        setOpenGroup(false);
                      }}
                    >
                      {" "}
                      + Definir Meta
                    </Button>
                    <Button
                      onClick={() => history.push(`/activities/${idNum}`)}
                      colorSchema
                    >
                      + Checar Atividades
                    </Button>
                  </div>
                </InfoContainer>
              </div>
            ))}
          <BottomContainer>
            <GoalsCard>
              <h2>Metas</h2>
              <div className="goalsWrapper">
                {groupGoals.length === 0 ? (
                  <h3>Defina metas realistas e boa sorte!</h3>
                ) : (
                  groupGoals.map((goal, index) => (
                    <ul key={index}>
                      <li>
                        <Line goalUpdated={goal.achieved}>{goal.title}</Line>
                        <div className="iconsWrapper">
                          <div className="done">
                            <DoneIcon
                              onClick={() => updateGroupGoal(goal.id)}
                            />
                          </div>
                          <div className="delete">
                            <DeleteForeverIcon
                              onClick={() => deleteGroupGoal(goal.id)}
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  ))
                )}
              </div>
            </GoalsCard>
          </BottomContainer>
        </GroupContainer>
      )}
    </>
  );
};

export default Group;
