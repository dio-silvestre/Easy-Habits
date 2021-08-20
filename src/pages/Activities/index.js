import {
  ActivitiesContainer,
  FormContainer,
  ActivitiesCard,
  Line,
} from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@material-ui/core/TextField";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "../../components/Button";
import { useActivities } from "../../Providers/Activities";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DoneIcon from "@material-ui/icons/Done";
import { useEffect } from "react";

const Activities = () => {
  const { idGroup } = useParams();

  const schema = yup.object().shape({
    title: yup.string().required("Defina uma atividade para o grupo"),
    date: yup.string().required("Defina a data para realizar a atividade"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {
    groupActivities,
    getGroupActivities,
    addNewGroupActivity,
    updateGroupActivities,
    deleteGroupActivities,
  } = useActivities();

  const handleActivityForm = (data) => {
    addNewGroupActivity(data, idGroup);
    getGroupActivities(idGroup);
  };

  useEffect(() => {
    getGroupActivities(idGroup);
    // eslint-disable-next-line
  }, [deleteGroupActivities]);

  return (
    <ActivitiesContainer>
      <FormContainer>
        <h1>Criar novas atividades</h1>
        <h3>Prencha o formulário abaixo</h3>
        <form onSubmit={handleSubmit(handleActivityForm)}>
          <TextField placeholder="Atividade" {...register("title")} />
          <div className="error"> {errors.title?.message}</div>
          <TextField
            placeholder="Data da atividade"
            id="date"
            type="datetime-local"
            {...register("date")}
            helperText="Defina dia e hora"
          />
          <div className="error"> {errors.date?.message}</div>
          <Button type="submit">Adicionar</Button>
        </form>
      </FormContainer>
      <ActivitiesCard>
        <h2>Atividades programadas e concluídas</h2>
        <div className="goalsWrapper">
          {groupActivities.length === 0 ? (
            <h3>Defina atividades realistas e boa sorte!</h3>
          ) : (
            groupActivities.map((activity, index) => (
              <ul key={index}>
                <li>
                  <Line>
                    {activity.title} - {activity.realization_time}
                  </Line>
                  <div className="iconsWrapper">
                    <div className="done">
                      <DoneIcon
                        onClick={() =>
                          updateGroupActivities(activity.title, activity.id)
                        }
                      />
                    </div>
                    <div className="delete">
                      <DeleteForeverIcon
                        onClick={() => deleteGroupActivities(activity.id)}
                      />
                    </div>
                  </div>
                </li>
              </ul>
            ))
          )}
        </div>
      </ActivitiesCard>
    </ActivitiesContainer>
  );
};

export default Activities;
