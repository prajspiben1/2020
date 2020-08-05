import React from "react";

function Card(props) {
  const openmod1 = () => {
    document.getElementById(props.name).style.display = "Block";
  };
  const closemod1 = () => {
    document.getElementById(props.name).style.display = "None";
  };

  return (
    <>
      <div
        className="column large4 medium4 small12 team-card"
        onClick={openmod1}
        id={props.id}
      >
        <img src={props.source} alt={props.name} />
        <p>{props.name}</p>
      </div>
      <div className="modal_container" id={props.name}>
        <div className="modal_content zi3">
          <div className="dialogue_pane large12">
            <div className="modal_title left">{props.name}</div>
            <button
              class="primary_red right ta_center mod_close_btn"
              onClick={closemod1}
            >
              X
            </button>
          </div>
          <div class="page_container">
            <h2>{props.name}</h2>
            <p> {props.content}</p>

            {props.members.map((member) => {
              return (
                <div className="member">
                  <img
                    src={require("../images/teams/" +
                      props.name +
                      "/" +
                      member +
                      ".jpg")}
                    member={member}
                    className="member-img"
                    alt=""
                  />
                  <p>{member}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;