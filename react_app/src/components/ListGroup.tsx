function ListGroup() {
  const cities = ["София", "Пловдив", "Варна", "Бургас", "Земен"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {cities.map((city) => (
          <li>{city}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
