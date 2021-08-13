import { AuthProvider } from "./Auth";
import { HabitsProvider } from "./Habits";
import { GroupsProvider } from "./Groups";

const Providers = ({ children }) => {
    return (
        <AuthProvider>
            <HabitsProvider>
                <GroupsProvider>
                    {children}
                </GroupsProvider>
            </HabitsProvider>
        </AuthProvider>
    );
};

export default Providers;
