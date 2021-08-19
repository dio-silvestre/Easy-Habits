import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("Habits:token")) || ""
  );
  const [loadingGroups, setLoadingGroups] = useState(true);
  const [loadingSubs, setLoadingSubs] = useState(true);

  useEffect(() => {
    //get dos grupos
    if (token !== "") {
      api
        .get("/groups/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const allGroups = response.data.results;
          setGroups(allGroups);
          setLoadingGroups(false);
        })
        .catch((err) => console.log(err));

      //get das inscrições api
      api
        .get("/groups/subscriptions/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setSubscriptions(response.data);
          setLoadingSubs(false);
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  const addNewGroup = ({ name, description, category }) => {
    api.post(
      "/groups/",
      {
        name: name,
        description: description,
        category: category,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  const subscribeToAGroup = (group_id) => {
    api
      .post(`/groups/${group_id}/subscribe/`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => toast.success("Parabéns! Você faz parte de um novo grupo"))
      .catch((err) => console.log(err));
  };

  return (
    <GroupsContext.Provider
      value={{
        groups,
        subscriptions,
        addNewGroup,
        loadingGroups,
        loadingSubs,
        subscribeToAGroup,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
