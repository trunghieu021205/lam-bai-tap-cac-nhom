import { useState } from 'react';
import type { Note } from '../types';

interface NoteFormProps {
  onAddNote: (note: Omit<Note, 'id' | 'createdAt'>) => void;
}

export default function NoteForm({ onAddNote }: NoteFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    onAddNote({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Tiêu đề ghi chú..."
        className="w-full p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800 mb-3"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Nội dung ghi chú..."
        rows={3}
        className="w-full p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800 mb-3"
      />
      <button
        type="submit"
        className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-lg font-medium"
      >
        + Thêm
      </button>
    </form>
  );
}