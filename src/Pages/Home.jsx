import pikachupng from "../assets/img/pikachupng.png"

export default function Home() {
    return (
        <>
        <h1 className="text-center">Bienvenido maestro pokemón</h1>
        <div className="d-flex justify-content-center">
        <img src={pikachupng} alt="imagen de pikachu" className="image" />
        </div>
         </>
    )
}