import React from 'react'
// Display description on right
export default function Descriptionpanel(props) {
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: props.showDescription }} />
        </>
    )
}



