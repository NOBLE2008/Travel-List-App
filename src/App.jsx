import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackagingList from "./components/PackagingList";
import Stats from "./components/Stats";

const App = () => {
  
  const [initialItems, setInitial] = useState([]);
  return (
    <div className="app">
      <Logo />
      <Form setInitial={setInitial}/>
      <PackagingList initialItems={initialItems} setInitial={setInitial}/>
      <Stats />
    </div>
  );
};

export default App;
