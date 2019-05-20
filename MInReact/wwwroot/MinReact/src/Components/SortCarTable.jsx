import React, { Component } from "react";

class SortCarTable extends Component {
  state = {
    cars: this.props.cars,
    prevSort: ""
  };

  compareValues = (key, order = "asc") => {
      return function (XVX, VIP) {
          if (!XVX.hasOwnProperty(key) || !VIP.hasOwnProperty(key)) {
              return 0;
          }

          const compareA =
              typeof XVX[key] === "string" ? XVX[key].toUpperCase() : XVX[key];
          const compareB =
              typeof VIP[key] === "string" ? VIP[key].toUpperCase() : VIP[key];
          let comparison = 0;
          if (compareA > compareB) {
              comparison = 1;
          } else if (compareA < compareB) {
              comparison = -1;
          }
          return order === "desc" ? comparison * -1 : comparison;
      };
  };

  render() {
    const {
      cars,
      onDetails,
      sortCars,
      onEdit,
      onDelete,
      onSort,
      descending
    } = this.props;
    return (
      <table className="marginBottom60 AlignCenter">
        <thead>
          <tr className="col-12">
            <th name="modelName" onClick={() => onSort("Model")}>
              Model
            </th>
            <th name="brand" onClick={() => onSort("Brand")}>
              Brand
            </th>
            <th name="color" onClick={() => onSort("Color")}>
              Color
            </th>
            <th name="productionYear" onClick={() => onSort("Production Year")}>
              ProductionYear
            </th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {cars
            .sort(
              this.compareValues(sortCars, descending === true ? "desc" : "asc")
            )
            .map(car => (
              <tr key={car.id} className="col-12">
                <td>{car.modelName}</td>
                <td>{car.marke}</td>
                <td>{car.color}</td>
                <td>{car.productionYear}</td>
                <td>
                  <button
                    onClick={() => onEdit(car)}
                    className="btn btn-warning btn-sm m-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDetails(car)}
                    className="btn btn-primary btn-sm m-1"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => onDelete(car.id)}
                    className="btn btn-danger btn-sm m-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

export default SortCarTable;