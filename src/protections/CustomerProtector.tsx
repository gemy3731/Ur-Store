import { Navigate } from "react-router";
import { useAuth } from "../context/Auth.context";

interface CustomerProtectorProps {
    children: React.ReactNode;
}

const CustomerProtector = ({children}: CustomerProtectorProps) => {
    const {state} = useAuth();
    console.log(state);
    if(state.isAuth && state.user?.role === 'customer') {
        return children
    }else{
       return <Navigate to={'/auth'} replace />
    }
}

export default CustomerProtector