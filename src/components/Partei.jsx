// Partei.jsx
import "bootstrap/dist/css/bootstrap.min.css";

export default function Partei({
                                   name,
                                   description,
                                   picLeft,
                                   picRight,
                                   bgMain,
                                   bgSide,
                                   bgMiddle,
                                   orientation,
                                   orientation_tiefe,
                               }) {
    return (
        <div className="container-fluid py-5" style={{backgroundColor: bgMain}}>
            {/* Titel */}
            <h1 className="text-center mb-5">{name}</h1>

            <div className="row">

                {/* Linke Spalte – 20% */}
                <div
                    className="col-12 col-md-3 d-flex justify-content-center align-items-center py-4"
                    style={{backgroundColor: bgSide}}
                >
                    {/*Bild Links*/}
                    {picLeft && (<img
                        src={picLeft}
                        alt="Left Logo"
                        className="img-fluid"
                        style={{maxWidth: "150px"}}
                    />)}
                </div>

                {/* Mittlere Spalte – 60% */}
                <div
                    className="col-12 col-md-6 d-flex justify-content-center align-items-center py-4"
                    style={{backgroundColor: bgMiddle}}
                >
                    <p className="text-center" style={{maxWidth: "600px"}}>
                        {description}
                    </p>
                </div>

                {/* Rechte Spalte – 20% */
                }
                <div
                    className="col-12 col-md-3 d-flex justify-content-center align-items-center py-4"
                    style={{backgroundColor: bgSide}}
                >
                    {/*Bild Rechts*/}
                    {picRight && (
                        <img
                            src={picRight}
                            alt="Right Logo"
                            className="img-fluid"
                            style={{maxWidth: "150px"}}
                        />)}
                </div>
            </div>
        </div>
    );
}
