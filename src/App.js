import './App.css';
import ClassCounter from './components/state/ClassCounter';
import HookCounter from './components/state/HookCounter';
import HookCounterFour from './components/state/HookCounterFour';
import HookCounterThree from './components/state/HookCounterThree';
import HookCounterTwo from './components/state/HookCounterTwo';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter />
      <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      <HookCounterFour />
    </div>
  );
}

export default App;
