import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  defaultValue?: string;
  listItems: string[];
  id: string;
  setCurrentValue: (value: string) => void;
}
const SelectButton = ({
  defaultValue,
  listItems,
  id,
  setCurrentValue,
}: Props) => {
  const [valueState, setValueState] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (item: string) => {
    setValueState(item|| defaultValue);
    setCurrentValue(item);
    setIsOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest(`#${id}`)) {
        return;
      }
      if (isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, id]);
  return (
    <div id={id} className="relative text-muted-foreground">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
      >
        <span className="pointer-events-none">{valueState}</span>
        <ChevronDown size={16} className="h-4 w-4 opacity-50" />
      </button>
      {isOpen && (
        <div className="absolute top-[120%] left-0 w-full rounded-md border border-border bg-background p-2 text-sm shadow-lg z-10">
          <button
            type="button"
            className={`flex w-full items-center justify-between rounded-md p-2 hover:bg-accent hover:text-accent-foreground ${
              valueState === defaultValue ? "bg-accent text-accent-foreground" : ""
            }`}
            onClick={() => handleSelect('')}
          >
            {defaultValue && <span className="line-clamp-1">{defaultValue}</span>}
          </button>
          {listItems.map((item, index) => (
            <button
              key={index}
              type="button"
              className={`flex w-full items-center justify-between rounded-md p-2 hover:bg-accent hover:text-accent-foreground ${
                valueState === item ? "bg-accent text-accent-foreground" : ""
              }`}
              onClick={() => handleSelect(item)}
            >
              <span className="line-clamp-1">{item}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectButton;
