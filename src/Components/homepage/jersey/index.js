import React from "react";
import EnrollmentAnimation from "./Animation";
import Enroll from "./enroll";

const Promotion = () => {
  return (
    <div className="promotion_wrapper" style={{ background: "#ffffff" }}>
      <div className="container">
        <EnrollmentAnimation />
        <Enroll />
      </div>
    </div>
  );
};

export default Promotion;
