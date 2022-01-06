import "./App.css";
import EffectHookCounterOne from "./components/effect/EffectHookCounterOne";
import ClassCounter from "./components/state/ClassCounter";
import HookCounter from "./components/state/HookCounter";
import HookCounterFour from "./components/state/HookCounterFour";
import HookCounterThree from "./components/state/HookCounterThree";
import HookCounterTwo from "./components/state/HookCounterTwo";

function App() {
  // useState
  // return (
  //   <div className="App">
  //     {/* <ClassCounter />
  //     <HookCounter /> */}
  //     {/* <HookCounterTwo /> */}
  //     {/* <HookCounterThree /> */}
  //     {/* <HookCounterFour /> */}
  //   </div>
  // );

  //useEffect
  return (
    <div className="App">
      <EffectHookCounterOne />
    </div>
  );
}

export default App;
