import React from "react";
import "../App.css";
class indorsement extends React.Component {
  render() {
    return (
      <>
        <form className="p-3">
          <div class="alert alert-info my-3 mb-5" role="alert">
            <div className="row">
              <div className="col-1">
                <i class="fas fa-info-circle fa-2x"></i>
              </div>
              <div className="col-11">
                <strong>
                  <p>
                    Please upload an attachment to be include page of the Write
                  </p>
                </strong>
                <p>
                  You attachment <strong>must</strong> include the signature
                  block of the solicitor, firm or counsel who settled the
                  pleading
                </p>
              </div>
            </div>
          </div>

          <hr />

          <p className="lbl">
            What type of indorsement are you attacking?
            <span style={{ color: "red" }}>*</span>
          </p>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              checked
            />
            <label class="form-check-label" for="exampleRadios1">
              Default radio
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label class="form-check-label" for="exampleRadios2">
              Second default radio
            </label>
          </div>

          <p className="mb-0 mt-3 lbl">
            Attachment<span style={{ color: "red" }}>*</span>
          </p>
          <div className="upload-btn-wrapper">
            <button className="btn  btn-primarys">
              <i class="fas fa-paperclip fa-xs pr-2"></i>Attachment
              <input type="file" />
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default indorsement;
