import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Parteien from "./components/Parteien.jsx";
import DieMitte from "./components/DieMitte.jsx";

function App() {

    return (
        <Router>
            <div style={{padding: "0px", fontFamily: "Arial, sans-serif"}}>
                <header>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className="container-fluid">
                                <Link className="navbar-brand" to="/"></Link>
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
                                            <Link className="nav-link" to="/DieMitte">
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>


            <Routes>
                <Route path="/" element={<Parteien/>}/>
                <Route path="/DieMItte" element={<DieMitte/>}/>
            </Routes>
        </Router>

    )
}

export default App
