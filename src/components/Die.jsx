import React from 'react'
import '../stylesheets/Die.css'


function Die( {face} ) {
    return (
        <div>
            {<i className={`die fas fa-dice-${face}`} />}
        </div>
    )
}

export default Die