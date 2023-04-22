import React from 'react'
import './value.scss'

// Imported Images ====>
import value_img from '../../Assets/value1.jpg'
import value_img2 from '../../Assets/value2.webp'
import value_img3 from '../../Assets/value3.jpg'

const Value = () => {
  return (
    <div className="valueContainer">
      <h1 className="valueTitle">
        The value that holds us true and to account
      </h1>
      <div className="valueDiv">
        <div className="singleGrid">
          <div>
            <div className="imgDiv">
              <img src={value_img} alt="" />
            </div>

            <span>Simplicity</span>
          </div>

          <p>
            Things being made beautiful are at the heart of everything we do.
          </p>
        </div>

        <div className="singleGrid">
          <div>
            <div className="imgDiv">
              <img src={value_img2} alt="" />
            </div>

            <span>Humanity</span>
          </div>

          <p>
            We believe in making things better for everyone, even if just by a
            little bit !
          </p>
        </div>

        <div className="singleGrid">
          <div>
            <div className="imgDiv">
              <img src={value_img3} alt="" />
            </div>

            <span>Transparency</span>
          </div>

          <p>
            We work on the basis of creating trust, which can be nurtered
            through authenticity and transparency.
          </p>
        </div>
      </div>

      <div className="card cardDiv">
        <div>
          <h1 className="careerTitle">Ready to switch a career ?</h1>
          <h2 className="careerSubTitle">Let's get started !</h2>
        </div>

        <button className="careerButton">Get Started</button>
      </div>
    </div>
  )
}

export default Value
