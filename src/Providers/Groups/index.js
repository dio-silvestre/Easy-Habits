import { createContext, useContext, useState } from "react";
import api from "../../services/api"
import { useAuth } from "../Auth";
import { useEffect } from "react";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {

    const [groups, setGroups] = useState([]);
    const [subscriptions, setSubscriptions] = useState([]);
    const [token] = useState(
        JSON.parse(localStorage.getItem("Habits:token")) || ""
    )
    const { decodedUser } = useAuth();

    useEffect(() => {
        //get dos grupos
        api
            .get("/groups/", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setGroups(response.data.results);
            })
            .catch((err) => console.log(err));

        //get das incrições api
        api
            .get("/groups/subscriptions/", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setSubscriptions(response.data);
            })
            .catch((err) => console.log(err));

    });

    const addNewGroup = ({ name, description, category }) => {
        api
            .post(
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
            )
    };

    return (
        <GroupsContext.Provider value={{ groups, subscriptions, addNewGroup }}>
            {children}
        </GroupsContext.Provider>
    );
};

export const useGroups = () => useContext(GroupsContext);
