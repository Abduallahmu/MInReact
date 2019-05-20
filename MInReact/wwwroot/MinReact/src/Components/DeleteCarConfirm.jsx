import React, { Component } from "react";

class DeleteCarConfirm extends Component {
  state = {
    oneCar: this.props.oneCar,
    deleteConfirmed: false
  };
  render() {
    const { modelName } = this.state.oneCar;
    return (
      <div classname="container AlignCenter marginBottom60">
        <p> Want you to remove {modelName}?</p>
        <p>
          <strong>This action can NOT be reverted.</strong>
        </p>
        <table>
          <tr>
            <td></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default DeleteCarConfirm;
