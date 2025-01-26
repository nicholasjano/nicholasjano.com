import type { StackListProps } from "@pageTypes/pageTypes";

const StackCard = ({ title, items }: StackListProps) => {
  return (
    <div className="bg-surface-secondary p-4 rounded-lg space-y-4 flex flex-col">
      <h4 className="stack-title mx-auto text-center xs:mx-0 xs:text-left">{title}</h4>
      <ul className="flex flex-col gap-4">
        {items.map((item) => (
          <li key={item.name} className="h-12 flex items-center gap-3">
            <div className="stack-icon">
              <i className={`${item.icon} text-brand-blue text-2xl`}></i>
            </div>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StackCard;
