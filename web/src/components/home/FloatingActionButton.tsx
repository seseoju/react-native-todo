import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingActionButtonProps {
  onClick?: () => void;
}

export function FloatingActionButton({ onClick }: FloatingActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "fixed bottom-8 right-8 w-16 h-16 rounded-full bg-[#137FEC]",
        "flex items-center justify-center text-white",
        "shadow-[0px_4px_6px_-4px_rgba(19,127,236,0.4),0px_10px_15px_-3px_rgba(19,127,236,0.4)]",
        "hover:bg-[#0f6bc7] transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-[#137FEC] focus:ring-offset-2"
      )}
      aria-label="Add new task"
    >
      <Plus className="w-6 h-6" strokeWidth={2.5} />
    </button>
  );
}

