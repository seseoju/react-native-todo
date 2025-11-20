import {X} from "lucide-react";

interface AttachmentItemProps {
  id: number;
  src: string;
  onRemove: (id: number) => void;
}

export function AttachmentItem({id, src, onRemove}: AttachmentItemProps) {
  return (
    <div className="relative shrink-0">
      <img src={src} alt={`Attachment ${id}`} className="w-24 h-24 rounded-lg object-cover" />
      <button onClick={() => onRemove(id)} className="absolute top-1 right-1 w-6 h-6 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors" aria-label="Remove attachment">
        <X className="w-4 h-4 text-white" />
      </button>
    </div>
  );
}
