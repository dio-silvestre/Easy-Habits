import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { useEffect } from "react";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("Habits:token")) || ""
  );
  const [habits, setHabits] = useState([]);
  const [finishedHabits, setFinishedHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openNewHabit, setOpenNewHabit] = useState(false);
  const userId = localStorage.getItem("Habits:userId");

  const loadHabits = () => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setHabits(response.data.filter((habit) => habit.achieved === false));
        setFinishedHabits(
          response.data.filter((habit) => habit.achieved === true)
        );
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadHabits();
  });

  const addNewHabit = ({ title, category, difficulty, frequency }) => {
    api
      .post(
        "/habits/",
        {
          title: title,
          category: category,
          difficulty: difficulty,
          frequency: frequency,
          achieved: false,
          how_much_achieved: 0,
          user: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        loadHabits();
      });

    setOpenNewHabit(false);
  };

  const handleDelete = ({ id }) => {
    api.delete(`/habits/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const handleUpdate = ({ id, frequency, how_much_achieved }) => {
    let achieved = how_much_achieved;

    if (
      achieved + 9 >= 100 ||
      achieved + 5 >= 100 ||
      achieved + 13 >= 100 ||
      achieved + 6 === 96 ||
      achieved + 25 === 100
    ) {
      api.patch(
        `/habits/${id}/`,
        {
          achieved: true,
          how_much_achieved: 100,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } else if (frequency === "5") {
      api.patch(
        `/habits/${id}/`,
        {
          achieved: false,
          how_much_achieved: (achieved += 100 / 20),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } else if (frequency === "4") {
      api.patch(
        `/habits/${id}/`,
        {
          achieved: false,
          how_much_achieved: Math.round((achieved += 100 / 16)),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } else if (frequency === "3") {
      api.patch(
        `/habits/${id}/`,
        {
          achieved: false,
          how_much_achieved: Math.ceil((achieved += 100 / 12)),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } else if (frequency === "2") {
      api.patch(
        `/habits/${id}/`,
        {
          achieved: false,
          how_much_achieved: Math.ceil((achieved += 100 / 8)),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } else {
      api.patch(
        `/habits/${id}/`,
        {
          achieved: false,
          how_much_achieved: (achieved += 100 / 4),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }
  };

  return (
    <HabitsContext.Provider
      value={{
        habits,
        addNewHabit,
        handleDelete,
        finishedHabits,
        handleUpdate,
        loading,
        openNewHabit,
        setOpenNewHabit,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
