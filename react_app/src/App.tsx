import ListGroup from "./components/ListGroup";

function App() {
  let items = ["София", "Пловдив", "Варна", "Бургас", "Земен"];
  return (
    <div>
      <ListGroup items={items} heading="Градове и села" />
    </div>
  );
}

export default App;
