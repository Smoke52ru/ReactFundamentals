import React from 'react';
import frontendQuestionsJSON from "../json/frontendQuestions";
import QuestionItem from "../components/QuestionItem";

const FrontendTestQuestions = () => {
    return (
        <div>
            {frontendQuestionsJSON.map((question, index) =>
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

export default FrontendTestQuestions;