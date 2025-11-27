import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./CSS/app_css.css"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Parteien from "/src/components/Parteien.jsx";
import Partei from "./components/Partei.jsx";
import {useState} from "react";
import Medien from "./components/Medien.jsx";
import Medie from "./components/Medie.jsx";

function App() {
    const [medien_toggle, setMedien_toggle] = useState(false)

    const dieMitte = <Partei
        name="Die Mitte"
        description="Die Mitte Description"
        picLeft="./src/parteien_img/DieMitte.png"
        picRight="./src/parteien_chefs/Mitte_C.jpg"
        bgMain="white"
        bgSide="#FFF9BB"
        bgMiddle="white"
        orientation="mitte"
        orientation_tiefe={1.1}
        href="dieMitte"
    />

    const dieSP = <Partei
        name="SP"
        description="Die SP Description"
        picLeft="./src/parteien_img/SP.png"
        picRight="./src/parteien_chefs/SP_C.png"
        bgMain="white"
        bgSide="#C21502"
        bgMiddle="white"
        orientation="left"
        orientation_tiefe={0.83}
        href="dieSP"
    />

    const dieSVP = <Partei
        name="SVP"
        description="Die SVP Description"
        picLeft="./src/parteien_img/SVP.png"
        picRight="./src/parteien_chefs/SVP_C.jpg"
        bgMain="white"
        bgSide="green"
        bgMiddle="white"
        orientation="right"
        orientation_tiefe={0.95}
        href="dieSVP"
    />

    const dieFDP = <Partei
        name="FDP"
        description="Die FDP Description"
        picLeft="./src/parteien_img/FDP.png"
        picRight="./src/parteien_chefs/FDP_C.jpg"
        bgMain="white"
        bgSide="#16D9F7"
        bgMiddle="white"
        orientation="right"
        orientation_tiefe={0.75}
        href="dieFDP"
    />

    const dieGPS = <Partei
        name="Grüne Schweiz"
        description="Die Grünen Description"
        picLeft="./src/parteien_img/Grün.png"
        picRight="./src/parteien_chefs/Green_C.jpg"
        bgMain="white"
        bgSide="#16F738"
        bgMiddle="white"
        orientation="left"
        orientation_tiefe={0.79}
        href="dieGPS"
    />

    const dieGLP = <Partei
        name="Gründliberale"
        description="Die Grünliberale Description"
        picLeft="./src/parteien_img/GLP.png"
        picRight="./src/parteien_chefs/GLP_C.jpg"
        bgMain="white"
        bgSide="#16F738"
        bgMiddle="white"
        orientation="mitte"
        orientation_tiefe={0.93}
        href="dieGLP"
    />

    const SRF = <Medie
        name="SRF"
        description="Die SRF Description"
        picLeft="./src/medien_img/SRF.png"
        picRight={null}
        bgMain="white"
        bgSide="blue"
        bgMiddle="white"
        orientation="mitte"
        orientation_tiefe={1}
        href="SRF"
    />

    let index_element = <Medien medien={[SRF]}/>

    if (!medien_toggle) {
        index_element = <Parteien
            parteien={[dieMitte, dieSP, dieSVP, dieFDP, dieGPS, dieGLP]}/>
    }
    return (
        <Router>
            <div style={{padding: "0px", fontFamily: "Arial, sans-serif"}}>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/"/>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/dieSP">
                                            Die SP
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/DieMitte">
                                            Die Mitte
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/dieSVP">
                                            Die SVP
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <label className="switch">
                                <input checked={medien_toggle} type="checkbox" onChange={() => setMedien_toggle(!medien_toggle)}/>
                                <span className="slider"></span>
                            </label>
                        </div>
                    </nav>
                </header>
            </div>
            <Routes>
                <Route path="/" element={index_element}/>
                <Route path="dieMitte" element={dieMitte}/>
                <Route path="dieSP" element={dieSP}/>
                <Route path="dieSVP" element={dieSVP}/>
                <Route path="dieFDP" element={dieFDP}/>
                <Route path="dieGPS" element={dieGPS}/>
                <Route path="dieGLP" element={dieGLP}/>

                <Route path="SRF" element={SRF}/>
            </Routes>
        </Router>

    )
}

export default App
