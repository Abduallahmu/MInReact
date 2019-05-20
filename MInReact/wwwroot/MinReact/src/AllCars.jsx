import React, { Component } from "react";

const AllCarsTableList = props => {
    const { carData, onEdit, onDetails, onDelete } = props;

    const rows = carData.map((car, index) => (
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
    ));

    return <tbody>{rows}</tbody>;
};

const AllCarsTableName = props => {
    const { onSort } = props;
    return (
        <thead>
            <tr className="col-12">
                <th
                    name="modelName"
                    value="modelName"
                    onClick={() => onSort("Model")}
                >
                    Model
        </th>
                <th name="marke" onClick={() => onSort("Marke")}>
                    Marke
        </th>
                <th name="color" onClick={() => onSort("Color")}>
                    Color
        </th>
                <th name="productionYear" onClick={() => onSort("Production Year")}>
                    Production Year
        </th>
                <th>Options</th>
            </tr>
        </thead>
    );
};

export default class Cars extends Component {
    render() {
        const {
            carData,
            onEdit,
            onDetails,
            onDelete,
            onSort,
            allCarsStyling
        } = this.props;

        const { center, marginBottom, float } = allCarsStyling;
        let style = center + " " + marginBottom + " " + float;

        console.log(center);

        return (
            <table className={style}>

                <AllCarsTableName onSort={onSort} carData={carData} />

                <AllCarsTableList
                    onEdit={onEdit}
                    onDetails={onDetails}
                    onDelete={onDelete}
                    carData={carData}
                />


            </table>
        );
    }
}
