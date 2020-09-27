import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {listItems} from '../../constants/constants'
import {saveId,getInbox,getSpam} from '../../redux/actions'
import Spamjson from '../../jsonData/spam.json'
import Inboxjson from '../../jsonData/inbox .json'


export default function Listpanel() {
    // Reducer for Inbox Data
    const inboxDataFromRedux = useSelector(state=>state.OutlookReducer.inboxDataFromRedux)
    // Reducer for Spam Data
    const spamDataFromRedux = useSelector(state=>state.OutlookReducer.spamDataFromRedux)
    // Reducer for type of action eg. inbox , spam
    const actionId = useSelector(state=>state.OutlookReducer.actionId)
    const dispatch = useDispatch()
    
    // function to check display number of unread messages in all folders
    const checkUnread = (Id) =>{
        if(Id === 'inbox'){
        return <span> {inboxDataFromRedux.filter(
            ele=> ele.unread 
        ).length}</span>
        }
        if(Id === 'spam'){
            return <span> {spamDataFromRedux.filter(
                ele=> ele.unread 
            ).length}</span>
            }
    }

    // UseEffect to fetch data from json or local storage
    React.useEffect(()=>{
        // If data exist in local storage, retrive data from local storage
            if(localStorage.getItem('actionId')) {
            dispatch(saveId(localStorage.getItem('actionId')))
            }
            // Reducer is empty?
            if(inboxDataFromRedux.length === 0){
                // Local storage is empty?
                if(!localStorage.getItem('inboxdata')) {
                    // Fetch data from Json
                    dispatch(getInbox(Inboxjson))
                }
                else  
                dispatch(getInbox(JSON.parse(localStorage.getItem('inboxdata'))))  // Fetch from localstorage
            }
            if(spamDataFromRedux.length === 0){
                if(!localStorage.getItem('spamdata')) {
                    dispatch(getSpam(Spamjson))
                }
                else  
                dispatch(getSpam(JSON.parse(localStorage.getItem('spamdata'))))
            }
    },[])

    // set data to local storage 
    React.useEffect(()=>{
        localStorage.setItem('actionId', actionId)
    },[actionId])

    return (
        <div className='list-panel'>
            <h4>Folder</h4>
                {listItems.map(item=>{
                    return <div className='list-items' key={item.id}>
                        <span id={item.id} style={{width:'100%',paddingBottom:10,paddingTop:10,paddingLeft:10}} onClick={()=>dispatch(saveId(item.id))}>{item.name}</span>
                        {checkUnread(item.id)}
                    </div>
                })
            }
        </div>
    )
}


