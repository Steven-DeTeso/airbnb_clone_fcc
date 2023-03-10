import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

{/* <Hero /> */}
function App () {
    return (
        <div className="app-wrapper">
        <Navbar />
        <Card 
            img="katy.png"
            rating="5.0"
            reviewCount={6}
            country="USA"
            title="Life lessons with Katie Zaferes"
            price={136}
        />
    </div>
    )
}

export default App