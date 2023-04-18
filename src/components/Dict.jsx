import { useState } from "react";

function Dict() {
  const [Age, setAge] = useState(10);
  function increamnet_age() {
    console.log("increment is running");
    setAge((Age) => {
      return Age + 1;
    });
  }
  function decrease_age() {
    setAge((Age) => {
      return Age - 2;
    });
  }
  return (
    <div className="App">
      <div className="border-slate-600 rounded-xl"></div>
      <p>this is a sample comming from mehrdad</p>
      <p>the age is {Age}</p>
      <button onClick={increamnet_age}>increase age by one</button>
      <button onClick={decrease_age}>decrease Age by 2</button>
    </div>
  );
}

export default Dict;
