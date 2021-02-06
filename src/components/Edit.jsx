import React, { useState } from 'react'
import Sidebar from "./Sidebar"
import Map  from './Map2'
//import {AddRouteStartPoint} from "./AddRoute"

const Edit = () => {

    const [editStep, setEditStep] = useState(1)

    const editProps = {
        editStep: editStep,
        setEditStep : setEditStep
    }
    

    return (
        <div style={{display:"flex",flexdirection:"row"}}>
            <div className="edit-bar" style={{}}><Sidebar /></div>
            <div style={{width:"60vw",display:"block",overflow:"hidden", float:"left"}}><Map edit={editProps} width="60vw" /></div>
            <div style={{width:"10vw"}}></div>
        
        </div>
    )
}

export default Edit
