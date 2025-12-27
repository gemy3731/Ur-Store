import  {type LucideIcon } from "lucide-react";

interface Props {
  type: string;
  id: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  name?: string;
  Icon?: LucideIcon;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  accept?: string;
}
const Input = ({
  type,
  id,
  placeholder,
  className,
  value,
  onChange,
  onBlur,
  name,
  Icon,
  disabled = false,
  readonly = false,
  required = false,
  accept,
}: Props) => {
  return (
    <div className="relative">
      {Icon && <Icon
      size={16}
      className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
    />}
      <input
        type={type}
        id={id}
        name={name || ""}
        placeholder={placeholder}
        className={
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" +
          " " + (Icon ? "pl-9" : "") +" "+
          className
        }
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        readOnly={readonly}
        required={required}
        accept={accept}
      />
    </div>
  );
};

export default Input;
