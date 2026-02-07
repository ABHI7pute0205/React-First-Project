import React from "react";
// rafce ---> react arrow function export component

const App = () => {
  // App is a function and the function can return only one value at a time so yat div return kela so tya div madhe ch sagl kam kara y ch

  // in this case if we want to return 2 divs but not to create extra div for that purpose we use
  /*
    fragments --> fragments means the Empty tags  <> </>  which are we used in react to wrapp the content inside without writing extra html elements 
  */
  return (
    <>
      <div id="parentdiv1">
        <h1>Hey</h1>
      </div>

      <div id="parentdiv2">
        <h6>hello...</h6>
      </div>
    </>
  );
};

export default App;
