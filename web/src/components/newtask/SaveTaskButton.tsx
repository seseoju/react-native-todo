interface SaveTaskButtonProps {
  onSave: () => void;
}

export function SaveTaskButton({onSave}: SaveTaskButtonProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[rgba(246,247,248,0.8)] backdrop-blur-sm border-t border-[#E2E8F0] px-4 pt-[17px] pb-4">
      <button
        onClick={onSave}
        className="w-full flex items-center justify-center px-6 py-3 bg-[#137FEC] rounded-xl text-base font-bold text-white tracking-[0.015em] hover:bg-[#0f6bc7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#137FEC] focus:ring-offset-2"
      >
        Save Task
      </button>
    </div>
  );
}

