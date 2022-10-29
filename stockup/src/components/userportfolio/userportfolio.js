import React from 'react';
import "./userportfolio.css"
import { AiFillCaretDown } from "react-icons/ai"
import { AiOutlinePlusCircle } from "react-icons/ai"

var userList = [
    {
        user_name: "A",
        quantity: "10",
        portfolio_value: "2468.02"
    },
    {
        user_name: "B",
        quantity: "10",
        portfolio_value: "2468.02"
    },
    {
        user_name: "C",
        quantity: "10",
        portfolio_value: "2468.02"
    },
    {
        user_name: "D",
        quantity: "10",
        portfolio_value: "2468.02"
    },
    {
        user_name: "E",
        quantity: "10",
        portfolio_value: "2468.02"
    },
    {
        user_name: "F",
        quantity: "10",
        portfolio_value: "2468.02"
    },
    {
        user_name: "G",
        quantity: "10",
        portfolio_value: "2468.02"
    },
    {
        user_name: "H",
        quantity: "10",
        portfolio_value: "2468.02"
    },
    {
        user_name: "I",
        quantity: "10",
        portfolio_value: "2468.02"
    },
    {
        user_name: "J",
        quantity: "10",
        portfolio_value: "2468.02"
    },
    {
        user_name: "K",
        quantity: "10",
        portfolio_value: "2468.02"
    },
    {
        user_name: "L",
        quantity: "10",
        portfolio_value: "2468.02"
    },
    {
        user_name: "M",
        quantity: "10",
        portfolio_value: "2468.02"
    },
    {
        user_name: "N",
        quantity: "10",
        portfolio_value: "2468.02"
    }
]


const UserData = (props) => {

    const { userdata } = props;

    return (
        <div className='userportfolio-user-container'>
            <span>{userdata.user_name}</span>
            <span>{userdata.quantity}</span>
            <span>{userdata.portfolio_value}</span>
        </div>
    );
}
const UserPortfolio = () => {

    function editUser() {
        
    }

    return (
        <div className='user-portfolio-container'>
            <div className='user-portfolio-heading'>
                <div style={{ marginBottom: "10px" }}>
                    <span style={{ textAlign: "center", color: "#2146C7", fontWeight: "bold" }}><AiFillCaretDown /> USER PORTFOLIO</span>
                    <AiOutlinePlusCircle style={{ fontSize: "25px", fontWeight: "bold", color: "#2146C7" }} onClick={editUser} />
                </div>
                <div>
                    <span>User Name</span>
                    <span>Stocks</span>
                    <span>Fiat $</span>
                </div>
            </div>
            <div className='user-portfolio-data'>
                {
                    userList.map((eachItem, index) => <UserData key={index} userdata={eachItem} />)
                }
            </div>
        </div>
    );
}

export default UserPortfolio;