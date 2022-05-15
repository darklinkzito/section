import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState("André");


  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>se x for true, sim!</p>}
        {!x && <p>se x for falso, sim!</p>}
        <h1>if ternário</h1>
        {name === "João" ? (
            <div>
                <p>O nome é joão!</p>
            </div>
        ):(
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}
        <button onClick={() => setName("João")}>Ser Joao</button>
    </div>
  )
}

export default ConditionalRender