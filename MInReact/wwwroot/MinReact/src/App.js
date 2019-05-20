import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import AllCars from "./AllCars";
import CreateCarForm from "./Components/CreateCar";
import DetailsCarTable from "./Components/DetailsCarTable";
import EditCarForm from "./Components/EditCarForm";
import SortCarTable from "./Components/SortCarTable";
import DeleteCarConfirm from "./Components/DeleteCarConfirm";

const url = "https://localhost:44392/api/ApiCar/";

class App extends Component {
    state = {
        cars: [],
        createCar: false,
        detailsCar: false,
        editCar: false,
        deleteCar: false,
        ascending: true,
        descending: false,
        sortCars: "",
        oneCar: [],
        markes: [],
        marke: ""
    };
    handleCreate = () => {
        console.log("handleCreate called");

        this.setState({ createCar: true });
    };

    handleChange = event => {
        const { name, value } = event.target;
        console.log("handleChange called");

        this.setState({ [name]: value });
    };
    handleMarke = event => {
        const { value } = event.target;
        console.log("handleBrand called");

        this.setState({ marke: value });
    };
    handleCreateComplete = event => {
        event.preventDefault();
        console.log("handleCreateComplete called");
        const target = event.target;

        const car = {
            ModelName: target.modelName.value,
            Marke: this.state.marke,
            Color: target.color.value,
            ProductionYear: target.productionYear.value
        };

        axios
            .post(url, car)
            .then(response => {
                this.setState({ cars: response.data, createCar: false });
            })
            .catch(status => {
                alert(status);
            });
    };

    handleDetails = car => {
        console.log("handleDetails called");
        this.setState({ oneCar: car, detailsCar: true });
    };

    handleEdit = car => {
        console.log("handleEdit called");

        this.setState({ oneCar: car, editCar: true, detailsCar: false });
    };

    handleDelete = () => {
        console.log("handleDelete called");

        this.setState({ deleteCar: true });
    };
    handleDeleteConfirm = id => {
        console.log("handleDeleteConfirm called");
        axios
            .delete(url + id)
            .then(response => {
                let detailsCar = this.state;
                detailsCar = false;

                const cars = this.state.cars.filter(x => x.id !== id);
                this.setState({ cars, detailsCar, deleteCar: false });
            })
            .catch(error => {
                console.log(error);
                return <p>Error. Please try again.</p>;
            });
    };

    handleSort = event => {
        console.log("handleSort called");
        this.setState({ sortCars: [event] });
    };

    handleReturn = () => {
        axios.get(url, { "Content-Type": "application/json" }).then(response => {
            this.setState({
                cars: response.data,
                createCar: false,
                detailsCar: false,
                editCar: false,
                ascending: true,
                descending: false,
                deleteCar: false,
                oneCar: [],
                marke: "",
                sortCars: ""
            });
        });
    };

    componentDidMount() {
        axios
            .get(url, { "Content-Type": "application/json" })
            .then(response => {
                this.setState({ cars: response.data });
            })
            .catch(status => {
                console.log(status);
            });
        axios.get(url + "GetMarkes").then(response => {
            this.setState({ markes: response.data });
        });
    }

    render() {
        const {
            cars,
            markes,
            createCar,
            oneCar,
            detailsCar,
            editCar,
            descending,
            sortCars,
            deleteCar
        } = this.state;

        let allCarsStyling = {
            center: "AlignCenter",
            marginBottom: "marginBottom60"
        };
        let detailsStyling = {
            center: "AlignCenter",
            marginBottom: "marginBottom60"
        };

        if (cars.length > 0) {
            if (createCar === true) {
                return (
                    <CreateCarForm
                        onChange={this.handleMarke}
                        onCreate={this.handleCreateComplete}
                        onReturn={this.handleReturn}
                        markes={markes}
                    />
                );
            }
            if (detailsCar === true) {
                if (window.innerWidth > 1100) {
                    allCarsStyling = {
                        AlignCenter: "",
                        marginBottom: "marginBottom60"
                    };

                    const detailsStyling = {
                        AlignCenter: "",
                        marginBottom: "marginBottom60"
                    };

                    return (
                        <div className="row resetRow">
                            <div className="offset-1 col-5">
                                <h1 className="marginBottom30">All Cars!</h1>
                                <AllCars
                                    allCarsStyling={allCarsStyling}
                                    carData={cars}
                                    onEdit={this.handleEdit}
                                    onDetails={this.handleDetails}
                                    onDelete={this.handleDeleteConfirm}
                                    onSort={this.handleSort}
                                />
                            </div>
                            <div className="col-5 marginLeft30">
                                <h1 className="marginBottom30">
                                    Details of {oneCar.modelName}
                                </h1>
                                <DetailsCarTable
                                    detailsStyling={detailsStyling}
                                    oneCar={oneCar}
                                    onEdit={this.handleEdit}
                                    onDelete={this.handleDeleteConfirm}
                                    onReturn={this.handleReturn}
                                />
                            </div>
                            <div id="w-100">
                                <button
                                    className="Careate2"
                                    onClick={this.handleCreate}
                                >
                                    Create Car
                </button>
                                <button
                                    className="Careate2"
                                    onClick={this.handleReturn}
                                >
                                    Return
                </button>
                            </div>
                        </div>
                    );
                }
                return (
                    <div>
                        <h1>Details of {oneCar.modelName}</h1>
                        <hr className="col-6" />
                        <DetailsCarTable
                            detailsStyling={detailsStyling}
                            oneCar={oneCar}
                            onEdit={this.handleEdit}
                            onDelete={this.handleDeleteConfirm}
                        />
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={this.handleReturn}
                        >
                            Return
            </button>
                    </div>
                );
            }
            if (editCar === true) {
                return (
                    <div>
                        <EditCarForm
                            oneCar={oneCar}
                            brands={markes}
                            onCreate={this.handleCreateComplete}
                            onReturn={this.handleReturn}
                        />
                    </div>
                );
            }

            if (deleteCar === true) {
                return (
                    <div classname="App">
                        <DeleteCarConfirm
                            oneCar={oneCar}
                            onReturn={this.handleReturn}
                            handleDeleteConfirm={this.handleDeleteConfirm}
                        />
                    </div>
                );
            }

            if (sortCars !== "") {
                return (
                    <div className="App">
                        <h1>Sorted by {sortCars}!</h1>
                        <SortCarTable
                            cars={cars}
                            onEdit={this.handleEdit}
                            onDetails={this.handleDetails}
                            onDelete={this.handleDeleteConfirm}
                            onSort={this.handleSort}
                            sortCars={sortCars}
                            descending={descending}
                        />
                        <button
                            className="btn btn-primary btn-sm marginBottom5"
                            onClick={this.handleCreate}
                        >
                            Create Car
            </button>
                        <div>
                            <button
                                className="btn btn-primary btn-sm "
                                onClick={this.handleReturn}
                            >
                                Reset Sort
              </button>
                        </div>
                    </div>
                );
            }

            return (
                <div className="App">
                    <h1>All Cars</h1>
                    <AllCars
                        allCarsStyling={allCarsStyling}
                        carData={cars}
                        onEdit={this.handleEdit}
                        onDetails={this.handleDetails}
                        onDelete={this.handleDeleteConfirm}
                        onSort={this.handleSort}
                    />
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={this.handleCreate}
                    >
                        Create Car
          </button>
                </div>
            );
        } else {
            return (
                <div className="container App errorMessage">
                    <h2>
                        Error. Try again
                        later. Thank you.
          </h2>
                </div>
            );
        }
    }
}

export default App;
