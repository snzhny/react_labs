import { Component } from "react";

export class SelectJob extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.selected = this.selected.bind(this);
  }
  jobs = [
    { value: "", name: "Выберите" },
    { value: "Doctor", name: "Врач" },
    { value: "Tractorist", name: "Тракторист" },
    { value: "Cashier", name: "Кассир" },
    { value: "Manager", name: "Менеджер" },
    { value: "Lawyer", name: "Юрист" },
  ];
  selected(el) {
    return this.setState({ value: el.target.value });
  }
  render() {
    return (
      <>
        <select onChange={this.selected}>
          {this.jobs.map((item) => {
            return <option value={item.value}>{item.name}</option>;
          })}
        </select>
        <JobMenu value={this.state.value} />
      </>
    );
  }
}

class JobMenu extends Component {
  switchCase() {
    let links = [],
      value = this.props.value;

    switch (value) {
      case "Doctor":
        links.push("linkForDoctor", "linkForDoctor");
        break;
      case "Tractorist":
        links.push("linkForTractorist", "linkForTractorist");
        break;
      case "Cashier":
        links.push("linkForCashier", "linkForCashier");
        break;
      case "Manager":
        links.push("linkForManager");
        break;
      case "Lawyer":
        links.push("linkForLawyer");
        break;
    }
    console.log(links);
    return (
      <>
        <h2>Меню</h2>
        <ul>
          {links.map((item) => {
            return (
              <li>
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  render() {
    return <>{this.switchCase()}</>;
  }
}
