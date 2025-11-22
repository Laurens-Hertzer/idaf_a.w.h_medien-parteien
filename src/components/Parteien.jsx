import "/src/CSS/parteien.css"
import {useEffect, useRef} from "react";

export default function Parteien({parteien}) {
    const ulRef = useRef(null);

    useEffect(() => {
        ulRef.current.innerHTML = "";
        const partei = parteien[0].props
        const partei_img = partei.picLeft
        const orientation = partei.orientation
        const orientation_tiefe = partei.orientation_tiefe

        const a = document.createElement("a")
        a.style.position = "absolute"
        a.style.listStyle = "none";
        a.href = "/dieMitte"
        const img = document.createElement("img")
        img.src = partei_img;
        img.width = 80
        img.style.backgroundColor = "white"
        switch (orientation) {
            case "mitte":
                a.style.left = (orientation_tiefe * 600) + "px"
                a.style.top = parseInt(((Math.random() * 400) + 100)) + "px"
        }
        a.appendChild(img);

        ulRef.current.appendChild(a);
    }, [parteien])

    return (
        <body className="parteienBody">
        <div>
            <span id="arrow_down"></span>
            <img src="/src/assets/arrow_left_right.png" id="arrow_bidirectional"/>
            <span>Parteien Orientation</span>
        </div>
        <div ref={ulRef} className="parteien">

        </div>
        </body>
    )
};