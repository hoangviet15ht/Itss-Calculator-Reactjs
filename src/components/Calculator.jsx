import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CalculatorTitle from './CalculatorTitle'
import OutputScreen from './OutputScreen'
import Button from './Button'
const Calculator = props => {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const handleClick =(event)=>{
        
        const value = event.target.value;
        switch (value) {
            case '=':
                if(question!==''){
                    let ans ='';
                    try {
                        ans = eval(question)
                    } catch (error) {
                        setAnswer("Math Error")
                    }
                    if(ans===undefined){
                        setAnswer("Math Error")
                    }
                    else{
                        setAnswer(ans);
                        setQuestion(question)
                    }
                    break;
                }
            case "Clear":{
                setAnswer('')
                setQuestion('')
                break;
            }
            case "Delete":{
                var str = question;
                str = str.substr(0,str.length-1);
                setQuestion(str)
                break;
            }
            
            default: {
                var newQ =question
                console.log("🚀 ~ file: Calculator.jsx ~ line 45 ~ handleClick ~ newQ", newQ)
               
                setQuestion(newQ+value)
                break;
            }
        }

    }
    return (
        <div>
            <div>
                <CalculatorTitle title='Calculator ' />
            </div>
            <div>
                <OutputScreen question={question} answer={answer} />
                <div>
                    <Button className="bg-[#ffcc0e] border-2 border-[#222]" label={'Clear'}  handleClick={handleClick}/>
                    <Button className="bg-[#ffcc0e] border-2 border-[#222]" label={'Delete'} handleClick={handleClick}/>
                    <Button className="bg-[#ffcc0e] border-2 border-[#222]" label={'/'} handleClick={handleClick}/>
                </div>
                <div>
                    <Button label={'8'} handleClick={handleClick} className='border-2 border-[#222]'/>
                    <Button label={'9'} handleClick={handleClick} className='border-2 border-[#222]'/>
                    <Button className="bg-[#ffcc0e] border-2 border-[#222]" label={'+'} handleClick={handleClick}/>
                </div>
                <div>
                    <Button label={'6'} handleClick={handleClick} className='border-2 border-[#222]'/>
                    <Button label={'7'} handleClick={handleClick} className='border-2 border-[#222]'/>
                    <Button className="bg-[#ffcc0e] border-2 border-[#222]" label={'*'} handleClick={handleClick}/>
                </div>
                <div>
                    <Button label={'4'} handleClick={handleClick}  className='border-2 border-[#222]'/>
                    <Button label={'5'} handleClick={handleClick} className='border-2 border-[#222]'/>
                    <Button className="bg-[#ffcc0e] border-2 border-[#222]" label={'-'} handleClick={handleClick}/>
                </div>
                <div className="button-row">
                    <Button label={'2'} handleClick={handleClick} className='border-2 border-[#222]'/>
                    <Button label={'3'} handleClick={handleClick} className='border-2 border-[#222]'/>
                    <Button className="bg-[#ffcc0e] border-2 border-[#222]" label={'.'} handleClick={handleClick}/>
                </div>
                <div className="button-row">
                    <Button label={'0'} handleClick={handleClick} className='border-2 border-[#222]'/>
                    <Button label={'1'} handleClick={handleClick} className='border-2 border-[#222]'/>
                    <Button className="bg-[#ffcc0e] border-2 border-[#222]" label={'='} handleClick={handleClick}/>
                </div>
            </div>
        </div>
    )
}

Calculator.propTypes = {}

export default Calculator
