import React from 'react';
import axios from 'axios';

class SoilMoisture extends React.Component {
    constructor(props){
        super(props);
        this.state = {moistureLevel: 0}
    }

    componentDidMount() {
        axios.get('/api/web').then((response)=>{
            this.setState({ moistureLevel: response.data[this.props.plant - 1] })
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <span>Soil moisture: {this.state.moistureLevel}</span>
            </div>
        );
    };
}

export default SoilMoisture;