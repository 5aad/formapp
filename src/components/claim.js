import React from "react";
import "../App.css";

class claim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideWorkCoverList: true,
      hideActingAgent: true,
      caseDivision: [],
      caseList: [],
      causeAction: [],
      courtLocation: [
        "select...",
        "Bairnsdale",
        "Ballarat",
        "Bendigo",
        "Geelong",
        "Horsham",
        "Latrobe Valley",
        "Melbourne",
        "Mildura",
        "Sale",
        "Shepparton",
        "Wangaratta",
        "Warrnambool",
        "Wodonga",
      ],
      selectedCaseDivision: "select...",
      selectedCaseList: "select...",
    };
    this.changeCaseDivision = this.changeCaseDivision.bind(this);
    this.changeCaseList = this.changeCaseList.bind(this);
  }

  componentDidMount() {
    this.setState({
      caseDivision: [
        // {
        //   name:"select...",
        //   caseList:[
        //     {
        //       name: "choose Case Division..",
        //       causeAction: ["choose Case List.."]
        //     }
        //   ]
        // },
        {
          name: "Commercial Division",
          caseList: [
            {
              name: "Banking and Finance List",
              causeAction: ["Banking and Finance Case"],
            },
            {
              name: "Building List",
              causeAction: [
                "B&C Industry Sec of Payments",
                "Commercial Arbitration Act",
                "Damages",
                "Monies Outstanding",
                "Other",
              ],
            },
            {
              name: "Expedited List",
              causeAction: ["Expedited Commercial Case"],
            },
            {
              name: "General List",
              causeAction: [
                "Breach Agreement/Monies Owing",
                "Breach of Consumer Legislation",
                "Corporations Law/Pref Payment",
                "Customs & Excise Prosecutions",
                "Detinue & Conversion",
                "Goods Sold & Delivered",
                "Hire of Goods & Chattels",
                "Insurance",
                "Landloard & Tenant",
                "Rate Appeal",
                "Texation",
                "Trusts",
                "Work & Labour Done",
                "other",
              ],
            },
          ],
        },
        {
          name: "Common Law Division",
          caseList: [
            {
              name: "Applications List",
              causeAction: [
                "Applic Change of Name",
                "Applic Limit of Actions Act",
                "0.32 Prelim/nonparty Discovery",
                "S.6 Choice of Law(LP)Act 1993",
                "Other",
              ],
            },
            { name: "Defamation List", causeAction: ["Defamation"] },
            {
              name: "Family Property",
              causeAction: [
                "Domestic Partner Prop Dispute",
                "Testators Family Maintaince",
              ],
            },
            {
              name: "General List",
              causeAction: [
                "Damages(Oth than death or PI)",
                "Disability Claim Rejection",
                "Personal Injury-Assault",
                "Personal Injury-Dog Bite",
                "Personal Injury--Industrial Acc",
                "Personal Injury-Motor V Accid",
                "Personal Injury-Other",
                "Personal Injury-Product Liab",
                "Personal Injury-School Acc",
                "Personal Injury-Sexual Assault",
                "Personal Injury-Slip/Occuplia",
                "Police Tort Claim",
                "Professional Negligence",
                "Property Damage",
                "Public Liability",
                "S138 Acc Comp Act-Indemnity",
                "S369 WIRC Act-Indemnity",
                "Seamens Compensation",
                "Other",
              ],
            },
            { name: "Medical List", causeAction: ["Medical Negligence"] },
            {
              name: "WorkCover List",
              causeAction: ["WorkCover(State Benefits Claim)"],
            },
          ],
        },
      ],
    });
  }

  changeCaseDivision(event) {
    this.setState({ selectedCaseDivision: event.target.value });
    if (event.target.value !== "") {
      this.setState({
        caseList: this.state.caseDivision.find(
          (caseDiv) => caseDiv.name === event.target.value
        ).caseList,
      });
    }
  }

  changeCaseList(event) {
    if (event.target.value === "WorkCover List") {
      this.setState({
        hideWorkCoverList: false,
      });
    } else {
      this.setState({
        hideWorkCoverList: true,
      });
    }

    this.setState({ selectedCaseList: event.target.value });
    const clist = this.state.caseDivision.find(
      (caseDiv) => caseDiv.name === this.state.selectedCaseDivision
    ).caseList;

    if (event.target.value !== "") {
      this.setState({
        causeAction: clist.find(
          (caseLis) => caseLis.name === event.target.value
        ).causeAction,
      });
    }
  }

  handleAgentCheck = () => {
    this.setState({
      hideActingAgent: !this.state.hideActingAgent,
    });
  };

  render() {
    return (
      <form className="p-3">
        <div className="form-group" style={{ width: "60%" }}>
          <label className="lbl">
            Your Reference <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g ABXYZ:12345"
          />
        </div>

        <div className="form-group" style={{ width: "60%" }}>
          <label className="lbl">
            Case Description <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g SMITH v JONES & anor"
          />
        </div>

        <div className="form-row">
          <div className="col-auto" style={{ width: "30%" }}>
            <label className="lbl">
              Case Division <span style={{ color: "red" }}>*</span>
            </label>
            <select
              placeholder="select.."
              className="form-control"
              value={this.state.selectedCaseDivision}
              onChange={this.changeCaseDivision}
              id="exampleFormControlSelect1"
            >
              <option value="">select..</option>
              {this.state.caseDivision.map((e, key) => {
                return <option key={key}>{e.name}</option>;
              })}
            </select>
          </div>

          <div className="col-auto" style={{ width: "30%" }}>
            <label className="lbl">
              Case List <span style={{ color: "red" }}>*</span>
            </label>
            <select
              placeholder="select.."
              className="form-control"
              value={this.state.selectedCaseList}
              onChange={this.changeCaseList}
              id="exampleFormControlSelect1"
            >
              <option value="">select...</option>
              {this.state.caseList.map((e, key) => {
                return <option key={key}>{e.name}</option>;
              })}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="lbl">
            Cause of Action <span style={{ color: "red" }}>*</span>
          </label>

          <div
            hidden={this.state.hideWorkCoverList}
            class="alert alert-warning my-3 mb-5"
            role="alert"
          >
            <div className="row">
              <div className="col-1">
                <i class="fas fa-exclamation-triangle fa-2x"></i>
              </div>
              <div className="col-11">
                <strong>
                  <p>
                    The WorkCover list is for claims of statutory benefits only.
                  </p>
                </strong>
                <p>
                  The WorkCover list exclues Serious Injury Applications and
                  claims for damages for Workplace Injuries.
                </p>
              </div>
            </div>
          </div>

          <select
            style={{ width: "60%" }}
            className="form-control"
            id="exampleFormControlSelect1"
          >
            <option>select...</option>
            {this.state.causeAction.map((e, key) => {
              return <option key={key}>{e}</option>;
            })}
          </select>
        </div>

        <div className="form-group" style={{ width: "60%" }}>
          <label className="lbl">
            Court Location <span style={{ color: "red" }}>*</span>
          </label>
          <select className="form-control" id="exampleFormControlSelect1">
            {this.state.courtLocation.map((p) => (
              <option key="p">{p}</option>
            ))}
          </select>
        </div>

        <p className="lbl">
          Is a Jury required for this Case?{" "}
          <span style={{ color: "red" }}>*</span>
        </p>

        <div className="form-check form-check-inline ">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            Yes
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
            No
          </label>
        </div>

        <hr />

        <div className="form-row">
          <div className="col-auto">
            <p className="lbl">Claim Amount</p>
            <label className="sr-only" for="inlineFormInputGroup">
              Username
            </label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">@</div>
              </div>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroup"
                placeholder="Username"
              />
            </div>
          </div>

          <div className="col-auto">
            <div className="form-check mb-2">
              <p className="lbl">Claiming a Debt Only</p>
              <input
                className="form-check-input"
                type="checkbox"
                id="autoSizingCheck"
              />
              <label className="form-check-label" for="autoSizingCheck">
                I am Claiming a debt only
              </label>
            </div>
          </div>
        </div>

        <hr />

        <div className="form-check mb-2">
          <p className="lbl">Acting as the agent</p>
          <input
            className="form-check-input"
            type="checkbox"
            id="autoSizingCheck"
            onClick={this.handleAgentCheck}
          />
          <label className="form-check-label" for="autoSizingCheck">
            I am acting as the agent for another Firm/Solicitor
          </label>
        </div>
        <div hidden={this.state.hideActingAgent}>
          <h4 className="my-4">Principal Firm/Solicitor Details</h4>

          <div className="form-group" style={{ width: "60%" }}>
            <label className="lbl">
              Principal Firm/Solicitor Name{" "}
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g Jones and Green Legal Pty.Ltd."
            />
          </div>

          <p className="lbl">
            Is this a Law Firm or Solicitor?{" "}
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
              Firm
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
              Solicitor
            </label>
          </div>

          <div className="form-check mb-2 mt-5">
            <p className="lbl">Principal Firm/Solicitor Location</p>
            <input
              className="form-check-input"
              type="checkbox"
              id="autoSizingCheck"
            />
            <label className="form-check-label" for="autoSizingCheck">
              The Principal Firm/Solicitor is located outside of Australia
            </label>
          </div>

          <p className="lbl">
            Address Type <span style={{ color: "red" }}>*</span>
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
              Street Address
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
              Post Office Box
            </label>
          </div>

          <div className="form-group my-3" style={{ width: "60%" }}>
            <label className="lbl">
              Property/Building Name <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-row">
            <div className="form-group col-auto" style={{ width: "25%" }}>
              <label className="lbl">Floor/Unit</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g U 5"
              />
            </div>

            <div className="form-group col-auto" style={{ width: "25%" }}>
              <label className="lbl">Street Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g 100"
              />
            </div>

            <div className="form-group col-auto" style={{ width: "25%" }}>
              <label className="lbl">Street Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g Main"
              />
            </div>

            <div className="form-group col-auto" style={{ width: "25%" }}>
              <label className="lbl">Street Type</label>
              <input
                type="text"
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
                type="text"
                className="form-control"
                placeholder="e.g Main"
              />
            </div>

            <div className="form-group col-auto">
              <label className="lbl">
                State <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g Main"
              />
            </div>

            <div className="form-group col-auto">
              <label className="lbl">
                Postcode <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g Main"
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default claim;
