import "/src/CSS/parteien.css"

export default function Parteien({parteien}) {

    /*function place_parties({parteien}) {
        console.log(parteien[0])
    }
    place_parties({parteien})*/

    return (
        <>
            <div>
                <span id="arrow_down"></span>
                <img src="/src/assets/arrow_left_right.png" id="arrow_bidirectional"/>
                <span>Parteien Orientation</span>
            </div>
        </>
    )
};