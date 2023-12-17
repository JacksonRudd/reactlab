import ListGroup from "./components/ListGroup";
function App() {
  return (
    <div>
      <ListGroup
        items={["Meat", "Cheese", "Veggies"]}
        heading={"Food"}
      ></ListGroup>
    </div>
  );
}

export default App;
