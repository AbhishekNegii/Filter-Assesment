import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const Filter = () => {
  const inputRef = useRef();

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState();
  const [body, setBody] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/posts");

    let arr = [];
    let arr1 = [];
    for (let i = 0; i < 100; i++) {
      arr[i] = response.data[i].title;
      arr1[i] = response.data[i].body;
    }

    setData(arr);
    setBody(arr1);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const text = inputRef.current.value;
    setFilter(text);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" ref={inputRef} />
        <button>Filter</button>
      </form>

      { data
        .filter((item1) => {
          return item1.includes(filter);
        })
        .map((item) => {
          return <li>{item}</li>;
        })}
    </div>
  );
};

export default Filter;
