import React, { Component } from "react";
import Table from "./Table";
import { connect } from "react-redux";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstName: "",
        lastName: "",
        emailAddress: "",
        contactNumber: "",
        address: "",
        image: ""
      },
      formErrorMessage: {
        firstName: "",
        lastName: "",
        emailAddress: "",
        contactNumber: "",
        address: "",
        image: ""
      },
      formValid: {
        firstName: false,
        lastName: false,
        emailAddress: false,
        contactNumber: false,
        address: false,
        image: false,
        buttonActive: false
      },
      successMessage: "",
      errorMessage: "",
      reset: false
    };
  }

  handleChange = event => {
    var value = event.target.value;
    var fieldname = event.target.name;
    var form = this.state.form;

    form[fieldname] = value;

    this.setState({ form: form });
    this.validateField(fieldname, value);
  };

  imageHandler = event => {
    var value = URL.createObjectURL(event.target.files[0]);
    // console.log(event.target.files[0].name);
    var form = { ...this.state.form };
    form.image = value;
    this.setState({ form: form });
    this.validateField("image", event.target.files[0].name);
  };

  validateField = (fieldName, value) => {
    var formErrorMessage = this.state.formErrorMessage;
    var formValid = this.state.formValid;

    if (fieldName === "firstName") {
      if (value === "") {
        formErrorMessage.firstName = "field required";
        formValid.firstName = false;
      } else if (value.match(/^[A-z]{1,15}$/)) {
        formErrorMessage.firstName = "";
        formValid.firstName = true;
      } else {
        formErrorMessage.firstName =
          "First name should be an alphabetical string with 1-15 characters ";
        formValid.firstName = false;
      }

      this.setState({ formErrorMessage: formErrorMessage });
      this.setState({ formValid: formValid });
    } else if (fieldName === "lastName") {
      if (value === "") {
        formErrorMessage.lastName = "field required";
        formValid.lastName = false;
      } else if (value.match(/^[A-z]{1,15}$/)) {
        formErrorMessage.lastName = "";
        formValid.lastName = true;
      } else {
        formErrorMessage.lastName =
          "Last name should be an alphabetical string with 1-15 characters";
        formValid.lastName = false;
      }

      this.setState({ formErrorMessage: formErrorMessage });
      this.setState({ formValid: formValid });
    } else if (fieldName === "emailAddress") {
      if (value === "") {
        formErrorMessage.emailAddress = "field required";
        formValid.emailAddress = false;
      } else if (
        value.match(
          /^[\w+\-.]+@(gmail|yahoo|hotmail|infosys|outlook)+\.(com|in|co.in|co.uk)$/i
        )
      ) {
        formErrorMessage.emailAddress = "";
        formValid.emailAddress = true;
      } else {
        formErrorMessage.emailAddress = "Enter a valid email address";
        formValid.emailAddress = false;
      }

      this.setState({ formErrorMessage: formErrorMessage });
      this.setState({ formValid: formValid });
    } else if (fieldName === "contactNumber") {
      if (value === "") {
        formErrorMessage.contactNumber = "field required";
        formValid.contactNumber = false;
      } else if (value.match(/^[1-9][0-9]{9}$/)) {
        formErrorMessage.contactNumber = "";
        formValid.contactNumber = true;
      } else {
        formErrorMessage.contactNumber =
          "Contact Number should be a 10-digit number";
        formValid.contactNumber = false;
      }

      this.setState({ formErrorMessage: formErrorMessage });
      this.setState({ formValid: formValid });
    } else if (fieldName === "address") {
      if (value === "") {
        formErrorMessage.address = "Enter valid address";
        formValid.address = false;
      } else if (value.match(/^[A-z0-9 ]{1,200}$/)) {
        formErrorMessage.address = "";
        formValid.address = true;
      } else {
        formErrorMessage.address = "Enter valid address";
        formValid.address = false;
      }

      this.setState({ formErrorMessage: formErrorMessage });
      this.setState({ formValid: formValid });
    } else if (fieldName === "image") {
      let name = value.split(".");
      if (name[1] === "gif") {
        console.log("aagya");
      }
      //   console.log(name[1]);
      if (value === "") {
        formErrorMessage.image = "Invalid File";
        formValid.image = false;
      } else if (name[1] === "png" || name[1] === "jpg" || name[1] === "jpeg") {
        formErrorMessage.image = "";
        formValid.image = true;
      } else {
        formErrorMessage.image = "Invalid File";
        formValid.image = false;
      }

      this.setState({ formErrorMessage: formErrorMessage });
      this.setState({ formValid: formValid });
    }
    formValid.buttonActive =
      formValid.firstName &&
      formValid.lastName &&
      formValid.emailAddress &&
      formValid.contactNumber &&
      formValid.address &&
      formValid.image;

    this.setState({ formValid: formValid });
  };

  handleSubmit = event => {
    event.preventDefault();
    var formobj = {
      firstName: this.state.form.firstName ? this.state.form.firstName : "",
      lastName: this.state.form.lastName ? this.state.form.lastName : "",
      emailAddress: this.state.form.emailAddress
        ? this.state.form.emailAddress
        : "",
      contactNumber: this.state.form.contactNumber
        ? this.state.form.contactNumber
        : "",
      address: this.state.form.address ? this.state.form.address : "",
      image: this.state.form.image ? this.state.form.image : ""
    };
    console.log("home", formobj.image);
    this.props.submit(formobj);

    let newObj = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      contactNumber: "",
      address: "",
      image: ""
    };
    this.setState({ form: newObj });
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ backgroundColor: "#95F9E8" }}>
          <div className="text-center" style={{ textAlign: "center" }}>
            <strong className="text-success " style={{ fontSize: "20px" }}>
              FORM
            </strong>
          </div>
          <div className="Form">
            <div className="container-fluid row">
              <div className="col-md-6 offset-md-3">
                <br />
                <div
                  className="card border-success"
                  style={{
                    borderWidth: "5px",
                    borderRadius: "15px",
                    backgroundColor: "#DEF1F5"
                  }}
                >
                  <div className="card-body" style={{ borderRadius: "15px" }}>
                    <form>
                      <div className="text-danger">
                        {"*All fields are mandatory"}
                      </div>
                      <br />
                      <div className="form-group">
                        <label style={{ color: "green" }}>
                          First Name<span className="text-danger">*</span>:
                        </label>
                        <div>
                          <input
                            className="form-control"
                            value={this.reset ? "" : this.state.form.firstName}
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            onChange={this.handleChange}
                          />

                          <span className="text-danger" name="firstName">
                            {this.state.formErrorMessage.firstName}
                          </span>
                        </div>
                      </div>

                      <div className="form-group ">
                        <label style={{ color: "green" }}>
                          Last Name<span className="text-danger">*</span>:
                        </label>
                        <div>
                          <input
                            className="form-control"
                            value={this.state.form.lastName}
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            onChange={this.handleChange}
                          />
                          <span className="text-danger" name="lastName">
                            {this.state.formErrorMessage.lastName}
                          </span>
                        </div>
                      </div>

                      <div className="form-group ">
                        <label style={{ color: "green" }}>Picture:</label>

                        <input
                          className="form-control"
                          type="file"
                          onChange={this.imageHandler}
                          accept="image/*"
                        ></input>
                        <span className="text-danger" name="image">
                          {this.state.formErrorMessage.image}
                        </span>
                      </div>

                      <div className="form-group ">
                        <label style={{ color: "green" }}>
                          Number<span className="text-danger">*</span>:
                        </label>
                        <div>
                          <input
                            className="form-control"
                            value={this.state.form.contactNumber}
                            type="text"
                            placeholder="Contact Number"
                            name="contactNumber"
                            onChange={this.handleChange}
                          />
                          <span className="text-danger" name="contactNumber">
                            {this.state.formErrorMessage.contactNumber}
                          </span>
                        </div>
                      </div>

                      <div className="form-group ">
                        <label style={{ color: "green" }}>
                          ID<span className="text-danger">*</span>:
                        </label>
                        <div>
                          <input
                            className="form-control"
                            value={this.state.form.emailAddress}
                            type="email"
                            placeholder="Email"
                            name="emailAddress"
                            onChange={this.handleChange}
                          />
                          <span className="text-danger" name="emailAddress">
                            {this.state.formErrorMessage.emailAddress}
                          </span>
                        </div>
                      </div>

                      <div className="form-group ">
                        <label style={{ color: "green" }}>
                          Address<span className="text-danger">*</span>:
                        </label>
                        <div>
                          <textarea
                            className="form-control"
                            type="textarea"
                            value={this.state.form.address}
                            placeholder="Address"
                            name="address"
                            onChange={this.handleChange}
                            style={{ lineHeight: "12px" }}
                          />
                          <span className="text-danger" name="address">
                            {this.state.formErrorMessage.address}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={this.handleSubmit}
                        className="btn form-control"
                        style={{ backgroundColor: "#38E638" }}
                        disabled={!this.state.formValid.buttonActive}
                        name="form"
                      >
                        <strong className="text-white">Submit</strong>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
        <div>
          <Table />
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submit: formobj => dispatch({ type: "SUBMIT", payload: { ...formobj } })
  };
};

Form = connect(null, mapDispatchToProps)(Form);

export default Form;
