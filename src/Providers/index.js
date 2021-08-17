import { AuthProvider } from "./Auth";
import { GroupsProvider } from "./Groups";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <GroupsProvider>{children}</GroupsProvider>
    </AuthProvider>
  );
};

export default Providers;
