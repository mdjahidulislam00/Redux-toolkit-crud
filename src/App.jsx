
import CounterView from "./app/Features/counter/CounterView";
import TodosView from "./app/Features/todos/todosView";


function App() {
  return (
    <div className="p-10">
      <div className="flex justify-between space-x-60">
        <CounterView />
        <TodosView />
      </div>
    </div>
  );
}

export default App;
