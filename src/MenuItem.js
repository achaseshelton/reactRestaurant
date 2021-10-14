import React from "react";
import axios from "axios";

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: {} }
    }

    componentDidMount() {
        this.apiCall();
        // console.log(this.props.url)
    }

    getRandomInt(max) {
        return Math.ceil(Math.random() * max) + 3.98;
    }

    apiCall() {
        // console.log(axios)
        axios.get(this.props.url)
            .then((response) => {
                // console.log(response)
                this.setState({ data: response.data[0] });
            })
            .catch((error) => {
            })
        // .then( () => {
        // });
    }

    render() {
        return (
            <div className="col mt-2 mb-2">
                <div className="card h-100">
                    <img src={this.props.src} className="card-img-top image-fluid mx-auto p-3" alt="food item" />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.data.name}</h5>
                        <p className="card-text">{this.state.data.description}</p>
                        <h5 className="card-title">$ {this.getRandomInt(this.props.value)}</h5>
                    </div>
                </div>
            </div>
        )
    }
}
export default MenuItem;
