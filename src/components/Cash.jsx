import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import MyButton from "./UI/button/MyButton";

const Cash = () => {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    console.log(cash)

    function addCash(cash) {
        dispatch({type: "ADD_CASH", payload:cash})
    }

    function getCash(cash) {
        dispatch({type: "GET_CASH", payload:cash})
    }

    return (
        <div className='app'>
            <div style={{fontSize:'3rem'}}>{cash}</div>
            <div style={{display: 'flex'}}>
                <MyButton onClick={()=> addCash(Number(prompt()))}>Пополнить счет</MyButton>
                <MyButton onClick={()=> getCash(Number(prompt()))}>Снять со счета</MyButton>
            </div>
        </div>
    );
};
export default Cash;