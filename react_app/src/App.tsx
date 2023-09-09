import ListGroup from "./components/ListGroup";

function App() {
  let items = ["София", "Пловдив", "Варна", "Бургас", "Земен"];

  const hanleSelectItem = (item: string) => {
    console.log(item)  
  }

  return (
    <div>
      <ListGroup items={items} heading="Градове и села" onSelectItem = {hanleSelectItem} />
    </div>
  );
}

export default App;
