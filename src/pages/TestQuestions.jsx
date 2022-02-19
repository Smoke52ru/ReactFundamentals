import React from 'react';
import questionsJSON from "../json/questions";
import QuestionItem from "../components/QuestionItem";

const TestQuestions = () => {
    return (
        <div>
            {questionsJSON.map((question, index) =>
                <QuestionItem
                    number={index + 1}
                    text={question.text}
                    picture={question.pic === null ? "" : question.pic.src}
                    answers={
                        question.answer.map((answer) => answer.text)
                    }
                    isMultiple={question.isMultiple}
                    key={question.id}
                />
            )}
        </div>
    );
};

export default TestQuestions;