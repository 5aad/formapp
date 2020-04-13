import React from "react";
import "./App.css";
import Claim from "./components/claim";
import Plaintiff from "./components/plaintiff";
import Indorsement from "./components/indorsement";
import Defandent from "./components/defandent";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTab: "Claim",
      links: [
        { link: "#Claim-Details", tab: "Claim" },
        { link: "#Plaintiff", tab: "Plaintiff" },
        { link: "#Defendant", tab: "Defendant" },
        { link: "#Indorsement", tab: "Indorsement" },
      ],
      increment: 0,
      disableBack: true,
      disableNext: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick = (value) => {
    let inc = this.state.increment;
    console.log(value, inc);
    if (value === "back") {
      if (this.state.increment === 0) {
        this.setState({
          disableBack: true,
          disableNext: false,
          selectedTab: this.state.links[0].tab,
        });
      } else {
        this.setState({
          disableBack: false,
          disableNext: false,
          increment: this.state.increment - 1,
          selectedTab: this.state.links[this.state.increment - 1].tab,
        });
      }
    } else {
      if (this.state.increment === this.state.links.length - 1) {
        this.setState({
          disableNext: true,
          disableBack: false,
        });
      } else {
        this.setState({
          increment: this.state.increment + 1,
          disableBack: false,
          selectedTab: this.state.links[inc + 1].tab,
        });
      }
    }
  };

  handleClick = (value) => {
    this.setState({
      selectedTab: value,
    });
    let lengt = this.state.links.length;
    if (value.toLowerCase() === this.state.links[0].tab.toLowerCase()) {
      this.setState({
        disableBack: true,
        disableNext: false,
        increment: 0,
      });
    } else if (
      value.toLowerCase() === this.state.links[lengt - 1].tab.toLowerCase()
    ) {
      this.setState({
        disableBack: false,
        disableNext: true,
        increment: lengt - 1,
      });
    } else {
      this.setState({
        disableBack: false,
        disableNext: false,
      });
    }
  };
  handleButton = () => {};

  render() {
    return (
      <div className="App-header">
        <ul className="nav nav-pills" id="pills-tab" role="tablist">
          {this.state.links.map((item) => (
            <li className="nav-item">
              <a
                onClick={() => this.handleClick(item.tab)}
                className={`nav-link ${
                  this.state.selectedTab === item.tab ? "active" : ""
                }`}
                id="pills-claim-tab"
                data-toggle="pill"
                href={item.link}
                role="tab"
                aria-controls="pills-claim"
                aria-selected="true"
              >
                {item.tab}
              </a>
            </li>
          ))}
        </ul>
        <div className="tab-content" id="pills-tabContent">
          {this.state.selectedTab === "Claim" ? (
            <div
              className="tab-pane fade show active sec  "
              id="pills-claim-tab"
              role="tabpanel"
              aria-labelledby="pills-claim-tab"
            >
              <Claim />
            </div>
          ) : (
            <></>
          )}
          {this.state.selectedTab === "Plaintiff" ? (
            <div
              className="tab-pane fade show active sec"
              id="pills-plaintiff-tab"
              role="tabpanel"
              aria-labelledby="pills-plaintiff-tab"
            >
              <Plaintiff />
            </div>
          ) : (
            <></>
          )}
          {this.state.selectedTab === "Defendant" ? (
            <div
              className="tab-pane fade show active sec"
              id="pills-defendant-tab"
              role="tabpanel"
              aria-labelledby="pills-defendant-tab"
            >
              <Defandent />
            </div>
          ) : (
            <></>
          )}

          {this.state.selectedTab === "Indorsement" ? (
            <div
              className="tab-pane fade show active sec"
              id="pills-indorsement-tab"
              role="tabpanel"
              aria-labelledby="pills-indorsement-tab"
            >
              <Indorsement />
            </div>
          ) : (
            <></>
          )}
          <div className="d-flex flex-row-reverse my-2">
            <button className="btn  btn-primarys">
              <i class="fas fa-check fa-xs pr-2"></i>Review
            </button>
            <button
              onClick={() => this.handleButtonClick("next")}
              className="btn  btn-primarys mx-1"
              disabled={this.state.disableNext}
            >
              Next<i class="fas fa-chevron-right fa-xs pl-2"></i>
            </button>
            <button
              onClick={() => this.handleButtonClick("back")}
              className="btn  btn-primarys"
              disabled={this.state.disableBack}
            >
              <i class="fas fa-chevron-left fa-xs pr-2"></i>Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
