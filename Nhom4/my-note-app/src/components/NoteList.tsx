import NoteItem from './NoteItem';
import type { Note } from '../types';

interface NoteListProps {
  notes: Note[];
  onDeleteNote: (id: string) => void;
}

export default function NoteList({ notes, onDeleteNote }: NoteListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.map(note => (
        <NoteItem key={note.id} note={note} onDelete={onDeleteNote} />
      ))}
    </div>
  );
}