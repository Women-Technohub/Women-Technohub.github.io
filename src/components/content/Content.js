import React from "react";
import { useState } from "react";
import "./Content.css";

const Content = () => {
  const [Value, setValue] = useState("All");

  const categories = [
    {
      name: "All",
    },
    {
      name: "scholarship",
    },
    {
      name: "hackathon",
    },
    {
      name: "internship",
    },
    {
      name: "job",
    },
  ];
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="content-container">
      <div className="category-container">
        {/* <label for="category">Choose category:</label> */}
        <select name="category" id="category" onChange={handleChange}>
          {categories.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>


            <div className="cards-container">
      <div className="cards">
      <div className="card">
          <h2>Disaster management hackathon of 2022</h2> 
          <hr></hr>
          <h5>Company</h5>
          <p>Eligibility goes here</p>
          <h4>closing time</h4>
          <button>Apply now</button>
        </div>
        <div className="card">
          <h2>Disaster management hackathon of 2022</h2> 
          <hr></hr>
          <h5>Company</h5>
          <p>Eligibility goes here</p>
          <h4>closing time</h4>
          <button>Apply now</button>
        </div>
        <div className="card">
          <h2>Disaster management hackathon of 2022</h2> 
          <hr></hr>
          <h5>Company</h5>
          <p>Eligibility goes here</p>
          <h4>closing time</h4>
          <button>Apply now</button>
        </div>
        <div className="card">
          <h2>Disaster management hackathon of 2022</h2> 
          <hr></hr>
          <h5>Company</h5>
          <p>Eligibility goes here</p>
          <h4>closing time</h4>
          <button>Apply now</button>
        </div>
        <div className="card">
          <h2>Disaster management hackathon of 2022</h2> 
          <hr></hr>
          <h5>Company</h5>
          <p>Eligibility goes here</p>
          <h4>closing time</h4>
          <button>Apply now</button>
        </div>
        <div className="card">
          <h2>Disaster management hackathon of 2022</h2> 
          <hr></hr>
          <h5>Company</h5>
          <p>Eligibility goes here</p>
          <h4>closing time</h4>
          <button>Apply now</button>
        </div>
        
       
      </div>
      </div>
    </div>
  );
};

export default Content;
