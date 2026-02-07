import React from "react";

import Card from "./components/card";

const App = () => {
  // in react if we want to use variable value then we need to access print via  a curly {} braces
  const user = "Ram";

  return (
    // in react if we want to give a class to any Html element we need to provide like that | className=''|  becase in react class is a keyword so we can not directly used e.g. <h1 className='root'>Hello</h1>

    <div>
      <h1>hey i am {user}</h1>

      {/* in app aaplya jar kon tya function la call kara y ch asl or a variable che value jar use kara y che asle tar te complsory { } curly braces madhe ch pass kara va lag te  */}
      {Card()}
    </div>
  );
};

export default App;
