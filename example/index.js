// index.js
import React, { useState } from "react"
import ReactDOM from "react-dom"
import { Modal } from '../.'

const App = () => {
    const [isOpen, setOpen] = useState(true)

    return <div>
        <button onClick={() => setOpen(true)}>Open</button>
        {
            isOpen && <Modal label="please login" close={() => setOpen(false)} animate="expand-in">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15, 16].map(item => (<div key={item}>
                        <h1>Hey </h1>
                    </div>))

                }
            </Modal>
        }
        {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15, 16].map(item => (<div key={item}>
                <h1>Hey how are you guys this is sooo cool ha so what ups ha </h1>
            </div>))

        }
    </div>
}

ReactDOM.render(<App />, document.getElementById("root"))