import React from "react";

// he je Card , NavBar ye na he name alwys start with captial nahi to access nahi hot
import Card from "./components/card";
import NavBar from "./components/navbar";
const App = () => {
  return (
    // in react if we want to give a class to any Html element we need to provide like that | className=''|  becase in react class is a keyword so we can not directly used e.g. <h1 className='root'>Hello</h1>

    <div>
      {/* in app aaplya jar kon tya function la call kara y ch asl or a variable che value jar use kara y che asle tar te complsory { } curly braces madhe ch pass kara va lag te  */}

      {/* {Card()} */}

      {/* function he reusable ast so eith jevdhya veles function call karu tevdhya veles te value return karien i.e. in this case card return karien */}

      {/* je pan function app madhe call kele use kele te ch ui var ti display hot  */}

      <NavBar />
      <Card />
    </div>
  );
};

export default App;
