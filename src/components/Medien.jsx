import "/src/CSS/parteien.css"
import {useEffect, useRef} from "react";

export default function Medien({medien}) {
    const ulRef = useRef(null);

    useEffect(() => {
        ulRef.current.innerHTML = "";
        for (let i = 0; i < medien.length; i++) {
            const medie = medien[i].props
            const medie_img = medie.picLeft
            const orientation = medie.orientation
            const orientation_tiefe = medie.orientation_tiefe
            const href_ = medie.href

            const a = document.createElement("a")
            a.style.position = "absolute"
            a.style.listStyle = "none";
            a.href = href_
            const img = document.createElement("img")
            img.src = medie_img;
            img.width = 80
            img.height = 80
            img.style.borderRadius = "50%"
            img.style.backgroundColor = "white"
            switch (orientation) {
                case "mitte":
                    a.style.left = (orientation_tiefe * 600) + "px"
                    a.style.top = parseInt(((Math.random() * 400) + 100)) + "px"
                    break
                case "left":
                    a.style.right = (orientation_tiefe * 1180) + "px"
                    a.style.top = parseInt(((Math.random() * 400) + 100)) + "px"
                    break
                case "right":
                    a.style.left = (orientation_tiefe * 1180) + "px"
                    a.style.top = parseInt(((Math.random() * 400) + 100)) + "px"
                    break

            }
            a.appendChild(img);
            ulRef.current.appendChild(a);
        }

    }, [medien])
    return (
        <body className="parteienBody">
        <div>
            <span id="arrow_down"></span>
            <img src="/src/assets/arrow_left_right.png" id="arrow_bidirectional"/>
            <span>Medien Orientation</span>
        </div>
        <div ref={ulRef} className="parteien">
        </div>
        </body>
    )
};