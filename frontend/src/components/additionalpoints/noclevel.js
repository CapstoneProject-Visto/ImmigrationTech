import React from "react";
import NominationCertificate from "./nominationcerificate";
import { Animated } from "react-animated-css";

function NOCLevel(props) {
  {
    console.log(props);
  }
  return (
    <>
      <p>
        8a) Which NOC skill type or level is the job offer? You can use our
        online tool to find out if you don’t know.
      </p>
      <select name="noclevel" onChange={props.noc_level_fn}>
        <option value="select">---SELECT---</option>
        <option value="NOC SKill Type 00">NOC Skill Type 00</option>
        <option value="NOC Skill Type A or B or Any Type 0 other than 00">
          NOC Skill Level A or B or any Type 0 other than 00
        </option>
        <option value="2">NOC Skill Level C or D</option>
      </select>

      {props.noc_level != "" ? (
        <Animated
          animationIn="fadeIn"
          animationInDuration={1000}
          isVisible={true}
        >
          <NominationCertificate
            nominationcertificatefn={props.nominationcertificatefn}
            nominationcertificatestate={props.nominationcertificatestate}
            siblingsincanadafn={props.siblingsincanadafn}
            siblingsincanadastate={props.siblingsincanadastate}
            apiCall={props.apiCall}
          />
        </Animated>
      ) : null}
    </>
  );
}

export default NOCLevel;
