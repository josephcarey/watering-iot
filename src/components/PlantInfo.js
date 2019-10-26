import React from 'react';
import SoilMoisture from './SoilMoisture';
import Goal from './Goal';
import axios from 'axios';

class PlantInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {goalArray: [1,2,3,4]}
    }

    componentDidMount = () => {
        // get target moisture_levels
        axios.get('/api/remote').then((response)=>{
            let array = [];
            response.data.split(' ').forEach((val, i) => {if(i%2==1){array.push(Number(val))}});
            this.setState({ goalMoisture: array })
        }).catch((error) => {
            console.log(error);
        })
    }

    display = () => {
        //makes the submit button visible
        document.getElementById('submit-button').removeAttribute('style');
    }

    submit = (e) => {
        e.preventDefault();
        //submit new target levels
        axios.post('/api/web', this.state.array).then(result => {
            
        })
    }
    
    render(){
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Plant 1:</td>
                            <td><Goal plant={1} display={this.display} goal={this.state.goalArray[0]} /></td>
                            <td><SoilMoisture plant={1} /></td>
                        </tr>
                        <tr>
                            <td>Plant 2:</td>
                            <td><Goal plant={2} display={this.display} goal={this.state.goalArray[1]} /></td>
                            <td><SoilMoisture plant={2} /></td>
                        </tr>
                        <tr>
                            <td>Plant 3:</td>
                            <td><Goal plant={3} display={this.display} goal={this.state.goalArray[2]} /></td>
                            <td><SoilMoisture plant={3} /></td>
                        </tr>
                        <tr>
                            <td>Plant 4:</td>
                            <td><Goal plant={4} display={this.display} goal={this.state.goalArray[3]} /></td>
                            <td><SoilMoisture plant={4} /></td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <button id="submit-button" style={{display: 'none'}} onClick={this.submit}>
                    Submit
                </button>
            </div>
        );
    }
}

export default PlantInfo;