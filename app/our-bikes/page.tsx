import BikeCategories from "../components/BikeCategories";
import { getAllBikes } from "../lib/sanity"


const OurBikes = async () => {
    const bikes = await getAllBikes(); 

  return (
    <div>
        <BikeCategories bikes={bikes} />
    </div>
  )
}

export default OurBikes