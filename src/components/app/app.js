import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmloyersAddForm from "../employers-add-form/employers-add-form";
import "./app.css";

function App() {
  const data = [
    { name: "Alex", salary: 800, increase: false },
    { name: "John", salary: 300, increase: true },
    { name: "Smith", salary: 1100, increase: false },
  ];
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployersList data={data} />
      <EmloyersAddForm />
    </div>
  );
}

export default App;
