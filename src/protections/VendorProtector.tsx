import { Loader } from "lucide-react";
import { useAuth } from "../context/Auth.context";
import { Navigate } from "react-router-dom";

interface CustomerProtectorProps {
    children: React.ReactNode;
}

const VendorProtector = ({children}: CustomerProtectorProps) => {
    const {state} = useAuth();
    if(state.loading) {
        return <Loader />;
    }
    if(state.isAuth && state.user?.role === 'vendor') {
        return children
    }else{
       return <Navigate to={'/'} replace />
    }
}

export default VendorProtector