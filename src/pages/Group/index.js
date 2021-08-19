import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@material-ui/core/TextField";
import { useParams } from "react-router-dom";
import { useGroups } from "../../Providers/Groups";
import { useState } from "react";
import {
  GroupContainer,
  InfoContainer,
  BottomContainer,
  FormModal,
  FormContainer,
} from "./style";
import LottieAnimation from "../../components/Lotties";
import Animation from "../../assets/AnimationGroup.json";
import Button from "../../components/Button";
import { useGoals } from "../../Providers/Goals";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Group = () => {
  const { groups } = useGroups();
  const { id } = useParams();
  const idNum = Number(id);
  const {
    groupGoals,
    specificGoal,
    addNewGroupGoal,
    getOneGoal,
    getGroupGoals,
    updateGroupGoal,
    deleteGroupGoal,
  } = useGoals();

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

  const handleForm = (data) => {
    addNewGroupGoal(data, idNum);
    setOpenForm(false);
    setOpenGroup(true);
  };

  return (
    <>
      <FormModal>
        {openForm && (
          <FormContainer>
            <h1>Meta do grupo</h1>
            <h3>Juntos podemos mais!</h3>
            <form onSubmit={handleSubmit(handleForm)}>
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
                  <LottieAnimation lotti={Animation} height={500} width={400} />
                  <div>
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
                    <Button colorSchema>+ Criar Atividade</Button>
                  </div>
                </InfoContainer>
              </div>
            ))}
          <BottomContainer>
            <h1>Metas</h1>
          </BottomContainer>
        </GroupContainer>
      )}
    </>
  );
};

export default Group;
