import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

{/* <Hero /> */}
function App () {
    const mapData = data.map(data => {
        return (<Card 
        key={data.id}
        data={data}
        />)
    })
    return (
        <div className="app-wrapper">
        <Navbar />
        {mapData}
    </div>
    )
}

export default App