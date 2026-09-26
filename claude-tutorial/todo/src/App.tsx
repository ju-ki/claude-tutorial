import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';

export default function App() {
  const {
    filteredTodos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    activeCount,
    completedCount,
  } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-start justify-center pt-20 pb-10">
      <div className="w-full max-w-md px-4">
        <h1 className="text-5xl font-thin text-center text-indigo-300 mb-10 tracking-widest">
          todos
        </h1>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <TodoInput onAdd={addTodo} />
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
          <TodoFilter
            filter={filter}
            onFilterChange={setFilter}
            activeCount={activeCount}
            completedCount={completedCount}
            onClearCompleted={clearCompleted}
          />
        </div>
        <p className="text-center text-gray-400 text-xs mt-6">
          ダブルクリックで編集 · Enter で確定 · Escape でキャンセル
        </p>
      </div>
    </div>
  );
}
