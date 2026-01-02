import { ShoppingBag } from "lucide-react"
import { useState } from "react"
import { useFormik } from "formik"
import { useAuth } from "../../context/Auth.context"
import { Button, Input, Label, Loader } from "../ui"





interface AuthFormValues {
    email: string
    password: string
}
const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)
    const {signIn,signUp,state} = useAuth();
    const initialValues: AuthFormValues = {
        email: "",
        password: ""
    }
    const onSubmit = async (values: AuthFormValues) => {
        // console.log(values)
        if (isLogin) {
            const {error} = await signIn(values.email, values.password)
            if(error){
                console.log(error)
               }
        } else {
           const {error} = await signUp(values.email, values.password)
           if(error){
            console.log(error)
           }
        }
    }
    const formik = useFormik({
        initialValues,
        onSubmit
    })
    return (
        <div className="w-full max-w-md shadow-lg rounded-lg border border-border bg-card text-card-foreground">
            {state.loading && <Loader />}
            <header className="text-center flex flex-col space-y-1.5 p-6">
                <div className="flex justify-center mb-2">
                    <div className="p-3 rounded-full bg-linear-to-br from-primary to-accent">
                        <ShoppingBag className="h-8 w-8 text-white" />
                    </div>
                </div>
                <h1 className=" text-2xl font-semibold leading-none tracking-tight">Ur Store</h1>
                <p className="text-sm text-muted-foreground">Your gateway to buy and sell</p>
            </header>
            <main className="p-6 pt-0">
                <div className="flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
                    <div className="grid w-full grid-cols-2 h-full">
                        <button type="button" onClick={() => setIsLogin(true)} className={`${isLogin && "bg-background "} rounded-md`}>Login</button>
                        <button type="button" onClick={() => setIsLogin(false)} className={`${!isLogin && "bg-background "} rounded-md`}>Register</button>
                    </div>
                </div>
                <div className="mt-6 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <form onSubmit={formik.handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor={isLogin ? "loginEmail" : "registerEmail"} className="block text-sm font-medium leading-none">Email</Label>
                            <Input 
                                type="email"
                                name="email" 
                                id={isLogin ? "loginEmail" : "registerEmail"}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                placeholder="your@email.com"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor={isLogin ? "loginPassword" : "registerPassword"} className="block text-sm font-medium leading-none">Password</Label>
                            <Input 
                                type="password"
                                name="password"
                                id={isLogin ? "loginPassword" : "registerPassword"}
                                placeholder="......"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" />
                        </div>
                        <Button>{isLogin ? "Login" : "Create Account"}</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default AuthForm