import React, { Component } from "react";
import { connect } from "react-redux";

export default class Table extends Component {
  //use this.props.fieldname to access the value;

  render() {
    return this.props.tableArray.length > 0 ? (
      <div className="Table">
        <br />
        <div className="container-fluid">
          <table
            className="table table-striped  table-bordered table-hover"
            style={{ borderWidth: "2px", borderColor: "#A5F3F1" }}
          >
            <thead style={{ backgroundColor: "#DEF1F5" }}>
              <tr>
                <th style={{ color: "green" }}>First Name</th>
                <th style={{ color: "green" }}>Last Name</th>
                <th style={{ color: "green" }}>Picture</th>
                <th style={{ color: "green" }}>Contact</th>
                <th style={{ color: "green" }}>Email</th>
                <th style={{ color: "green" }}>Address</th>
              </tr>
            </thead>
            <tbody>
              {this.props.tableArray.map(obj => {
                console.log(obj.image);
                return (
                  <tr>
                    <td>{obj.firstName}</td>
                    <td>{obj.lastName}</td>
                    <td>
                      <img
                        src={obj.image}
                        style={{ height: "50px", width: "150px" }}
                        alt="Not found"
                      />
                    </td>
                    <td>{obj.contactNumber}</td>
                    <td>{obj.emailAddress}</td>
                    <td>{obj.address}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    ) : null;
  }
}

function mapStateToProps(state) {
  return {
    tableArray: [...state]
  };
}
Table = connect(mapStateToProps)(Table);
