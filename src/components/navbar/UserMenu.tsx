import { User, LogOut, LogIn } from "lucide-react";
import Dropdown from "../ui/Dropdown";
import DropdownItem from "../ui/DropdownItem";
import type { authTypes } from "../../types";
import { useNavigate } from "react-router-dom";

const UserMenu = ({state,signOut}:{state:authTypes.AuthStateI;signOut:()=>Promise<void>}) => {
    const navigate = useNavigate();
  const handleSignIn = () => {
    console.log("sign in");
    navigate("/auth");
  };

  const handleLogout = async () => {
    console.log("Logout");
   await signOut();
  };

  return (
    <Dropdown
      trigger={
        <button
            type="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-accent hover:text-accent-foreground h-10 w-10"
          >
            <User size={24} />
          </button>
      }
    >
      {state.isAuth && state.user && <DropdownItem
        label={state.user.username}
        description={state.user.role}
        isBtn={false}
      />}

      {state.isAuth && <DropdownItem
        icon={<LogOut size={16} />}
        label="Logout"
        onClick={handleLogout}
        danger
      />}
      {!state.isAuth && <DropdownItem
        icon={<LogIn size={16} />}
        label="Sign In"
        onClick={handleSignIn}
      />}
    </Dropdown>
  );
};

export default UserMenu;
