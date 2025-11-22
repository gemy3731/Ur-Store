import { AuthForm, ThemeToggle } from "../../components";



const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
        <AuthForm/>
    </div>
  );
};

export default Login;
