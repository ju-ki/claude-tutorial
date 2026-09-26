import { FilterType } from '../types';

interface Props {
  filter: FilterType;
  onFilterChange: (f: FilterType) => void;
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

const FILTERS: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'すべて' },
  { value: 'active', label: '未完了' },
  { value: 'completed', label: '完了済み' },
];

export function TodoFilter({
  filter,
  onFilterChange,
  activeCount,
  completedCount,
  onClearCompleted,
}: Props) {
  return (
    <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
      <span className="w-24">
        {activeCount} 件残り
      </span>
      <div className="flex gap-1">
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => onFilterChange(value)}
            className={`px-3 py-1 rounded transition-colors ${
              filter === value
                ? 'border border-blue-400 text-blue-500'
                : 'hover:text-gray-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="w-24 text-right">
        {completedCount > 0 && (
          <button
            onClick={onClearCompleted}
            className="hover:text-red-500 transition-colors"
          >
            完了済みを削除
          </button>
        )}
      </div>
    </div>
  );
}
