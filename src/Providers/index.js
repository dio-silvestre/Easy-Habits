import { AuthProvider } from "./Auth";
import { HabitsProvider } from "./Habits";

const Providers = ({ children }) => {
    return (
        <AuthProvider>
            <HabitsProvider>
                {children}
            </HabitsProvider>
        </AuthProvider>
    );
};

export default Providers;
