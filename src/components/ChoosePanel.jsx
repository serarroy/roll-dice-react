import React from 'react'
import Die from './Die';
import '../stylesheets/ChoosePanel.css'


function ChoosePanel( { setNumberDices } ) {

    const handleClickOne = () => {
        setNumberDices(1);
    }

    const handleClickTwo = () => {
        setNumberDices(2);
    }
    return (
        <div>
            <h2 className='title'>How many dice?</h2>
            <div className='choose-panel'>
                <div className='die-panel'>
                    <Die face='one' />
                    <button className='selection' onClick={handleClickOne}>One die</button>
                </div>
                <div className='die-panel'>
                    <Die face='two' />
                    <button className='selection' onClick={handleClickTwo}>Two dice</button>
                </div>
            </div>
        </div>  
    )
}

export default ChoosePanel
