import { Navigate } from "react-router";
import { useAuth } from "../context/Auth.context"
import { Loader } from "../components";

interface SetupProtectorProps {
    children: React.ReactNode;
}
const SetupProtector = ({children}: SetupProtectorProps) => {
    const {state} = useAuth();
    if(state.loading){
        return <Loader />;
    }
    if(state.isAuth && !state.user?.username){
        return children;
    }else{
        return <Navigate to={'/home'} replace />;
    }
}

export default SetupProtector