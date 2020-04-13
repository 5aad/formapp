import React from "react";
import {
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
} from "mdbreact";
class defandent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { values: [], open: true, modal6: false, modal7: false };
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(e) {
    this.setState({ open: !this.state.open });
  }

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  createForm() {
    return this.state.values.map((el, i) => (
      <div key={i}>
        <div class="card ">
          <div class="card-header row m-0" id="headingOne">
            <div className="col-8 text-left">
              <p class="mb-0">
                <i
                  class="fas fa-angle-down"
                  onClick={(e) => this.togglePanel(e)}
                  style={{ cursor: "pointer" }}
                ></i>{" "}
                Defandent(s)
              </p>
            </div>
            <div className="col-4 text-right">
              <button
                className="text-right btn btn-light"
                onClick={this.toggle(6)}
              >
                <i class="fas fa-times pr-2"></i>Remove
              </button>
            </div>
          </div>
        </div>
        {this.state.open ? (
          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <form className="p-3">
                <p className="lbl">
                  Is a Jury required for this Case?{" "}
                  <span style={{ color: "red" }}>*</span>
                </p>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    Individual
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    Organization
                  </label>
                </div>

                <div className="form-row mt-3">
                  <div className="form-group col-auto" style={{ width: "30%" }}>
                    <label className="lbl">
                      First Given Name <span style={{ color: "red" }}>*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="form-group col-auto" style={{ width: "30%" }}>
                    <label className="lbl">Middle Name(s)</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>

                <div className="form-group" style={{ width: "60%" }}>
                  <label className="lbl">
                    Family Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>

                <div className="form-group mt-5" style={{ width: "60%" }}>
                  <label className="lbl">Allias</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group" style={{ width: "60%" }}>
                  <label className="lbl">Former Name</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="form-group mt-5" style={{ width: "60%" }}>
                  <label className="lbl">Trading Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group" style={{ width: "60%" }}>
                  <label className="lbl">Former Trading Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group mb-5" style={{ width: "30%" }}>
                  <label className="lbl">ABN</label>
                  <input type="text" className="form-control" />
                </div>

                <hr />

                <h4>Representative Capacity</h4>

                <div className="form-group mt-5" style={{ width: "60%" }}>
                  <label className="lbl">As executor of the estate of</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group" style={{ width: "60%" }}>
                  <label className="lbl">As administrator of</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group" style={{ width: "60%" }}>
                  <label className="lbl">As trustee of</label>
                  <input type="text" className="form-control" />
                </div>

                <hr />

                <h4 className="mt-4">Address Details</h4>

                <div className="form-check mb-2 mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="autoSizingCheck"
                  />
                  <label className="form-check-label" for="autoSizingCheck">
                    The Principal Firm/Solicitor is located outside of Australia
                  </label>
                </div>

                <div className="form-group my-3" style={{ width: "50%" }}>
                  <label className="lbl">
                    Property/Building Name{" "}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="email" className="form-control" />
                </div>

                <div className="form-row">
                  <div className="form-group col-auto" style={{ width: "25%" }}>
                    <label className="lbl">Floor/Unit</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="e.g U 5"
                    />
                  </div>

                  <div className="form-group col-auto" style={{ width: "25%" }}>
                    <label className="lbl">Street Number</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="e.g 100"
                    />
                  </div>

                  <div className="form-group col-auto" style={{ width: "25%" }}>
                    <label className="lbl">Street Name</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="e.g Main"
                    />
                  </div>

                  <div className="form-group col-auto" style={{ width: "25%" }}>
                    <label className="lbl">Street Type</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="e.g Avenue"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-auto">
                    <label className="lbl">
                      Suburb <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="e.g Main"
                    />
                  </div>

                  <div className="form-group col-auto">
                    <label className="lbl">
                      State <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="e.g Main"
                    />
                  </div>

                  <div className="form-group col-auto">
                    <label className="lbl">
                      Postcode <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="e.g Main"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    ));
  }

  handleChange(i, event) {
    let values = [...this.state.values];
    values[i] = event.target.value;
    this.setState({ values });
  }

  addClick() {
    this.setState((prevState) => ({ values: [...prevState.values, ""] }));
  }

  removeClick(i) {
    let values = [...this.state.values];
    values.splice(i, 1);
    this.setState({ values });
  }
  render() {
    return (
      <>
        <div className="p-4">
          <div class="alert alert-info my-3 mb-5" role="alert">
            <div className="row">
              <div className="col-1">
                <i class="fas fa-info-circle fa-2x"></i>
              </div>
              <div className="col-11">
                <strong>
                  <p>
                    Add/remove defendants as required below. You may add up to
                    30 defendants.
                  </p>
                </strong>
                <p>
                  if you need to associate more than 30 defendants with this
                  case, please contact the CITEC Confirm Service Center on 1800
                  773 773 or by email at{" "}
                  <a href="mailto:confirm@citec.com.au" class="alert-link">
                    confirm@citec.com.au
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card ">
          <div class="card-header" id="headingOne">
            <p class="mb-0">
              <i
                class="fas fa-angle-down"
                onClick={(e) => this.togglePanel(e)}
                style={{ cursor: "pointer" }}
              ></i>{" "}
              Defandent(s)
            </p>
          </div>
        </div>
        {this.state.open ? (
          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <form className="p-3">
                <p className="lbl">
                  Is a Jury required for this Case?{" "}
                  <span style={{ color: "red" }}>*</span>
                </p>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    Individual
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    Organization
                  </label>
                </div>

                <div className="form-row mt-3">
                  <div className="form-group col-auto" style={{ width: "30%" }}>
                    <label className="lbl">
                      First Given Name <span style={{ color: "red" }}>*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="form-group col-auto" style={{ width: "30%" }}>
                    <label className="lbl">Middle Name(s)</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>

                <div className="form-group" style={{ width: "60%" }}>
                  <label className="lbl">
                    Family Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>

                <div className="form-group mt-5" style={{ width: "60%" }}>
                  <label className="lbl">Allias</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group" style={{ width: "60%" }}>
                  <label className="lbl">Former Name</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="form-group mt-5" style={{ width: "60%" }}>
                  <label className="lbl">Trading Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group" style={{ width: "60%" }}>
                  <label className="lbl">Former Trading Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group mb-5" style={{ width: "30%" }}>
                  <label className="lbl">ABN</label>
                  <input type="text" className="form-control" />
                </div>

                <hr />

                <h4>Representative Capacity</h4>

                <div className="form-group mt-5" style={{ width: "60%" }}>
                  <label className="lbl">As executor of the estate of</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group" style={{ width: "60%" }}>
                  <label className="lbl">As administrator of</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group" style={{ width: "60%" }}>
                  <label className="lbl">As trustee of</label>
                  <input type="text" className="form-control" />
                </div>

                <hr />

                <h4 className="mt-4">Address Details</h4>

                <div className="form-check mb-2 mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="autoSizingCheck"
                  />
                  <label className="form-check-label" for="autoSizingCheck">
                    The Principal Firm/Solicitor is located outside of Australia
                  </label>
                </div>

                <div className="form-group my-3" style={{ width: "50%" }}>
                  <label className="lbl">
                    Property/Building Name{" "}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="email" className="form-control" />
                </div>

                <div className="form-row">
                  <div className="form-group col-auto" style={{ width: "25%" }}>
                    <label className="lbl">Floor/Unit</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="e.g U 5"
                    />
                  </div>

                  <div className="form-group col-auto" style={{ width: "25%" }}>
                    <label className="lbl">Street Number</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="e.g 100"
                    />
                  </div>

                  <div className="form-group col-auto" style={{ width: "25%" }}>
                    <label className="lbl">Street Name</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="e.g Main"
                    />
                  </div>

                  <div className="form-group col-auto" style={{ width: "25%" }}>
                    <label className="lbl">Street Type</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="e.g Avenue"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-auto">
                    <label className="lbl">
                      Suburb <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="e.g Main"
                    />
                  </div>

                  <div className="form-group col-auto">
                    <label className="lbl">
                      State <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="e.g Main"
                    />
                  </div>

                  <div className="form-group col-auto">
                    <label className="lbl">
                      Postcode <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="e.g Main"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        ) : null}
        {this.createForm()}
        <div
          class="card "
          onClick={this.addClick.bind(this)}
          style={{ cursor: "pointer" }}
        >
          <div class="card-header" id="headingOne">
            <p class="mb-0 text-center">
              <i class="fas fa-plus pr-2"></i>Add Another Defandent
            </p>
          </div>
        </div>

        <MDBModal
          isOpen={this.state.modal6}
          toggle={this.toggle(6)}
          side
          position="top-right"
        >
          <MDBModalHeader toggle={this.toggle(6)}>
            Remove Plantiff
          </MDBModalHeader>
          <MDBModalBody>
            <strong>This action will remove Plantiff from the case.</strong>

            <p className="pt-2">
              Any data you have entered for this party will be cleared. This
              action cannot be undone
            </p>
          </MDBModalBody>
          <MDBModalFooter style={{ backgroundColor: "lightGrey" }}>
            <MDBBtn
              color="#1e88e5 blue darken-1"
              className="btn-primarys"
              size="sm"
              onClick={this.toggle(6)}
            >
              No, Keep this party
            </MDBBtn>
            <MDBBtn
              color="#1e88e5 blue darken-1"
              className="btn-primarys"
              size="sm"
              onClick={this.removeClick.bind(this, this.i)}
            >
              Yes, remove this party
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </>
    );
  }
}
export default defandent;
