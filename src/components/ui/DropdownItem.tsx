type DropdownItemProps = {
  icon?: React.ReactNode;
  label: string;
  description?: string;
  onClick?: () => void;
  danger?: boolean;
  isBtn?: boolean;
};

const DropdownItem = ({
  icon,
  label,
  onClick,
  danger,
  description,
  isBtn
}: DropdownItemProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col w-full  px-4 py-2 text-sm transition-colors text-foreground
          ${danger ? "text-red-600 hover:bg-red-50" : isBtn ? "hover:bg-accent" : "cursor-default!"}
        `}
    >
      <span className="flex items-center text-left gap-2 font-semibold ">
        {icon}
        {label}
      </span>
      {description && <span className="text-left font-light">{description}</span>}
    </button>
  );
};

export default DropdownItem;
