import React from 'react'
import PropTypes from 'prop-types'
import './Answer.css'



const Answer = (props) =>{

    const handleChange = (event) => {
        console.log(event.target.value)
        console.log(event.target.id)
        props.handleAnswerSelected(event.target.value,event.target.id)
    }
   
    return (


         props.answer &&  props.answer.map(ans =>{
                return (    
                     <div className = "Answer">
                        <input 

                            type= 'radio' 
                            className= 'radioButton'  
                            value={props.correctAnswer}
                            onChange = {handleChange}
                            checked = {props.answer === props.correctAnswer}
                            id={ans}
                            name="selectedRadioButton"
                        />
                        <label className="radioLabel">{ans} </label>
                    </div>
                )
                
            })
        )
    
       
}          
           
Answer.propTypes = {
    answer : PropTypes.string.isRequired,
    correctAnswer : PropTypes.string.isRequired
}           
        
    


export default Answer;