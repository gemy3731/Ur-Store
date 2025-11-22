import { ShoppingCart, Store } from "lucide-react";
import { useState } from "react";
import { Input, Loader } from "../ui";
import { useFormik } from "formik";
import type { UserInfoI } from "../../types/auth.types";
import { useAuth } from "../../context/Auth.context";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const ProfileSetupForm = () => {
  const [isCustomer, setIsCustomer] = useState<boolean>(true);
  const {setProfile, state} = useAuth();
  const navigate = useNavigate();
  const initialValues: UserInfoI = {
    username: "",
    fullname: "",
    phone: "",
    address: "",
    bio: "",
    role: "customer",
  };
  const onSubmit = async (values: UserInfoI) => {
    console.log(values);
    try{
      await setProfile(values);
      if(values.role === "customer"){
        navigate("/");
      }else{
        navigate("/dashboard");
      }
    }catch{
      toast.error("Something went wrong, please try again");
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  const handleRoleChange = (role: "customer" | "vendor") => {
    formik.setFieldValue("role", role);
    setIsCustomer(role === "customer");
    if(role === "customer"){
      formik.setFieldValue("bio", "");
    }else{
      formik.setFieldValue("address", "");
    }
  }
  return (
    <main className="rounded-lg border-border bg-card text-card-foreground w-full max-w-2xl shadow-lg">
      {state.loading && <Loader />}
      <div className="flex flex-col space-y-1.5 p-6 text-center">
        <h3 className="tracking-tight text-3xl font-bold">
          Complete Your Profile
        </h3>
        <p className="text-sm text-muted-foreground">
          Tell us a bit about yourself to get started
        </p>
      </div>
      <div className="p-6 pt-0">
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="username"
              className="text-sm font-medium leading-none"
            >
              Username
            </label>
            <Input
              type="text"
              id="username"
              placeholder="mohamedgamal"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username && (
              <p className="text-sm text-red-500">{formik.errors.username}</p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="fullname"
              className="text-sm font-medium leading-none"
            >
              Full Name
            </label>
            <Input
              type="text"
              id="fullname"
              placeholder="Mohamed Gamal"
              value={formik.values.fullname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.fullname && formik.errors.fullname && (
              <p className="text-sm text-red-500">{formik.errors.fullname}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium leading-none">
              Phone Number
            </label>
            <Input
              type="tel"
              id="phone"
              placeholder="+201000000000"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-sm text-red-500">{formik.errors.phone}</p>
            )}
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium leading-none">
              I Want To
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => handleRoleChange("customer")}
                className={`text-sm font-medium leading-none flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-card p-6 hover:bg-accent cursor-pointer ${
                  isCustomer && "border-primary bg-primary/5"
                } transition-all`}
              >
                <ShoppingCart />
                <span className="font-semibold">Shop</span>
                <span className="text-xs text-muted-foreground">
                  Browse and buy products
                </span>
              </button>
              <button
                type="button"
                onClick={() => handleRoleChange("vendor")}
                className={`text-sm font-medium leading-none flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-card p-6 hover:bg-accent cursor-pointer ${
                  !isCustomer && "border-primary bg-primary/5"
                } transition-all`}
              >
                <Store />
                <span className="font-semibold">Sell</span>
                <span className="text-xs text-muted-foreground">
                  List and sell your products
                </span>
              </button>
            </div>
          </div>

          {isCustomer ? (
            <div className="space-y-2">
              <label
                htmlFor="address"
                className="text-sm font-medium leading-none"
              >
                Shipping Address
              </label>
              <textarea
                id="address"
                placeholder="123 Main st, City, State"
                rows={2}
                className="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.address && formik.errors.address && (
                <p className="text-sm text-red-500">{formik.errors.address}</p>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              <label htmlFor="bio" className="text-sm font-medium leading-none">
                Bio
              </label>
              <textarea
                id="bio"
                placeholder="Tell us about your store or product"
                rows={2}
                className="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={formik.values.bio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.bio && formik.errors.bio && (
                <p className="text-sm text-red-500">{formik.errors.bio}</p>
              )}
            </div>
          )}
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
          >
            Complete Setup
          </button>
        </form>
      </div>
    </main>
  );
};

export default ProfileSetupForm;
