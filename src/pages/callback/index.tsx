import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth.context";
import { useEffect } from "react";
import { Loader } from "../../components";


const Callback = () => {
  const {state} = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!state.user) {
      navigate("/profile-setup");
    }else{
      if(state.user.role === "customer"){
        navigate("/");
      }else{
        navigate("/vendor/dashboard");
      }
    }
    // eslint-disable-next-line
  },[])
  return (
    <Loader />
  )
}

export default Callback