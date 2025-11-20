import {ArrowLeft} from "lucide-react";

interface PageHeaderProps {
  title: string;
  onBack?: () => void;
}

export function PageHeader({title, onBack}: PageHeaderProps) {
  return (
    <header className="flex justify-between items-center px-4 pt-4 pb-2">
      {onBack ? (
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors" aria-label="Go back">
          <ArrowLeft className="w-5 h-5 text-[#333333]" />
        </button>
      ) : (
        <div className="w-10 h-10" />
      )}
      <h1 className="flex-1 text-center text-[18px] font-bold leading-[1.25em] tracking-[-0.015em] text-[#333333]">{title}</h1>
      <div className="w-10 h-10" />
    </header>
  );
}
