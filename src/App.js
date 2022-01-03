// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import dataArray from "./data";

function App() {
  const data = dataArray.map((items) => {
    return <Card key={items.title} cardData={items} />;
  });

  return (
    <div>
      <Navbar />
      {data}
    </div>
  );
}

export default App;
