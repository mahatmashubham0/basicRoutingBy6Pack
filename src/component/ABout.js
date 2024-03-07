import React from "react";
import "../style/about.css";

const ABout = () => {
  return (
    <div className="about">
      <h1>Send Your Message</h1>
      <form>
        <div>
          <label>Email:</label>
          <input type="text" name="name" className="text" />
        </div>
        <div>
          <label>Message:</label>
          <input type="textare" name="name" className="text" />
        </div>
        <input type="submit" value="Submit" className="btn"/>
      </form>
    </div>
  );
};

export default ABout;
