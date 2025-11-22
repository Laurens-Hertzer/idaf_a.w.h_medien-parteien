import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Parteien from "/src/components/Parteien.jsx";
import Partei from "./components/Partei.jsx";

function App() {
    const dieMitte = <Partei
        name="Die Mitte"
        description="Die Mitte Description"
        picLeft="./src/parteien_img/DieMitte.png"
        picRight={null}
        bgMain="red"
        bgSide="orange"
        bgMiddle="yellow"
        orientation="mitte"
        orientation_tiefe={1}
    />

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
                                        <Link className="nav-link" to="/DieMitte">
                                            Die Mitte
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
            <Routes>
                <Route path="/" element={<Parteien
                    parteien={[dieMitte]}
                />}/>
                <Route path="/DieMitte" element={dieMitte}/>
            </Routes>
        </Router>

    )
}

export default App
