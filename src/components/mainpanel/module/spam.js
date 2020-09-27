import React from 'react'
import { useSelector } from 'react-redux'
import RenderMiddlePanel from '../../RenderMiddlePanel'

export default function Spam() {
    const spamDataFromRedux = useSelector(state=>state.OutlookReducer.spamDataFromRedux)
    // Save data to local storage whenever spam is modified
    React.useEffect(()=>{
        if(spamDataFromRedux.length > 0) {
        localStorage.setItem('spamdata', JSON.stringify(spamDataFromRedux))
        }
    },[spamDataFromRedux])
    return (
        <>
            <RenderMiddlePanel content={spamDataFromRedux.filter(
                ele=>!ele.deleted
            )} />
        </>
    )
}

