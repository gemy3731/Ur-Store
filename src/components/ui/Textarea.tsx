interface Props {
  id: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  name?: string;
  disabled?: boolean;
  rows?: number;
  children?: React.ReactNode;
  readonly?: boolean;
  required?: boolean
}
const Textarea = ({
  id,
  placeholder,
  className,
  value,
  onChange,
  onBlur,
  name,
  disabled = false,
  rows,
  children,
  readonly = false,
  required = false
}: Props) => {
  return (
    <textarea
      name={name || ""}
      placeholder={placeholder}
      className={
        "flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" +
         +" "+ className
      }
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      id={id}
      disabled={disabled}
      rows={rows}
      readOnly={readonly}
      required={required}
    >{children}</textarea>
  );
};

export default Textarea;
