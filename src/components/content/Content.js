import React from "react";
import { useState } from "react";
import "./Content.css";
import Data from '../../api/data.json'

const Content = () => {
  const [Value, setValue] = useState("All");

  const categories = [
    {
      name: "All",
    },
    {
      name: "Scholarships",
    },
    {
      name: "Competitions",
    },
    {
      name: "Internships",
    }
  ];
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="content-container" id="notification">
      

      <h1 className="title">NOTIFICATIONS</h1>



      <div className="category-container">
        <label for="category">Choose category:</label>
        <select name="category" id="category" onChange={handleChange}>
          {categories.map((item) => (
            <option value={item.name}> 
               {item.name} 
           </option> 
          ))} 
       </select>
      </div> 
            <div className="cards-container">
             
      <div className="cards">
     
        
        
          
            { Data.filter(function(cat) {
              if(Value === "All") {
              return true
            }
            else{
              return ( cat.category === Value)
            }
              
              }).map((item) => (
              <>
              <div className="card">
              <h2>{item.title}</h2><hr />
              <h5>{item.Company}</h5>
              <p>Eligibility: <br />

              {
                item.eligibility.map((list) => (
                  <li>{list.points}</li>
                ))
              }
              </p>
              <h4>Last date : {item.deadline}</h4>
            <a href={item.link}> <button>Apply now</button></a>
            </div>
              </>
            ))
          
            }
      </div>
        <a href='https://docs.google.com/forms/d/1_wi_eA5dm9qBvvbrbp1SLIIy2UT-KhQuRVh5vTHvk30/edit'><button class>Subscribe for more updates</button></a>
  
      </div>
    </div>
  );
};

export default Content;
