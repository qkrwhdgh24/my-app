import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Nav() {
    return (
        <HeaderContainer>
            <Link to='/'>
                <h1>shop</h1>
            </Link>

            <nav>
                <Link to='/products/new'>
                    신상품
                </Link>
                <Link to="/products">
                    모든 상품
                </Link>
            </nav>
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
`
