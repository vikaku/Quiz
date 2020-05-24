import React from 'react'
import api from '../../apiData/ApiData';
import Answer from '../Answer/Answer';
import Result from '../Result/Result';
 import  './Question.css';
 import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

class Question extends React.Component {

    state = {
        answerContent:'',
        questionId:0,
        score:0,
        count:0,
        question:'',
        correct:'',
        show:true,
        result:0,
        minutes:2,
    seconds:0,
    time:'Time Out!'
        
    }


    handleAnswerSelected = (correctAnswer,selectedAnswer) =>{

        if(correctAnswer === selectedAnswer){

                this.setState(prevState =>( {
                        score:prevState.score+1   
                        } 
                    ))
        }

        if(this.state.questionId< api.length-1){
            this.nextQuestion();
        } else {
            this.getResult()
        }
       
        if(this.state.questionId === api.length-1){
            this.setState({show:false})
        }
    }

    getResult = () =>{
        if(this.state.questionId === api.length-1){
            const count = this.state.count;
        this.setState({
            count:count,
            question:api[count].Question,
            answerContent:api[count].Answer,
            correct:api[count].correct
        })
        }
        
       
    }
 

    nextQuestion = () =>{

        const count = this.state.count + 1;
        const questionId = this.state.questionId + 1;

        this.setState({
            count:count,
            questionId:questionId,
            question:api[count].Question,
            answerContent:api[count].Answer,
            correct:api[count].correct
        })
    }

    componentDidMount(){
        this.setState({
                        question:api[0].Question,
                        answerContent:api[0].Answer,
                        correct:api[0].correct
                    })

        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state
    
            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    
componentWillUnmount() {
    clearInterval(this.myInterval)
}

    handleResult = () => {
        this.setState({result : this.state.score})
    }

    renderQuiz =()=>{
        return(

            <div className="ques-ans"> 
                    <div className= "question" > <h2 >{this.state.question}</h2>    </div> 
                        <ul>
                            <Answer

                                answer ={this.state.answerContent}
                                correctAnswer= {this.state.correct}
                                handleAnswerSelected={this.handleAnswerSelected}
                            />
                        </ul>
                    <div className ='button'>
                    <button
                             type="button" 
                             className = 'btn btn-primary' 
                             disabled ={this.state.show} 
                             onClick = {this.handleResult}>
                             
                        Submit Quiz
                    
                    </button>
                    </div>
                    
            </div>
        )
    }

    renderResult = ()=>{
        return (
            
                <Result result= {this.state.result}/>
            )
    }

    render(){
        const {minutes, seconds} = this.state;
        return (

            <div className= "container">
            <div className = 'timer'> 
                    {minutes === 0 && seconds === 0
                        ? <p className = 'mb-0'> {this.state.time}</p>:
                        <p className = 'mb-0'>Time Remaining : {minutes}:{seconds <10 ? `0${seconds}` :seconds}</p>
                    }
        </div>
        {minutes === 0 && seconds === 0 ? this.renderResult() : this.state.result ? this.renderResult(): this.renderQuiz()}
                    
                          
                           
                           
                    
                    </div> 


        )
    }
}

export default Question