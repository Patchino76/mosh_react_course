function ListGroup() {
  let cities = ["София", "Пловдив", "Варна", "Бургас", "Земен"];
  // cities = [];

  // if (cities.length == 0) return <p>No items</p>;
  
  // const getMessage = () => {
  //   cities.length == 0 ? <p>No items</p> : null;
  // };

  return (
    <>
      <h1>List</h1>
      {DataTransferItemList.length == 0 && <p>No items</p>}
      <ul className="list-group">
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
