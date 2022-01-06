import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [items, setItems] = useState({});
  const [id, setId] = useState(1);
  const [idFromClick, setIdFromClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromClick}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {});
  }, [idFromClick]);

  return (
    <div>
        <input type={'text'} value={id} onChange={(e) => setId(e.target.value)}/>
        <button type="button" onClick={() => setIdFromClick(id)}>Get data</button>
        <div>{items.title}</div>
      {/* <ul>
        {items.map((items) => (
          <li key={items.id}>{items.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
