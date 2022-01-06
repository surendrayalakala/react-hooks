import './App.css';
import ClassCounter from './components/state/ClassCounter';
import HookCounter from './components/state/HookCounter';
import HookCounterTwo from './components/state/HookCounterTwo';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter />
      <HookCounter /> */}
      <HookCounterTwo />
    </div>
  );
}

export default App;
