import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Mycom from './mycom.jsx'

function Myele() {
    return(
        <>
        <div>
            <h2>Hello world</h2>
            <p>this is main element or component</p>
        </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
 <>
 <Mycom/> 
    <App/>
    <Myele/>
    
    </>
)

