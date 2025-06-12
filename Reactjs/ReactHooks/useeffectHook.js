/*Dependencies are of 2 types*/

// No Dependency

import { useState, useEffect } from "react";

const NoDependency = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let res = await fetch("URL");
      let data = await res.json();
      setData(data);
      console.log(data);
    };
    fetchData();
  });
};

// Empty Dependency

const EmptyDependency = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let res = await fetch("URL");
      let data = await res.json();
      setData(data);
      console.log(data);
    };
    fetchData();
  }, []);
};

// Data Dependency

const DataDependency = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let res = await fetch("URL");
      let data = await res.json();
      setData(data);
      console.log(data);
    };
    fetchData();
  }, [data]);
};
