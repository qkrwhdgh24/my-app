import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { logOut, login, onUserState } from '../api/firebase';
import UserDatas from './UserDatas';

function Nav() {
    const [user, setUser] = useState();

    useEffect(() => {
        onUserState((user) => {
            console.log(user)
            setUser(user);
        })
    }, [])
    useEffect(() => {
        onUserState(setUser);
    }, [])

    const userLogin = () => {
        login().then(setUser);
    }
    const userLogOut = () => {
        logOut().then(setUser);
    }
    return (
        <HeaderContainer>
            <Link to='/'>
                <h1>shop</h1>
            </Link>

            <nav>
                <Link to='/products/new'>
                    신상품
                </Link>
                {user && user.isAdmin && (
                    <Link to="/products">
                        모든 상품
                    </Link>
                )}

            </nav>

            <div className='userWrap'>
                {user && <UserDatas user={user} />}
                {!user && <button onClick={userLogin} className='loginBtn'>Login</button>}
                {user && <button onClick={userLogOut} className='logoutBtn'>LogOut</button>}
            </div>
        </HeaderContainer>
    )
}

export default Nav

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    padding: 12px;
    gap: 24px;
    a{
        text-decoration: none;
        color: #333333;
        h1{
            font-size: 30px;
        }
    }
    nav{
        display: flex;
        align-items: center;
        gap: 12px;
        margin-left: 50px;
    }
    .userWrap{
        display: flex;
        margin-left: auto;
        align-items: center;
        gap: 12px;
        button{
            border: none;
            padding: 6px 12px;
            cursor: pointer;
            border-radius: 6px;
        }
        .loginBtn{
            background: pink;
        }
        .logoutBtn{
            background: lightgray;
        }
    }
`
