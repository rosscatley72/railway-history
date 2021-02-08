import React, { useState, useContext } from 'react'
import { animated, useSpring } from "react-spring"
import Sidebar from "./Sidebar"
import Map  from './Map2'
import { AddRoute } from './AddRoute'
import Context from "../store/context"

const Edit = () => {

    const {globalState, globalDispatch} = useContext(Context)

    const editBarStyle = useSpring({
        width: globalState.addRoute.active ? "20vw" : "0vw",
        backgroundColor:"#b7b4ad",
        overflow:"hidden"
    })
    

    return (
        <div style={{display:"flex",flexdirection:"row"}}>
            <div style={{width:"9vw"}}><Sidebar /></div>
            <div style={{width:"70vw",display:"block",overflow:"hidden", float:"left"}}><Map width="70vw" /></div>
            <animated.div style={editBarStyle}>{globalState.addRoute.active && <AddRoute />}</animated.div>
        
        </div>
    )
}

export default Edit
