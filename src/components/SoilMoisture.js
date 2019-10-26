import React from 'react';
import axios from 'axios';

class SoilMoisture extends React.Component {
    constructor(props){
        super(props);
        this.state = {moistureLevel: 0}
    }

    componentDidMount() {
        axios.get('/api/web', this.props.plant).then((response)=>{
            this.setState({ moistureLevel: response.data })
        }).catch((error) => {
            console.log(`tried to send with ${this.props.plant}`);
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