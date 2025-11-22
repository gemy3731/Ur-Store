

interface Props {
    type: string;
    id: string;
    placeholder?: string;
    className?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;

}
const Input = ({type,id,placeholder,className,value,onChange,onBlur}:Props) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" + " " + className}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default Input;
