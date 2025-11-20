import Partei from "./Partei.jsx";
import "/public/dieMitte.png"

export default function DieMitte() {
    return (
        <>
            <Partei
                name="Die Mitte"
                description="Die Mitte."
                picLeft="/public/dieMitte.png"
                picRight="/public/dieMitte.png"
                bgMiddle="#ff9b00"
                bgSide="#003c69"
                leftDesc="bla"
                rightDesc="blus"
            />
        </>
    )
};