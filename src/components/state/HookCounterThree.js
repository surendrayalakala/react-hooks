import React, { useState } from "react";

function HookCounterThree() {
  const [state, setState] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form>
        <input type={"text"} value={state.firstName} onChange={(event) => {
            setState({
                ...state,
                firstName: event.target.value
            })
        }}/>
        <input type={"text"} value={state.lastName} onChange={(event) => {
            setState({
                ...state,
                lastName: event.target.value
            })
        }}/>
        <h2>First name - {state.firstName}</h2>
        <h2>last name - {state.lastName}</h2>
      </form>
    </div>
  );
}

export default HookCounterThree;
