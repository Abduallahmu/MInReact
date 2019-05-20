import React from "react";

const DetailsCarTable = props => {
  const { oneCar, onEdit, onDelete, } = props;

  return (
    <div >
      <hr />
          <table >
              <tbody>
                  <tr className="col-4">
                      <th>Model</th>
                      <th>Marke</th>
                      <th>Color</th>
                      <th>ProductionYear</th>
                      <th>Options</th>
                  </tr>
                  <tr className="col-4" key={oneCar.id}>
                      <td>{oneCar.modelName}</td>
                      <td>{oneCar.marke}</td>
                      <td>{oneCar.color}</td>
                      <td>{oneCar.productionYear}</td>
                      <td>
                          <button
                              onClick={() => onEdit(oneCar)}
                              className="btn btn-warning btn-sm m-4"
                          >
                              Edit
            </button>
                          <button
                              onClick={() => onDelete(oneCar.id)}
                              className="btn btn-danger btn-sm m-4"
                          >
                              Delete
            </button>
                      </td>
                  </tr>
              </tbody>
        
      </table>
      <hr />
      
    </div>
  );
};

export default DetailsCarTable;
