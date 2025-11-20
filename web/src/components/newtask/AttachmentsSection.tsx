import {Camera, Upload} from "lucide-react";
import {AttachmentItem} from "./AttachmentItem";

interface Attachment {
  id: number;
  src: string;
}

interface AttachmentsSectionProps {
  attachments: Attachment[];
  onRemoveAttachment: (id: number) => void;
  onTakePhoto?: () => void;
  onUploadPhoto?: () => void;
}

export function AttachmentsSection({attachments, onRemoveAttachment, onTakePhoto, onUploadPhoto}: AttachmentsSectionProps) {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-bold text-[#333333] mb-2 px-0">Attachments</h2>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 px-0 py-3">
        <button
          type="button"
          onClick={onTakePhoto}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[rgba(19,127,236,0.2)] rounded-lg text-sm font-bold text-[#137FEC] tracking-[0.015em] hover:bg-[rgba(19,127,236,0.3)] transition-colors"
        >
          <Camera className="w-6 h-6" />
          <span>Take Photo</span>
        </button>
        <button
          type="button"
          onClick={onUploadPhoto}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[rgba(19,127,236,0.2)] rounded-lg text-sm font-bold text-[#137FEC] tracking-[0.015em] hover:bg-[rgba(19,127,236,0.3)] transition-colors"
        >
          <Upload className="w-6 h-6" />
          <span>Upload Photo</span>
        </button>
      </div>

      {/* Attachment Images */}
      {attachments.length > 0 && (
        <div className="flex gap-3 overflow-x-auto pb-2 px-0">
          {attachments.map((attachment) => (
            <AttachmentItem key={attachment.id} id={attachment.id} src={attachment.src} onRemove={onRemoveAttachment} />
          ))}
        </div>
      )}
    </div>
  );
}
