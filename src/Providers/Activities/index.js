import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {

    const [groupActivities, setGroupActivities] = useState([]);
    const [specificActivitie, setSpecificActivitie] = useState([])
    const [token] = useState(
        JSON.parse(localStorage.getItem("Habits:token")) || ""
    );


    const getOneActivitie = ({ activitie_id }) => {
        api.get(
            `goals/${activitie_id}/`
        )
            .then((res) => setSpecificActivitie(res))
            .catch((e) => console.log(e))
    }

    const getGroupActivities = ({ group_id }) => {
        api.get(
            `/activities/?group=${group_id}`
        )
            .then((res) => setGroupActivities(res))
            .catch((e) => console.log(e))
    }

    const addNewGroupActivitie = ({ title, realization_time, group_id }) => {
        api.post(
            "/activities/",
            {
                title: title,
                realization_time: realization_time,
                group: group_id
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
            .then((_) => toast.success('Nova atividade criada'))
    };

    const updateGroupActivities = ({ activitie_id, title }) => {
        api.patch(
            `/activities/${activitie_id}/`,
            {
                title: title,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
            .then((_) => toast.success('Atividade Atualizada'))
    };

    const deleteGroupActivities = ({ activitie_id }) => {
        api.delete(
            `/activities/${activitie_id}/`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
            .then((_) => toast.success('Atividade deletada'))
    };

    return (
        <ActivitiesContext.Provider
            value={{ groupActivities, specificActivitie, getOneActivitie, getGroupActivities, addNewGroupActivitie, updateGroupActivities, deleteGroupActivities }}
        >
            {children}
        </ActivitiesContext.Provider>
    );
};

export const useActivities = () => useContext(ActivitiesContext);