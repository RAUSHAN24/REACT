import React , {useState} from "react";
import RestaurantCard from "./RestaurantCard.js";
import resList from "../../utils/mockData.js";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList)
    

    return (
      <div className="body">
        {/* <div className="search">Search</div>
         */}
         <div className="filter">
            <button className="filter-btn" onClick={() =>{
                let filteredList = listOfRestaurants.filter((res) => res.data.avgRating>4)
                setListOfRestaurants(filteredList)
            }}>Top Rated Restaurants</button>
         </div>
        <div className="res-container">
           
            {
              listOfRestaurants.map((restaurant) => 
                <RestaurantCard key={restaurant.data.id} resData= {restaurant} />
                
              )
            }
          
        </div>
      </div>
    )
  }
  export default Body;
