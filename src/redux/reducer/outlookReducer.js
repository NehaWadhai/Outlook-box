import Inbox from "../../components/mainpanel/module/inbox"

const initialState = {
    inboxDataFromRedux : [],
    spamDataFromRedux : [],
    actionId : 'inbox'
}

export default function (state = initialState, action) {

    
    switch (action.type) {
        case 'SAVE_ID':
            return {...state, actionId :action.payload}
        case 'RENDER_DESCRIPTION':
            return {...state, desc: action.payload}
        
        case 'GET_INBOX' :
            return {...state, inboxDataFromRedux :action.payload}
        case 'GET_SPAM' :
            return{...state, spamDataFromRedux :action.payload}
        // redundant code can be optimized here
        case 'DELETE_ITEM' :{
            console.log('check deleted flag',action.payload.deleted)
            if(action.payload.actionId === 'inbox'){
                return{...state, inboxDataFromRedux :
                state.inboxDataFromRedux.map(element=>element.mId === action.payload.mId ? 
                    {...element,deleted:true} : element)
                }
            }
            if(action.payload.actionId === 'spam'){
                return{...state, spamDataFromRedux :
                state.spamDataFromRedux.map(element=>element.mId === action.payload.mId ? 
                    {...element,deleted:true} : element)
                }
            }
        }
        case 'MARK_READ' :{
            if(action.payload.actionId === 'inbox'){
                return{...state, inboxDataFromRedux :
                state.inboxDataFromRedux.map(element=>element.mId === action.payload.mId ? 
                    {...element,unread : false} : element)
                }
            }
            if(action.payload.actionId === 'spam'){
                return{...state, spamDataFromRedux :
                state.spamDataFromRedux.map(element=>element.mId === action.payload.mId ? 
                    {...element,unread : false} : element)
                }
            }
        }
        case 'FLAG_ITEM' :{
                if(action.payload.actionId === 'inbox'){
                    return{...state, inboxDataFromRedux :
                    state.inboxDataFromRedux.map(element=>element.mId === action.payload.mId ? 
                        {...element,flag : action.payload.flagValue} : element)
                    }
                }
                if(action.payload.actionId === 'spam'){
                    return{...state, spamDataFromRedux :
                    state.spamDataFromRedux.map(element=>element.mId === action.payload.mId ? 
                        {...element,flag : action.payload.flagValue} : element)
                    }
                }
        }     
        default:
            return state
    }
}