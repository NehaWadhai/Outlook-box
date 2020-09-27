import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, markRead, flagItem } from '../redux/actions/'
import Descriptionpanel from './mainpanel/DescriptionPanel'


export default function RenderMiddlePanel(props) {
    const actionID = useSelector(state => state.OutlookReducer.actionId)
    const dispatch = useDispatch()
    const [displayData, setDisplayData] = React.useState([])
    const [displayDescrption, setDisplayDescrption] = React.useState([])
    
    // display content sent from the props 
    React.useEffect(() => {
        setDisplayData(props.content)
    }, [props.content])

    // mark item deleted in the array object
    const removeItem = (Id) => {
        let obj = { actionId: actionID, mId: Id}
        dispatch(deleteItem(obj))
    }

    // mark item read and display description
    const markReadFn = (Id, content) => {
        let obj = { actionId: actionID, mId: Id }
        setDisplayDescrption(content)   // display content on screen
        dispatch(markRead(obj))
    }
    // mark item flag/unflagged
    const flagItemFn = (Id,flag) => {
        let obj = { actionId: actionID, mId: Id,flagValue:false}
        obj.flagValue = flag ? false : true
        dispatch(flagItem(obj))
    }
    
    return (
        <>
            <div className='middle-panel'>
                <div style={{textAlign:"center", padding:10}}>{actionID}</div>
                <div style={{padding : 10}}>
                    <button onClick={() => setDisplayData(props.content.filter(ele => ele.flag))}>Show Flagged</button>
                    <button onClick={() => setDisplayData(props.content.filter(ele => !ele.flag))}>Show UnFlagged</button>
                    <button onClick={() => setDisplayData(props.content)}>Show All</button>
                </div>
                {displayData.map(ele => {
                    return <div style={{display:'flex',justifyContent:'space-between'}} key={ele.mId} className={ele.unread ? 'list-unread' : 'list-read'}
                        onClick={() => markReadFn(ele.mId, ele.content)}>
                        <span>{ele.subject}</span>
                        <span>
                        {actionID !== 'deletedItems' && <button onClick={() => removeItem(ele.mId)}>Delete</button>}
                        {actionID !== 'deletedItems' && <button onClick={() => flagItemFn(ele.mId,ele.flag)}>{ele.flag ? 'Unflag' : 'Flag'}</button>}
                        </span>
                    </div>
                })}
            </div>
            <div className='last-panel'>
                <Descriptionpanel showDescription={displayDescrption} />
            </div>
        </>
    )
}
