import React, { useState, useEffect } from "react";
import "./App.scss";
import InputBar from "./components/input-view/Input-bar.component";
import ListItems from "./components/List-Items/List-items.component";
import firebase from "./Firebase";
function App() {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState("");
  const changeHandler = (e) => {
    setInputData(e);
  };
  const fetchData = async () => {
    const db = firebase.firestore();
    const fetchedData = await db.collection("todos").get();
    // console.log(data.docs)
    setData(
      fetchedData.docs.map((doc) => {
        return { ...doc.data(), documentId: doc.id };
      })
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
  //  firebase.collection
  const db=firebase.firestore();
    db.collection('todos').onSnapshot(()=>{
      fetchData();
    })
  }, [])
  const clickHandler = (e) => {
    // console.log(data);
    e.preventDefault();
    if (inputData.length > 0) {
      const getId = new Date().getTime().toString();
      // const newData = [
      //   ...data,
      //   { id: getId, title: inputData, completed: false },
      // ];
      const newData = { id: getId, title: inputData, completed: false };
      // console.log(newData);
      const db = firebase.firestore();
      db.collection("todos").add(newData);
      setInputData("");
      // fetchData();
      //@ts-ignore
      // setData(newData);
    }
  };
  const changeCompletedStatus = (id) => {
    // console.log(id);
    let selectedTodo = data.filter((item) => item.id === id);
    //  selectedTodo.completed
    // console.log(selectedTodo[0])
    const filteredData = data.filter((item) => item.id !== id);
    //@ts-ignore
    selectedTodo = selectedTodo[0];
    //@ts-ignore
    selectedTodo.completed = true;
    //@ts-ignore
    const newData = [
      ...filteredData,
      //@ts-ignore
      { id: id, title: selectedTodo.title, completed: true },
    ];
    const db = firebase.firestore();
    db.collection("todos")
      .doc(selectedTodo.documentId)
      .update({ completed: true });
      // fetchData();
    // db.collection("todos").set(newData);
    //@ts-ignore
    setData(newData);
    // console.log(selectedTodo)
  };
  const removeTodo = (id) => {
    // console.log(id)
    // const newData = data.filter((item) => item.id !== id);
    // setData(newData);
    let selectedTodo = data.filter((item) => item.id === id);
    const db=firebase.firestore();
    // console.log(selectedTodo)
    //@ts-ignore
    selectedTodo=selectedTodo[0];
    db.collection('todos').doc(selectedTodo.documentId).delete();
  };
  return (
    <div className="container">
      <i className="fas fa-10x fa-frog"></i>
      <div className="card">
        <InputBar
          inputData={inputData}
          changeHandler={changeHandler}
          clickHandler={clickHandler}
        />
        <ListItems
          data={data}
          changeCompletedStatus={changeCompletedStatus}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
}

export default App;
