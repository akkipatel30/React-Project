import { useState } from 'react';
import { Plus, Edit3, Trash2, Check, X } from 'lucide-react';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // Add new task
  const addTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date().toLocaleString()
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Start editing
  const startEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  // Save edit
  const saveEdit = () => {
    if (editText.trim()) {
      setTasks(tasks.map(task => 
        task.id === editingId ? { ...task, text: editText.trim() } : task
      ));
    }
    setEditingId(null);
    setEditText('');
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  // Handle key press
  const handleKeyPress = (e, action) => {
    if (e.key === 'Enter') {
      action();
    } else if (e.key === 'Escape' && action === cancelEdit) {
      cancelEdit();
    }
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            ✅ My Tasks
          </h1>
          <p className="text-gray-600">
            Stay organized and get things done!
          </p>
          {totalCount > 0 && (
            <div className="mt-4 inline-block bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="text-sm text-gray-600">
                {completedCount} of {totalCount} completed
              </span>
              <div className="w-32 bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: totalCount ? `${(completedCount / totalCount) * 100}%` : '0%' }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Add Task Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex gap-3">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => handleKeyPress(e, addTask)}
              placeholder="What needs to be done?"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={addTask}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              <Plus size={20} />
              Add Task
            </button>
          </div>
        </div>

        {/* Tasks List */}
        <div className="space-y-3">
          {tasks.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No tasks yet
              </h3>
              <p className="text-gray-500">
                Add your first task above to get started!
              </p>
            </div>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className={`bg-white rounded-xl shadow-md p-4 transition-all duration-200 hover:shadow-lg ${
                  task.completed ? 'opacity-75' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Complete/Uncomplete Button */}
                  <button
                    onClick={() => toggleComplete(task.id)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      task.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-green-500'
                    }`}
                  >
                    {task.completed && <Check size={14} />}
                  </button>

                  {/* Task Content */}
                  <div className="flex-1">
                    {editingId === task.id ? (
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') saveEdit();
                            if (e.key === 'Escape') cancelEdit();
                          }}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          autoFocus
                        />
                        <button
                          onClick={saveEdit}
                          className="text-green-600 hover:text-green-700 p-1"
                        >
                          <Check size={20} />
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="text-gray-500 hover:text-gray-600 p-1"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    ) : (
                      <div>
                        <p
                          className={`text-lg ${
                            task.completed
                              ? 'line-through text-gray-500'
                              : 'text-gray-800'
                          }`}
                        >
                          {task.text}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Created: {task.createdAt}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  {editingId !== task.id && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => startEdit(task.id, task.text)}
                        className="text-blue-500 hover:text-blue-600 p-1 transition-colors duration-200"
                        title="Edit task"
                      >
                        <Edit3 size={18} />
                      </button>
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="text-red-500 hover:text-red-600 p-1 transition-colors duration-200"
                        title="Delete task"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {tasks.length > 0 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setTasks(tasks.filter(task => !task.completed))}
              className="text-red-500 hover:text-red-600 text-sm underline"
            >
              Clear completed tasks ({completedCount})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}