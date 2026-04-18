import { useState, useEffect } from 'react';
import type { Note } from './types';
import Header from './components/Header';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { ThemeProvider } from './context/ThemeContext';

function AppContent() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    try {
      const savedNotes = localStorage.getItem('notes');
      if (savedNotes) {
        const parsedNotes = JSON.parse(savedNotes);
        if (Array.isArray(parsedNotes)) {
          setNotes(parsedNotes);
        }
      }
    } catch (error) {
      console.error('Lỗi khi load notes từ localStorage:', error);
      localStorage.removeItem('notes');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote: Omit<Note, 'id' | 'createdAt'>) => {
    const note: Note = {
      ...newNote,
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      createdAt: new Date().toISOString(),
    };
    setNotes((prev) => [note, ...prev]);
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <Header noteCount={notes.length} />

        <NoteForm onAddNote={addNote} />

        {notes.length === 0 ? (
          <p className="text-center text-gray-400 py-12">
            Chưa có ghi chú nào. Hãy thêm ghi chú đầu tiên!
          </p>
        ) : (
          <NoteList notes={notes} onDeleteNote={deleteNote} />
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}