import { CDN_URL } from "../../utils/constant";
const RestaurantCard = (props) => {
    // console.log(props)
    const {resData} =props;
    const {name, cuisines,avgRating, costForTwo} = resData?.data
    
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
         <img className="res-logo" src={CDN_URL + resData.data.cloudinaryImageId} alt="restaurent logo"/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo / 100} For Two</h4>
        <h4>38 Minutes ETA</h4>
      </div>
    )
  }

  export default RestaurantCard;