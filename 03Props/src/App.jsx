import React from "react";

import Card from "./components/card";
const App = () => {
  return (
    <div className="parent">
      {/* and he aapn function call kar to ye tas ch ye so function madhe value pass kele and ti value child madhe access kele tya type madhe  */}
      {/* technically he function ye and function 2 n da call kel and each time as per input different value print kele  */}
      {/* app madhun data pass kela and card i.e. child madhe recive karun print kela  */}
      <Card
        user="Abhishek"
        age={23}
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYqoKTu_o3Zns2yExbst2Co84Gpc2Q1RJbA&s"
      />
      <Card
        user="Pratik"
        age={22}
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2-IiCQnnEHH1dk5HN2K60xrv8Wyu8VRW7Q&s"
      />
    </div>
  );
};

export default App;
