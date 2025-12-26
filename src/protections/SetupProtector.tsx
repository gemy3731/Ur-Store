import { Navigate } from "react-router";
import { useAuth } from "../context/Auth.context"

interface SetupProtectorProps {
    children: React.ReactNode;
}
const SetupProtector = ({children}: SetupProtectorProps) => {
    const {state} = useAuth();
    if(state.isAuth && !state.user?.username){
        return children;
    }else{
        return <Navigate to={'/home'} replace />;
    }
  return (
    <div>SetupProtector</div>
  )
}

export default SetupProtector