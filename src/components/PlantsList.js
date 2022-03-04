import PlantCard from "./PlantCard"

const PlantsList = ({plants}) => {
    const renderPlants = plants.map(plant => <PlantCard key={plant.id} plant={plant}/>)
    return (
        <div>{renderPlants}</div>
    )
}

export default PlantsList