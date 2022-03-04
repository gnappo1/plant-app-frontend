import {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"
const PlantCard = ({plant}) => {
    const {id} = useParams()
    const [plantObj, setPlantObj] = useState(null);
    useEffect(() => {   
        if (!plant) {
            fetch(`http://localhost:9393/plants/${id}`)
            .then(resp => resp.json())
            .then(plant => setPlantObj(plant))
        }
    }, [plant, id]);

    const finalPlant = plant ? plant : plantObj
    if (!finalPlant) return <h1>Loading...</h1>
  return (
    <div>
        <h3>Name: <Link to={`/plants/${finalPlant.id}`}>{finalPlant.name}</Link></h3>
        <h4>Species: {finalPlant.species}</h4>
        <h4>Sun Exposure: {finalPlant.sun_exposure} (hrs/day)</h4>
        <h4>Watering Frequency: {finalPlant.watering_freq} (days/week)</h4>
        <h4>Uploaded by: {finalPlant.user?.username || "No creator!"}</h4>
    </div>
  )
}

export default PlantCard