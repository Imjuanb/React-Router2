import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Pokemones() {
    const navigate = useNavigate();
    
    const [datos, setDatos] = useState([]);
    const [selected, setSelected] = useState([]);

    const getData = async() => {
        
        try {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon")
            const data = await res.json();

            setDatos(data.results)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData();

    },[])

    const handleChange = e => {
        const pokemonSelected = e.target.value;
        setSelected(pokemonSelected);

    }

    const handleCLick = () => {
        navigate(`/pokemones/${selected}`);
    }

    return (
        <div className="container selection">
        <select 
        name="pokemonSelect" 
        id="selectPokemons" 
        onChange={handleChange} 
        className="form-select">
            {datos.map((item, index) => (
                <>
                    <option key={index} value={item.name}>{item.name}</option>
                    </>
             ))}
             <option hidden value>Selecciona tu Pokemon</option>
        </select>

        <button className="btn btn-dark butt" onClick={handleCLick}>Ver Detalle</button>
        
        </div>
    )

}