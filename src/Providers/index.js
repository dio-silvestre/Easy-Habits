import { AuthProvider } from "./Auth";
import { GroupsProvider } from "./Groups";
import { GoalsProvider } from "./Goals";
import { ActivitiesProvider } from "./Activities";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <GoalsProvider>
        <ActivitiesProvider>
          <GroupsProvider>
            {children}
          </GroupsProvider>
        </ActivitiesProvider>
      </GoalsProvider>
    </AuthProvider>
  );
};

export default Providers;
