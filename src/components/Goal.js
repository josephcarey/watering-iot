import React from "react";

class Goal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputField: false };
  }
  s;

  handleClick = e => {
    e.preventDefault();
    if (this.state.inputField == false) {
      document.getElementById(
        `goal-${this.props.plant}`
      ).innerHTML = `<input type='number' value='${this.props.goal} onChange='${this.props.change}'></input>`;
      this.setState({ inputField: true });
      this.props.display();
    }
  };

  render() {
    return (
      //   <div onClick={this.handleClick}>
      <div>
        <div>Goal: %</div>
        {/* <div id={"goal-" + this.props.plant}>{this.props.goal}</div> */}
        <input
          type="number"
          value={this.props.goal}
          onChange={this.props.change}
        ></input>
        `
      </div>
    );
  }
}

export default Goal;
