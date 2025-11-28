import type { MiddleSectionItemProps } from "./MiddleSection";





const MiddleSectionItem = ({Icon,title,description}:MiddleSectionItemProps) => {
  return (
    <div className="rounded-lg border border-border bg-card text-card-foreground shadow-sm text-center hover:shadow-lg transition-shadow">
      <div className="flex flex-col space-y-1.5 p-6">
        <Icon size={48} className="mx-auto text-primary mb-2" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="p-6 pt-0">
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default MiddleSectionItem;
