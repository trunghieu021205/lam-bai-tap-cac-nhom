import type { Note } from '../types';

interface NoteItemProps {
  note: Note;
  onDelete: (id: string) => void;
}

export default function NoteItem({ note, onDelete }: NoteItemProps) {
  return (
    <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl p-4 hover:shadow-lg transition group">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg mb-1">{note.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
            {note.content}
          </p>
        </div>
        <button
          onClick={() => onDelete(note.id)}
          className="text-red-500 opacity-0 group-hover:opacity-100 transition"
        >
          Xóa
        </button>
      </div>
      <p className="text-xs text-gray-400 mt-3">
        {new Date(note.createdAt).toLocaleString('vi-VN')}
      </p>
    </div>
  );
}