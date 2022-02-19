import React from 'react';
import classes from './QuestionItem.module.css';

const QuestionItem = ({number, text, picture, answers, isMultiple, ...props}) => {
    return (
        <div className={classes.questionCard}>
            <div className={classes.questionCard__text}>
                <strong>{number}</strong>
                <p>{text}</p>
            </div>
            <img className={classes.questionCard__picture}
                 src={picture} alt=""/>
            <div className={classes.questionCard__answers}>
                {answers.map((answer, index) =>
                    <div key={props.key + '_' + index}>
                        <input type={isMultiple ? "checkbox" : "radio"}
                               name={'answer_' + props.key + '_' + number}
                               id={'answer_' + props.key + '_' + number + '_' + index}
                        />
                        <label
                            htmlFor={'answer_' + props.key + '_' + number + '_' + index}>{index + 1}. {answer}</label>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuestionItem;