import "/src/CSS/parteien.css"
import {useEffect, useRef} from "react";

export default function Parteien({parteien}) {
    const ulRef = useRef(null);

    useEffect(() => {
        ulRef.current.innerHTML = "";
        for (let i = 0; i < parteien.length; i++) {
            const partei = parteien[i].props
            const partei_img = partei.picLeft
            const orientation = partei.orientation
            const orientation_tiefe = partei.orientation_tiefe
            const href_ = partei.href

            const a = document.createElement("a")
            a.style.position = "absolute"
            a.style.listStyle = "none";
            a.href = href_
            const img = document.createElement("img")
            img.src = partei_img;
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
