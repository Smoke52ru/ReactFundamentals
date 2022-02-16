import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import MyButton from "./UI/button/MyButton";
import {addCustomerAction, removeCustomerAction} from "../store/customerReducer";
import classes from './Cash.module.css'

const Cash = () => {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

    function addCash(cash) {
        dispatch({type: "ADD_CASH", payload: cash})
    }

    function getCash(cash) {
        dispatch({type: "GET_CASH", payload: cash})
    }

    function addCustomer(name) {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }

    function removeCustomer(customer) {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <div className={classes.cashApp}>
            <div className={classes.cashCounter}>{cash}</div>
            <div className={classes.cashButtons}>
                <MyButton onClick={() => addCash(Number(prompt()))}>Пополнить счет</MyButton>
                <MyButton onClick={() => getCash(Number(prompt()))}>Снять со счета</MyButton>
                <MyButton onClick={() => addCustomer(prompt())}>Добавить клиента</MyButton>
            </div>
            <div className={classes.customersList}>
                {customers.length > 0 ?
                    <div>
                        {customers.map(customer =>
                            <div onClick={()=>removeCustomer(customer)}
                                className={classes.customersItem}>
                                {customer.name}
                            </div>
                        )}
                    </div>
                    :
                    <div>
                        Клиенты отсутствуют!
                    </div>
                }
            </div>
        </div>
    );
};
export default Cash;