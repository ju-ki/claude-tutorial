import { useState, KeyboardEvent, useRef, useEffect } from 'react';
import { Todo } from '../types';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onEdit }: Props) {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) inputRef.current?.select();
  }, [editing]);

  const commitEdit = () => {
    const trimmed = editValue.trim();
    if (trimmed && trimmed !== todo.text) onEdit(todo.id, trimmed);
    else setEditValue(todo.text);
    setEditing(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') commitEdit();
    if (e.key === 'Escape') {
      setEditValue(todo.text);
      setEditing(false);
    }
  };

  return (
    <li className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 last:border-b-0 group hover:bg-gray-50 transition-colors">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 cursor-pointer accent-blue-500 flex-shrink-0"
      />
      {editing ? (
        <input
          ref={inputRef}
          value={editValue}
          onChange={e => setEditValue(e.target.value)}
          onBlur={commitEdit}
          onKeyDown={handleKeyDown}
          className="flex-1 px-2 py-0.5 border border-blue-400 rounded focus:outline-none text-gray-700"
        />
      ) : (
        <span
          onDoubleClick={() => setEditing(true)}
          title="ダブルクリックで編集"
          className={`flex-1 cursor-pointer select-none ${
            todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
          }`}
        >
          {todo.text}
        </span>
      )}
      <button
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-500 transition-all text-lg leading-none flex-shrink-0"
        aria-label="削除"
      >
        ×
      </button>
    </li>
  );
}
