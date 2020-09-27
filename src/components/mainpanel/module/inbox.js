import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import RenderMiddlePanel from '../../RenderMiddlePanel'

export default function Inbox() {
    const inboxDataFromRedux = useSelector(state=>state.OutlookReducer.inboxDataFromRedux)
    // Save data to local storage whenever inbox is modified
    useEffect(()=>{
        if(inboxDataFromRedux.length > 0) {
        localStorage.setItem('inboxdata', JSON.stringify(inboxDataFromRedux))
        }
    },[inboxDataFromRedux])

    return (
        <>
            <RenderMiddlePanel content={inboxDataFromRedux.filter(
                ele=>!ele.deleted
 
            )} />
        </>
    )
}
