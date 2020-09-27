import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducer'
import React from 'react'

export default ({children,intialState={}}) => {


   
    return(
        <Provider store={createStore(reducers,intialState)}>{children}</Provider>
    )
}