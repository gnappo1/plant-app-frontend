import {useState} from "react"
import {useHistory} from "react-router-dom"

const PlantForm = () => {
    const [plant, setPlant] = useState({
        name: "",
        species: "",
        sunExposure: "",
        wateringFreq: ""
    });
    const history = useHistory()

    const handleChange = (e) => {
        setPlant({
            ...plant,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if ([plant.name, plant.species, plant.sunExposure, plant.wateringFreq].some(val => val.trim() === "")) {
            alert("You must fill in all the information please!")
        }

        const newPlant = {
            name: plant.name,
            species: plant.species,
            sun_exposure: plant.sunExposure,
            watering_freq: plant.wateringFreq
        }

        fetch("http://localhost:9393/plants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPlant)
        })
        .then(() => history.push("/plants"))
        
    }
    return (
        <>
            <h3>Create a new plant</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={handleChange} type="text" name="name" value={plant.name} required/><br />
                <label htmlFor="species">Species</label>
                <input onChange={handleChange} type="text" name="species" value={plant.species} required/><br />
                <label htmlFor="sunExposure">Sun Exposure (hrs/day)</label>
                <input onChange={handleChange} type="number" name="sunExposure" value={plant.sunExposure} required/><br />
                <label htmlFor="wateringFreq">Watering Frequency (days/week)</label>
                <input onChange={handleChange} type="number" name="wateringFreq" value={plant.wateringFreq} required/><br />
                <input type="submit" value="Create Plant" />
            </form>
        </>
    )
}

export default PlantForm