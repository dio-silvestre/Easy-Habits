import { createContext, useContext, useState } from "react";
import api from "../../services/api"
import { useAuth } from "../Auth";
import { useEffect } from "react";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
    const [habits, setHabits] = useState([]);
    const [token] = useState(
        JSON.parse(localStorage.getItem("Habits:token")) || ""
    )
    const { decodedUser } = useAuth();

    useEffect(() => {
        api
            .get("/habits/personal/", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setHabits(response.data);
            })
            .catch((err) => console.log(err));
    });


    const addNewHabit = ({ habit, category, difficulty, frequency }) => {
        api
            .post(
                "/habits/",
                {
                    title: habit,
                    category: category,
                    difficulty: difficulty,
                    frequency: frequency,
                    achieved: "false",
                    how_much_achieved: 0,
                    user: decodedUser.user_id,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
    };


    const handleDelete = ({ id }) => {
        api.delete(`/habits/${id}/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    };

    return (
        <HabitsContext.Provider value={{ habits, addNewHabit, handleDelete }}>
            {children}
        </HabitsContext.Provider>
    );
};

export const useHabits = () => useContext(HabitsContext);
