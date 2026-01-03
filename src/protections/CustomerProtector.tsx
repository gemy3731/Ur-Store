import { Navigate } from "react-router";
import { useAuth } from "../context/Auth.context";
import { Loader } from "../components";

interface CustomerProtectorProps {
    children: React.ReactNode;
}

const CustomerProtector = ({children}: CustomerProtectorProps) => {
    const {state} = useAuth();
    if(state.loading) {
        return <Loader />;
    }
    if(state.isAuth && state.user?.role === 'customer') {
        return children
    }else{
       return <Navigate to={'/auth'} replace />
    }
}

export default CustomerProtector