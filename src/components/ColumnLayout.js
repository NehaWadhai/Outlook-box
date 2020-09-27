import React from 'react'
import Listpanel from './listpanel/ListPanel'
import Mainpanel from './mainpanel/MainPanel'

export default function Columnlayout() {
   // Divides page into left panel which is list and right panel for rendering content
    return (
        <div className='column-layout'>
            <Listpanel/>
            <Mainpanel/>
        </div>
    )
}
    