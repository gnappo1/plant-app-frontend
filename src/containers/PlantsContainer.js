import {useState, useEffect} from "react"
import PlantsList from "../components/PlantsList"

const PlantsContainer = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch("http://127.0.0.1:9393/plants")
                const data = await resp.json()
                setPlants(data)
                setLoading(false)
            } catch (error) {
                alert(error)
            }
        }

        fetchData()
        
    }, []);

    if (!!loading) return <h1>Loading...</h1>

    return (
        <>
            <h2>Our Plants</h2>
            <PlantsList plants={plants} />
        </>
    )
}

export default PlantsContainer