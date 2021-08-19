import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [groupActivities, setGroupActivities] = useState([]);
  const [specificActivity, setSpecificActivity] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("Habits:token")) || ""
  );

  const getOneActivity = ({ activity_id }) => {
    api
      .get(`goals/${activity_id}/`)
      .then((res) => setSpecificActivity(res))
      .catch((e) => console.log(e));
  };

  const getGroupActivities = ({ group_id }) => {
    api
      .get(`/activities/?group=${group_id}`)
      .then((res) => setGroupActivities(res))
      .catch((e) => console.log(e));
  };

  const addNewGroupActivity = ({ title, realization_time, group_id }) => {
    api
      .post(
        "/activities/",
        {
          title: title,
          realization_time: realization_time,
          group: group_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => toast.success("Nova atividade criada"));
  };

  const updateGroupActivities = ({ activity_id, title }) => {
    api
      .patch(
        `/activities/${activity_id}/`,
        {
          title: title,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => toast.success("Atividade Atualizada"));
  };

  const deleteGroupActivities = ({ activity_id }) => {
    api
      .delete(`/activities/${activity_id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => toast.success("Atividade deletada"));
  };

  return (
    <ActivitiesContext.Provider
      value={{
        groupActivities,
        specificActivity,
        getOneActivity,
        getGroupActivities,
        addNewGroupActivity,
        updateGroupActivities,
        deleteGroupActivities,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};

export const useActivities = () => useContext(ActivitiesContext);
