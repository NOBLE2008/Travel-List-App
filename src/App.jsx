import "./App.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackagingList from "./components/PackagingList";
import Stats from "./components/Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackagingList />
      <Stats />
    </div>
  );
};

export default App;
