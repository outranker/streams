import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const PageOne = () => {
  return <div>p1 </div>;
};
const PageThree = () => {
  return <div>p3 </div>;
};
const PageTwo = () => {
  return (
    <div>
      p2
      <button>click me</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
          <Route path="/pagethree" component={PageThree} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
