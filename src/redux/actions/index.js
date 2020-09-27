

export function saveId(Id){
    return{
        type:'SAVE_ID',
        payload:Id
    }
}

export function getInbox(data){
    return{
        type:'GET_INBOX',
        payload:data 
    }
}

export function getSpam(data){
    return{
        type:'GET_SPAM',
        payload:data 
    }
}


export function deleteItem(obj){
    return{
        type:'DELETE_ITEM',
        payload:obj 
    }
}

export function markRead(obj){
    return{
        type:'MARK_READ',
        payload:obj 
    }
}

export function flagItem(obj){
    return{
        type:'FLAG_ITEM',
        payload:obj 
    }
}