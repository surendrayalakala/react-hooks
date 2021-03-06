import "./App.css";
import DataFetching from "./components/effect/DataFetching";
import EffectHookCounterOne from "./components/effect/EffectHookCounterOne";
import EffectHookMouse from "./components/effect/EffectHookMouse";
import EffectInterval from "./components/effect/EffectInterval";
import MouseContainer from "./components/effect/MouseContainer";
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
      {/* <EffectHookMouse /> */}
      <MouseContainer />
      <EffectInterval />
      <DataFetching />
    </div>
  );
}

export default App;
