const KEY = "todos_v1";
export const loadTodos = () => {
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; }
};
export const saveTodos = (todos: unknown) => localStorage.setItem(KEY, JSON.stringify(todos));
