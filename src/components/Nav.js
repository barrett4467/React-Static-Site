import logo from "../logo.svg";
import React from "react";
import styled from "styled-components";

const Nav = styled.div`
    background-color: #21222b;
    color: #69d4ef;
`
const Logo = styled.img`
    height: 35px;
`
const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    margin: 0 -10px;
    align-items: center;
`
const Li = styled.li`
    margin: 0 15px;
`
const Right = styled.a`
    color: #ffff;
    margin-left: auto;
`

class Navbar extends React.Component {
    render() {
        return (
            <Nav>
                <Ul>
                    <Li>
                        <Logo src={logo} alt="react logo"/>
                    </Li>
                    <Li>
                        <h1>ReactFacts</h1>
                    </Li>
                    <Li>
                        <Right>React Course- Project1</Right>
                    </Li>
                </Ul>
            </Nav>
        )
    }
}

export default Navbar;