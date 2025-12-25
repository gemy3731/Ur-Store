interface Props {
  className?: string;
  children?: React.ReactNode;
  htmlFor?: string;
}

const Label = ({ className, children, htmlFor }: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      className={
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" +
        " " +
        className
      }
    >
      {children}
    </label>
  );
};

export default Label;
