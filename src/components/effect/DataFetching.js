import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      <ul>
        {items.map((items) => (
          <li key={items.id}>{items.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
