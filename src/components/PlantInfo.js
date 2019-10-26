import React from "react";
import SoilMoisture from "./SoilMoisture";
import Goal from "./Goal";
import axios from "axios";

class PlantInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goalMoisture1: 1,
      goalMoisture2: 1,
      goalMoisture3: 1,
      goalMoisture4: 1
    };
  }

  componentDidMount = () => {
    // get target moisture_levels
    axios
      .get("/api/remote")
      .then(response => {
        let array = [];
        response.data.split(" ").forEach((val, i) => {
          if (i % 2 == 1) {
            array.push(Number(val));
          }
        });
        this.setState({
          goalMoisture1: array[0],
          goalMoisture2: array[1],
          goalMoisture3: array[2],
          goalMoisture4: array[3]
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  display = () => {
    //makes the submit button visible
    document.getElementById("submit-button").removeAttribute("style");
  };

  submit = e => {
    e.preventDefault();
    //submit new target levels
    axios.post("/api/web", this.state).then(result => {});
  };

  handleChange = name => event => {
    console.log(event);
    this.setState({
      ...this.state,
      [name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>Plant 1:</td>
              <td>
                <Goal
                  plant={1}
                  display={this.display}
                  goal={this.state.goalMoisture1}
                  change={this.handleChange("goalMoisture1")}
                />
              </td>
              <td>
                <SoilMoisture plant={1} />
              </td>
            </tr>
            <tr>
              <td>Plant 2:</td>
              <td>
                <Goal
                  plant={2}
                  display={this.display}
                  goal={this.state.goalMoisture2}
                  change={this.handleChange("goalMoisture2")}
                />
              </td>
              <td>
                <SoilMoisture plant={2} />
              </td>
            </tr>
            <tr>
              <td>Plant 3:</td>
              <td>
                <Goal
                  plant={3}
                  display={this.display}
                  goal={this.state.goalMoisture3}
                  change={this.handleChange("goalMoisture3")}
                />
              </td>
              <td>
                <SoilMoisture plant={3} />
              </td>
            </tr>
            <tr>
              <td>Plant 4:</td>
              <td>
                <Goal
                  plant={4}
                  display={this.display}
                  goal={this.state.goalMoisture4}
                  change={this.handleChange("goalMoisture4")}
                />
              </td>
              <td>
                <SoilMoisture plant={4} />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <button id="submit-button" onClick={this.submit}>
          Submit
        </button>
      </div>
    );
  }
}

export default PlantInfo;
