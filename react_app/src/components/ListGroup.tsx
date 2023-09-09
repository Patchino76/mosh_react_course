import { useState } from "react";

function ListGroup() {
  let cities = ["София", "Пловдив", "Варна", "Бургас", "Земен"];
  // cities = [];

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // if (cities.length == 0) return <p>No items</p>;

  // const getMessage = () => {
  //   cities.length == 0 ? <p>No items</p> : null;
  // };

  // const handleClick = (e:MouseEvent) => {console.log(e)}
  return (
    <>
      <h1>List</h1>
      {DataTransferItemList.length == 0 && <p>No items</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => setSelectedIndex(index)}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
