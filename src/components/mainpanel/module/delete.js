import React from 'react'
import { useSelector } from 'react-redux'
import RenderMiddlePanel from '../../RenderMiddlePanel'

export default function Delete() {
    const inboxDataFromRedux = useSelector(state=>state.OutlookReducer.inboxDataFromRedux)
    const spamDataFromRedux = useSelector(state=>state.OutlookReducer.spamDataFromRedux)
    // collection of all messages, filter out if deleted value is set to true
    let allItem = [...inboxDataFromRedux,...spamDataFromRedux]
    return (
        <>
            <RenderMiddlePanel content={allItem.filter(
                ele=> ele.deleted
            )}/>
        </>
    )
}
