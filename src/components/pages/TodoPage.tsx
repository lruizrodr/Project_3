import { useEffect, useReducer } from "react";

type Todo = { id: number; text: string; completed: boolean };
type Filter = "all" | "completed" | "incomplete";
type State = { todos: Todo[]; filter: Filter };

type Action =
  | { type: "add"; text: string }
  | { type: "toggle"; id: number }
  | { type: "remove"; id: number }
  | { type: "filter"; filter: Filter }
  | { type: "load"; todos: Todo[] };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add":
      const newTodo: Todo = {
        id: Date.now(),
        text: action.text,
        completed: false,
      };
      return { ...state, todos: [newTodo, ...state.todos] };
    case "toggle":
      return {
        ...state,
        todos: state.todos.map(t =>
          t.id === action.id ? { ...t, completed: !t.completed } : t
        ),
      };
    case "remove":
      return { ...state, todos: state.todos.filter(t => t.id !== action.id) };
    case "filter":
      return { ...state, filter: action.filter };
    case "load":
      return { ...state, todos: action.todos };
    default:
      return state;
  }
}

function TodoPage() {
  const [state, dispatch] = useReducer(reducer, { todos: [], filter: "all" });

  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) dispatch({ type: "load", todos: JSON.parse(stored) });
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  const visibleTodos = state.todos.filter(todo => {
    if (state.filter === "completed") return todo.completed;
    if (state.filter === "incomplete") return !todo.completed;
    return true;
  });

  function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = (e.currentTarget.elements.namedItem("todoText") as HTMLInputElement);
    const text = input.value.trim();
    if (text) {
      dispatch({ type: "add", text });
      input.value = "";
    }
  }

  return (
    <section>
      <h2>Todos</h2>
      <form onSubmit={handleAdd}>
        <input name="todoText" placeholder="New task..." />
        <button type="submit">Add</button>
      </form>

      <div>
        <button onClick={() => dispatch({ type: "filter", filter: "all" })}>All</button>
        <button onClick={() => dispatch({ type: "filter", filter: "completed" })}>Completed</button>
        <button onClick={() => dispatch({ type: "filter", filter: "incomplete" })}>Incomplete</button>
      </div>

      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: "toggle", id: todo.id })}
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: "remove", id: todo.id })}>X</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoPage;
