import { Component } from "react";
import nextId, { setPrefix } from "react-id-generator";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmloyersAddForm from "../employers-add-form/employers-add-form";
import BootstrapTest from "../../BootsTrap";

import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";

setPrefix("");
class App extends Component {
  constructor(props) {
    super(props);
    this.id = nextId();
    this.state = {
      counterEmployer: 0,
      data: [
        {
          name: "Alex",
          salary: 800,
          increase: true,
          like: false,
          id: nextId(),
        },
        {
          name: "John",
          salary: 300,
          increase: false,
          like: false,
          id: nextId(),
        },
        {
          name: "Varvara",
          salary: 100000,
          increase: false,
          like: false,
          id: nextId(),
        },
        {
          name: "Smith",
          salary: 1100,
          increase: false,
          like: false,
          id: nextId(),
        },
      ],
      term: "",
      filter: "all",
    };
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: nextId(),
      like: false,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };
  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };
  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };
  searhEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };
  onUpdateSearch = (term) => {
    this.setState({ term });
  };
  filterPost = (items, filter) => {
    switch (filter) {
      case "increase":
        return items.filter((item) => item.increase);
      case "moreThen1000":
        return items.filter((item) => item.salary > 1000);
      case "like":
        return items.filter((item) => item.like);
      default:
        return items;
    }
  };
  onFilterSelect = (filter) => {
    this.setState({ filter });
  };
  // salaryOnChange = (salary) => {
  //   console.log(salary);
  // };
  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.filterPost(this.searhEmp(data, term), filter);
    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <EmployersList
          // salaryOnChange={this.salaryOnChange}
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmloyersAddForm onAdd={this.addItem} />
        <BootstrapTest></BootstrapTest>
      </div>
    );
  }
}

export default App;

// Динамическое изменения зарплаты
