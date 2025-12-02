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
    // Parteien
    const dieMitte = <Partei
        name="Die Mitte"
        description="
            Die Mitte verfolgt eine Politik des Ausgleichs und der gesellschaftlichen Stabilität. Sie misst einer robusten Familienpolitik, einer stabilen Wirtschaft und einem verantwortungsbewussten Umgang mit Umwelt und Ressourcen hohe Bedeutung bei. In Bezug auf Europa zeigt sie eine pragmatische und kooperative Einstellung.
            Die Partei wird von *Präsident Gerhard Pfister* geleitet.
            Die Mitte hat im Parlament 29 Sitze im Nationalrat und 7 Sitze im Ständerat."
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
        description="
            Die SP (Sozialdemokratische Partei der Schweiz) engagiert sich für eine gerechte und soziale Schweiz. Sie fordert einen intensiveren Umweltschutz,
            unterstützt eine Öffnung gegenüber Europa und nimmt eine kritisch-reflektierte Haltung zur Armee ein.
            Die SP wird seit 2020 von den Co-Präsidenten Mattea Meyer und Cédric Wermuth geleitet, die gemeinsam die politische Ausrichtung der Partei gestalten.
            Die SP ist im Bundesparlament deutlich vertreten: Mit 41 Sitzen im Nationalrat und 8 Sitzen im Ständerat zählt sie zu den bedeutendsten politischen Kräften der Schweiz."
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
        description="
            Die SVP vertritt konservative und wirtschaftsliberale Ansichten und engagiert sich insbesondere für niedrige Steuern, weniger staatliche Regulierung und eine restriktive Migrationspolitik.
            Sie spricht sich gegen eine intensivere Annäherung an die EU aus und verlangt eine autonome, souveräne Schweiz.
            Marco Chiesa ist der Präsident der Partei.
            Die SVP, die im Nationalrat mit 53 Sitzen die stärkste Partei ist, hat auch 6 Sitze im Ständerat."
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
        description="
            Die FDP vertritt die Prinzipien wirtschaftliche Freiheit, individuelle Verantwortung und staatliche Zurückhaltung.
            Sie trägt zu einer innovativen Unternehmenskultur und zu einer offenen, international vernetzten Schweiz bei.
            Im Umweltbereich verfolgt sie marktorientierte Ansätze.
            Den Vorsitz in der Partei hat Thierry Burkart.
            Die FDP hat 28 Sitze im Nationalrat und 11 Sitze im Ständerat."
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
        description="
            Die Grünen engagieren sich für effektiven Klimaschutz, den Ausbau erneuerbarer Energien und den Schutz der Artenvielfalt.
            Sie setzen sich für soziale Gerechtigkeit, Gleichstellung und eine weltoffene Schweiz ein.
            Die Partei wird von Lisa Mazzone und Aline Trede als Co-Präsidentinnen angeführt.
            Die Grünen haben 23 im Nationalrat und 2 Sitze im Ständerat"
        picLeft="./src/parteien_img/Grün.png"
        picRight="./src/parteien_chefs/Green_C.jpg"
        bgMain="white"
        bgSide="#16F738"
        bgMiddle="white"
        orientation="left"
        orientation_tiefe={0.79}
        href="dieGPS"
    />

    const dieEVP = <Partei
        name="EVP"
        description="
            Die EVP bringt christlich-soziale Werte in eine Politik ein, die sich wirklich um Menschen kümmert und dabei modern bleibt.
            Sie kämpft für ethische Verantwortung, soziale Sicherheit und Nachhaltigkeit, die auch die Umwelt schützt.
            Angeführt wird die Partei seit 2024 von Liliane Studer.
            Im Parlament hat die EVP zwei Sitze im Nationalrat, im Ständerat ist sie aktuell nicht vertreten."
        picLeft="./src/parteien_img/EVP.png"
        picRight="./src/parteien_chefs/EVP_C.jpg"
        bgMain="white"
        bgSide="#16F738"
        bgMiddle="white"
        orientation="mitte"
        orientation_tiefe={0.93}
        href="dieEVP"
    />
    // Medien
    const SRF = <Medie
        name="SRF"
        description="Art: Öffentlich-rechtlicher Rundfunk (Radio, TV, Online)
        Nützlichkeit:

        Sie gibt die verlässlichsten Berichte aller Medien, da sie staatlicher Regulierung und klaren journalistischen Standards untersteht.
        Die SRF bietet gute, kurze Erklärungen, sowie informative Abstimmungssendungen.

        Zuverlässigkeit:

        - Sehr hoch; neutrale Berichterstattung vorgeschrieben.

        Für wen geeignet:

        - Alle, die seriöse Informationen suchen.
        - Besonders hilfreich bei politischen Abstimmungen.

        Empfohlener Konsum:

        - Radio täglich kurz.
        - Fernsehen mehrmals pro Woche.
        "
        picLeft="./src/medien_img/SRF.png"
        picRight={null}
        bgMain="white"
        bgSide="blue"
        bgMiddle="white"
        orientation="mitte"
        orientation_tiefe={1}
        href="SRF"
    />

    const TT = <Medie
        name="TT"
        description="Art: Eine soziale Medie mit sehr kurzen Videos
        Nützlichkeit:

        Viele verschiedene 'Creators' welche ihre Blickwinkel und Meinungen erklären.
        Gut um neue Trends und Jugendkultur zu sehen.

        Zuverlässigkeit:

        Es ist stark abhängig vom Creator, öfters sind die Beiträge mehr 'Content' als wertvoller journalistischer Inhalt.
        Der Algorythmus kann öfters anfangen, einem User nur Videos zu einer Meinungsrichtung zeigen, und so die Person in extreme ziehen.

        Eignet sich für:

        Es ist gut für einen schnellen Überblick oder als Ergänzung, jedoch nie als Hauptquelle für eine Meinung.

        Empfohlener Konsum:

        2-10 Minuten am Tag, jedoch lieber wahrhaftere Quellen benutzen."
        picLeft="./src/medien_img/TT.png"
        picRight={null}
        bgMain="white"
        bgSide="#1C1C1C"
        bgMiddle="white"
        orientation="right"
        orientation_tiefe={0.64}
        href="TT"
    />

    const MIN20 = <Medie
        name="20MIN"
        description="20 Minuten ist eine Zeitung, welche komplett kostenlos ist, egal ob online oder als Print.
        Nützlichkeit:

        - Extreme Schnelle News, kurze Texte – ideal für unterwegs.
        - Sehr populär bei Jugendlichen und Berufspendlern.
        - Gute Übersicht über Tagesereignisse.

        Sie bringt die News sehr schnell nach dem Ereignis heraus. Die News ist sehr schnell zu lesen und iist gut für eine kurze Orientation. Sie gibt eine gute Übersicht über die momentane Situation.
        Zuverlässigkeit:

        - Die Zuverlässigkeit ist mittel, die News wird eher oberflächig berichtet.

        Empfohlener Konsum:
        - Täglich ca. 10 Minuten."
        picLeft="./src/medien_img/20MIN.png"
        picRight={null}
        bgMain="white"
        bgSide="#1334A1"
        bgMiddle="white"
        orientation="left"
        orientation_tiefe={0.66}
        href="20MIN"
    />

    const NZZ = <Medie
        name="NZZ"
        description="
        Die NZZ ist eine Zeitung höherer Qualität, ist als Online- und Physische-Medie erhältlich.
        Nützlichkeit:

        - Sehr tiefe Analysen, besonders in Wirtschaft, Politik und internationalen Beziehungen.
        - Wenig Boulevard, höhere Anforderungen in den Artikeln.

        Zuverlässigkeit:

        - hoch, sie ist eine der ältesten Zeitungen aus der Schweiz gilt als eine der seriösesten, deutschsprachigen Zeitungen.

        Empfohlener Konsum:

        Ein paar Mal die Woche, bei wichtigen Ereignissen mehrmals."
        picLeft="./src/medien_img/NZZ.png"
        picRight={null}
        bgMain="white"
        bgSide="beige"
        bgMiddle="white"
        orientation="right"
        orientation_tiefe={0.57}
        href="NZZ"
    />

    const X = <Medie
        name="X"
        description="Art: Soziales Medium für Kurznachrichten/Mikroblogging
        Nützlichkeit:

        Die Newsgeschwindigkeit isr sehr schnell, alle wichtigen Politiker, Journalisten und Behörden haben ihre Acounts auf dieser PLatform. Es ist gut für Live-Geschehnisse zu verfolgen. Zudem hat man über die hohe Präsenz von wissenden Menschen eine gute Möglichkeit für schnelle, ware Informationen.

        Zuverlässigkeit:

        - Es hat eine mittlere bis geringe Verlässlichkeit, da es viele unkontrollierte Acounts gibt, welche unwahre Gerüchte verbreiten. Zudem puscht der Algoritmus nur polarisierende News. Seriöse Accounts (z.B. SRF, NZZ, Bundesrat) bleiben jedoch zuverlässig.

        Eignet sich für:

        Es ist gut für einen schnellen Überblick oder als Ergänzung, jedoch nie als Hauptquelle für eine Meinung.


        Empfohlener Konsum:

        2-10 Minuten am Tag, jedoch lieber wahrhaftere Quellen benutzen."
        picLeft="./src/medien_img/X.png"
        picRight={null}
        bgMain="white"
        bgSide="black"
        bgMiddle="white"
        orientation="right"
        orientation_tiefe={0.8}
        href="X"
    />

    let index_element = <Medien medien={[SRF, TT, MIN20, NZZ, X]}/>

    if (!medien_toggle) {
        index_element = <Parteien
            parteien={[dieMitte, dieSP, dieSVP, dieFDP, dieGPS, dieEVP]}/>
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
                                <input checked={medien_toggle} type="checkbox"
                                       onChange={() => setMedien_toggle(!medien_toggle)}/>
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
                <Route path="dieEVP" element={dieEVP}/>

                <Route path="SRF" element={SRF}/>
                <Route path="TT" element={TT}/>
                <Route path="20MIN" element={MIN20}/>
                <Route path="NZZ" element={NZZ}/>
                <Route path="X" element={X}/>
            </Routes>
        </Router>

    )
}

export default App
