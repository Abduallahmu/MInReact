import React, { Component } from "react";
import axios from "axios";
import App from "../App";

const url = "https://localhost:44392/api/ApiCar/";

class EditCarForm extends Component {
  constructor(props) {
    super(props);

    const { oneCar } = this.props;

    this.state = {
      oneCar: oneCar,
      editComplete: false,

      modelName: oneCar.modelName,
        marke: oneCar.marke,
      color: oneCar.color,
      productionYear: oneCar.productionYear
    };
  }
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("handleSubmit - EditCarForm called");

    const { modelName, marke, color, productionYear, oneCar } = this.state;

    const car = {
      ModelName: modelName,
        Marke: marke,
      Color: color,
      ProductionYear: productionYear
    };
    axios
      .put(url + oneCar.id, car, { "Content-Type": "application/json" })
      .then(response => {
        this.setState({ editComplete: true });
      })
      .catch(error => {
        if (error.response) {
          console.log(
            "Error. Please try again."
          );
        } else if (error.request) {
            console.log("Error. Please try again.");
        } else {
          console.log("Something went wrong - " + Error);
        }
      });
  };
  render() {
      const { brands, onReturn } = this.props;
    const {
      modelName,
      color,
      productionYear,
      editComplete
    } = this.state;

    if (editComplete === true) {
      return <App />;
    }
      
    return (
      <div className="container col-2 AlignCenter">
        <hr />
        <form className="marginBottom60" onSubmit={this.handleSubmit}>
          <label>Model</label>
          <br />
          <input
            name="modelName"
            type="text"
            value={modelName}
            onChange={this.handleChange}
            placeholder="Car-model"
            required
          />
          <hr />
          <label>Marke</label>
          <br />
          <select onChange={this.handleChange}>
                    
                    {brands.map((brand, index) => (
                        <option name="marke" key={index}>
                            {brand}
                        </option>))
                    }
                    
          </select>
          <hr />
          <label>Color</label>
          <br />
          <input
            name="color"
            type="text"
            value={color}
            onChange={this.handleChange}
            placeholder="Car-color"
            required
          />
          <hr />
          <label>ProductionYear</label>
          <br />
          <input
            name="productionYear"
            type="datetime"
            value={productionYear}
            onChange={this.handleChange}
            placeholder="Production-Year"
            required
          />
          <hr />
          <input
            type="submit"
            value="Submit"
            className="btn btn-success btn-sm"
          />
        </form>
        <button
          onClick={() => onReturn()}
          className="btn btn-primary btn-sm offset-2"
        >
          Return
        </button>
      </div>
    );
  }
}

export default EditCarForm;
