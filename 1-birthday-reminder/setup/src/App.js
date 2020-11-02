import React, { useState } from "react";
import data from "./data";
import Header from "./Header";
// import InputPerson from "./InputPerson";
import List from "./List";
import FilteredList from "./FilteredList";


const App = () => {
  const [people, setPeople] = useState(data);
  const [fullList, setFullList] = useState(false);
  const [button, setButton] = useState(true);

  // const [name, setName] =useState("");
  // const [year, setYear] = useState("");
  // const [isEditing, setIsEditing] = useState(null);
  
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   if (!name) {}
  //   else if (name && isEditing) {}
  //   else {
  //     const newPerson = {id: new Date().getTime().toString(),
  //     title: name, year: year};
  //     setPeople([...people, newPerson]);
  //     setName("");
  //     setYear("");
  //   }
  // };

  return (
    <main>
      <section className="container">
        <Header listLength={List.name.length} />
        <hr/>
        {/* <List people={people} /> */}
        {/* <button onClick={() => setPeople([])}>Add new</button> */}
        <div>{fullList ? <List people={people} /> : <FilteredList people={people} /> }</div>
        
      <button onClick={() => {
        setFullList(!fullList)
        setButton(!button)
        }}>
        {button ? "Show all" : "Show less"}
      </button>
      {/* <InputPerson addNewPerson={addNewPerson} /> */}
      </section>
    </main>
  );
}

export default App;
