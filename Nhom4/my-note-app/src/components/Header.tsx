import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  noteCount: number;
}

export default function Header({ noteCount }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Ghi Chú Cá Nhân</h1>
        <span className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">
          {noteCount} ghi chú
        </span>
      </div>

      <button
        onClick={toggleTheme}                    
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
        title="Chuyển chế độ sáng/tối"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </div>
  );
}