import React from 'react'
import { useSelector } from 'react-redux'
import Delete from './module/delete'
import Inbox from './module/inbox'
import Spam from './module/spam'


export default function Mainpanel() {
    const Id = useSelector(state=>state.OutlookReducer.actionId)
    // Function to switch between different views based on actionID
    const MiddlePanel = () =>{
        console.log('chck id in main panel',Id);
        switch(Id){
            case 'inbox' :
            return <Inbox/>
            case 'spam' :
            return <Spam/>
            case 'deletedItems' :
            return <Delete/>
            default :
            return <div>Custom Folder</div>
                
        }
    }
    return (
        <div className='main-panel'>
                {MiddlePanel()}
        </div>
    )
}
