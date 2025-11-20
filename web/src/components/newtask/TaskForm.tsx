interface TaskFormProps {
  taskName: string;
  notes: string;
  onTaskNameChange: (value: string) => void;
  onNotesChange: (value: string) => void;
}

export function TaskForm({taskName, notes, onTaskNameChange, onNotesChange}: TaskFormProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Task Name */}
      <div className="flex flex-col">
        <label className="text-base font-medium text-[#333333] mb-2">Task Name</label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => onTaskNameChange(e.target.value)}
          placeholder="e.g., Buy groceries"
          className="w-full px-4 py-4 bg-[#F6F7F8] border border-[#CBD5E1] rounded-lg text-base text-[#333333] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#137FEC] focus:border-transparent"
        />
      </div>

      {/* Notes */}
      <div className="flex flex-col">
        <label className="text-base font-medium text-[#333333] mb-2">Notes</label>
        <textarea
          value={notes}
          onChange={(e) => onNotesChange(e.target.value)}
          placeholder="Add more details..."
          rows={4}
          className="w-full px-4 py-4 bg-[#F6F7F8] border border-[#CBD5E1] rounded-lg text-base text-[#333333] placeholder:text-[#94A3B8] resize-none focus:outline-none focus:ring-2 focus:ring-[#137FEC] focus:border-transparent"
        />
      </div>
    </div>
  );
}

