import React, {useState} from 'react'
import Die from './Die';
import '../stylesheets/RollDice.css'

function RollDice( {numberDices}) {

    const [die1, setDie1] = useState('one');
    const [die2, setDie2] = useState('one');
    const [rolling, setRolling] = useState(false);
    const [total, setTotal] = useState('')

    const sides = [
        {'face': 'one', 'value': 1},
        {'face': 'two', 'value': 2},
        {'face': 'three', 'value': 3},
        {'face' : 'four', 'value': 4},
        {'face' : 'five', 'value': 5},
        {'face': 'six', 'value': 6}
    ];

    const transform = (n) =>{
        switch(n){
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
        }
    } 

    const roll = () => {
        if(numberDices === 1){
            setRolling(true);
            let newDie1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
            let val1 = sides[newDie1 - 1].value;
            let strNewDie1 = transform(newDie1)
            setDie1(strNewDie1);
            setTotal(val1);
            setTimeout(() => {
                setRolling(false);
            }, 1000)
        }
        else {
            setRolling(true);
            let newDie1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
            let newDie2 = Math.floor(Math.random() * (6 - 1 + 1) + 1); // Math.floor(Math.random() * 5)
            let val1 = sides[newDie1 - 1].value;
            let val2 = sides[newDie2 - 1].value;
            let strNewDie1 = transform(newDie1)
            setDie1(strNewDie1);
            let strNewDie2 = transform(newDie2);
            setDie2(strNewDie2);
            setTotal(val1 + val2);
            setTimeout(() => {
                setRolling(false);
            }, 1000)
        }
    }


    return (
        <div className='container'>
            <div className='dice-container'>
                {
                    numberDices === 1? (<Die face={die1} rolling={rolling}/>):
                    (
                        <>
                            <Die face={die1} rolling={rolling}/>
                            <Die face={die2} rolling={rolling}/>
                        </>
                    )
                }
                {
                    total !== ''? <h1 className='total-score'>Total: {total}</h1>:null
                }
                
            </div>
            <div className='btn-container'>
                <button className='roll-btn' disabled={rolling} onClick={roll}>
                    {rolling? "ROLLING...": "ROLL"}
                </button>
            </div>
        </div>
    )
}

export default RollDice;
