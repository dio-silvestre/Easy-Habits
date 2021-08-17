import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { useEffect } from "react";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("Habits:token")) || ""
  );

  useEffect(() => {
    //get dos grupos
    if (token !== "") {
      api
        .get("/groups/?category=CORINGA", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const allGroups = response.data.results;
          setGroups(allGroups);
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
          const filteredGroups = response.data.filter(
            (group) => group.category === "CORINGA"
          );
          setSubscriptions(filteredGroups);
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

  return (
    <GroupsContext.Provider value={{ groups, subscriptions, addNewGroup }}>
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
