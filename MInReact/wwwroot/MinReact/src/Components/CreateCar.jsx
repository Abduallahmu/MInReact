import React from "react";


const CreateCarForm = props => {
    const { markes, onCreate, onChange, onReturn } = props;

    if (markes.length > 0) {
    return (
      <div className="container col-2 AlignCenter">
        <hr />
        <form className="marginBottom60" onSubmit={onCreate}>
          <label>Model</label>
          <br />
          <input
            name="modelName"
            type="text"
            placeholder="Car-model"
            required
          />
          <hr />
                <label>Marke</label>
          <br />
          <select onChange={onChange}>
            <option value="Select one">Select one</option>
            {markes.map((marke, index) => (
                <option name="marke" key={index}>
                    {marke}
              </option>
            ))}
          </select>
          <hr />
          <label>Color</label>
          <br />
          <input name="color" type="text" placeholder="Car-color" required />
          <hr />
          <label>ProductionYear</label>
          <br />
          <input
            name="productionYear"
            type="datetime"
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
  } else {
    return (
      <div className="container AlignCenter">
        <p className="errorMessage">
          Something went wrong. Please try again later.
        </p>
      </div>
    );
  }
};

export default CreateCarForm;
