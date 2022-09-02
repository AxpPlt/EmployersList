import { Component } from "react";
// import "./employers-add-form.css";
import "./employees-add-form.scss";

class EmloyersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }
  onSumbit = (evt) => {
    evt.preventDefault();
    if (this.state.name.length > 3 && this.state.salary > 10) {
      this.props.onAdd(this.state.name, this.state.salary);
    } else {
      alert("Введите корректные данные");
    }

    this.setState({
      name: "",
      salary: "",
    });
  };
  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSumbit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            onChange={this.onValueChange}
            value={name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            onChange={this.onValueChange}
            value={salary}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmloyersAddForm;
