import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [groupGoals, setGroupGoals] = useState([]);
  const [specificGoal, setSpecificGoal] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("Habits:token")) || ""
  );

  const getOneGoal = (goal_id) => {
    api
      .get(`/goals/${goal_id}/`)
      .then((res) => setSpecificGoal(res.data))
      .catch((e) => console.log(e));
  };

  const getGroupGoals = (group_id) => {
    api
      .get(`/goals/?group=${group_id}`)
      .then((res) => setGroupGoals(res.data.results))
      .catch((e) => console.log(e));
  };

  const addNewGroupGoal = (data, group_id) => {
    const { title, difficulty } = data;
    api
      .post(
        "/goals/",
        {
          title: title,
          difficulty: difficulty,
          how_much_achieved: 0,
          group: group_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => toast.success("Meta criada com sucesso"));
  };

  const updateGroupGoal = (goal_id) => {
    api
      .patch(
        `/goals/${goal_id}/`,
        {
          achieved: true,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => toast.success("Meta concluída. Parabéns!!"));
  };

  const deleteGroupGoal = (goal_id) => {
    api
      .delete(`/goals/${goal_id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => toast.success("Meta deletada"));
  };

  return (
    <GoalsContext.Provider
      value={{
        groupGoals,
        specificGoal,
        addNewGroupGoal,
        getOneGoal,
        getGroupGoals,
        updateGroupGoal,
        deleteGroupGoal,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoals = () => useContext(GoalsContext);
