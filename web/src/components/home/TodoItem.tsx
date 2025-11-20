import {cn} from "@/lib/utils";
import {Check} from "lucide-react";

interface TodoItemProps {
  text: string;
  completed: boolean;
  onChange?: (completed: boolean) => void;
  isLast?: boolean;
}

export function TodoItem({text, completed, onChange, isLast}: TodoItemProps) {
  return (
    <div className={cn("flex items-center gap-4 w-full px-4 py-3", !isLast && "border-b border-[#E2E8F0]", !completed && !isLast && "pb-[13px]")}>
      <button
        onClick={() => onChange?.(!completed)}
        className={cn("w-6 h-6 box-border rounded-full border-2 flex items-center justify-center shrink-0 transition-colors", completed ? "bg-[#137FEC] border-[#137FEC]" : "bg-transparent border-[#CBD5E1]")}
      >
        {completed && <Check className="w-3 h-3 text-white stroke-[2.5]" />}
      </button>
      <div className="flex-1">
        <span className={cn("text-base leading-[1.5em] text-left", completed ? "text-[#94A3B8]" : "text-[#1E293B]")}>{text}</span>
      </div>
    </div>
  );
}
