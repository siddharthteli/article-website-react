import logo from "./logo.svg";
import "./App.css";

import Content from "./Pages/Content.js";
import Cards from "./components/Cards";
import faker from "faker";
const App = () => {
  console.log("Value of address:" + faker.address.zipCode());
  return (
    <div className="App">
      <div>
        <Cards image={faker.image.sports()} />
      </div>

      <div>
        <Cards image={faker.image.transport()} />
      </div>

      <div>
        <Cards image={faker.image.nature()} />
      </div>
    </div>
  );
};

export default App;
