import React, { useState } from 'react'
import './Quiz.css';
import { Link } from "react-router-dom";

const Quiz = (props) => {

    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0
    })

    const onClickNext = () => {
        if (activeQuestion !== questions.length - 1){
            setActiveQuestion((prev) => prev + 1)
        } else {
            setActiveQuestion(0)
            setShowResult(true)
        }
        
        setResult((prev) => 
            selectedAnswer ? {
                ...prev, 
                score: prev.score + 5, 
                correctAnswers : prev.correctAnswers + 1,
            } : {
                ...prev, 
                wrongAnswers : prev.wrongAnswers + 1,
            }
        )
        setSelectedAnswerIndex(null)
    }

    const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index)
        if(answer === correctAnswer) {
            setSelectedAnswer(true)
        } else {
            setSelectedAnswer(false)
        }
    }

    const {questions} = props.quiz
    const {question, choices, correctAnswer} = questions[activeQuestion]

    return (
        <div className="quiz-container">
            {!showResult ? (
                <div>
                    <div>
                        <span className="active-question-no">
                            {activeQuestion + 1}
                        </span>
                        <span className="total-question">
                            /{questions.length}
                        </span>
                    </div>
                    <h2>{question}</h2>
                    <ul>
                        {choices.map((answer, index) => (
                            <li 
                                onClick={() => onAnswerSelected(answer, index)} 
                                key = {answer}
                                className = {selectedAnswerIndex === index ? 'selected-answer' : null}>
                                {answer}
                            </li>
                        ))}
                    </ul>
                    <button onClick={onClickNext} disabled = {selectedAnswerIndex == null}>
                        {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                    </button>
                </div>
            ) : (
                <div className="result">
                    <h3>Result</h3>
                    <p>Total Question: <span>{questions.length}</span></p>
                    <p>Total Score: <span>{result.score}</span></p>
                    <p>Correct Answers: <span>{result.correctAnswers}</span></p>
                    <p>Wrong Answers: <span>{result.wrongAnswers}</span></p>
                    <Link to="/">Back</Link>
                </div>
            )}
            
        </div>
      )
}

export default Quiz

