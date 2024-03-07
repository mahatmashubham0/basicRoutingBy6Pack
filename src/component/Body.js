import React from "react";
import body2 from "../assets/img2.jfif";
// import body3 from "../assets/img1.jfif";
import "../style/body.css";

const Body = () => {
  return (
    <>
      <div className="body">
        <main>
          <h1>Food Store</h1>
          <p>Prapare All Type Of Meal</p>
        </main>
      </div>
      <div className="body2">
        <img src={body2} alt="somthing" />
        <main>
          <h1>Info About Store</h1>
          <p>
            With Kittl's color remover tool, you can simple select a color from
            the image with the eye-dropper tool, and then use our slider to
            remove as much or as little of the color as you want.
            <hr />
            you can simple select a color from the image with the eye-dropper
            tool, and then use our slider to remove as much or as little of the
            color as you want.
          </p>
        </main>
      </div>

      <div className="body3" id="service">
        {/* <img src={body3} alt="somthing" /> */}
        <main>
          <h1>Want To Know About Read Document</h1>
          <div>
            <p>
              With Kittl's color remover tool, you can simple select a color
              from the image with the eye-dropper tool, and then use our slider
              to remove as much or as little of the color as you want.
            </p>
            <p>
              you can simple select a color from the image with the eye-dropper
              tool, and then use our slider to remove as much or as little of
              the color as you want.
            </p>
          </div>
          {/* <div className="body3-btn">
            <button>Read</button>
            <button>Document</button>
          </div> */}
        </main>
      </div>
    </>
  );
};

export default Body;
