import { AuthProvider } from "./Auth";
import { GroupsProvider } from "./Groups";
import { GoalsProvider } from "./Goals";
import { ActivitiesProvider } from "./Activities";
import { HabitsProvider } from "./Habits";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <GoalsProvider>
        <ActivitiesProvider>
          <GroupsProvider>
            <HabitsProvider>
              {children}
            </HabitsProvider>
          </GroupsProvider>
        </ActivitiesProvider>
      </GoalsProvider>
    </AuthProvider>
  );
};

export default Providers;
