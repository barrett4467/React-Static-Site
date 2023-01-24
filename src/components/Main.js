import React from "react";
import styled from "styled-components";

const MainCont = styled.div`
    background-color: #282e37;
    height: 100vh;
    width: 100vw;
    margin-top: -21px;
    color: #fff;
`
const H1 = styled.h1`
    margin-left: 25px;
`
const Ul = styled.ul`
    list-style-type: none;
`
const Bullet = styled.li`
    &:before {
        content: "•";
        color: #6ac4de;
    }
`

class Main extends React.Component {
    render() {
        return (
            <MainCont>
                <H1>Fun Facts About React</H1>
                <Ul>
                    <Bullet> Was first released in </Bullet>
                    <Bullet> Was originally created by Jordan Walke</Bullet>
                    <Bullet> Has well over 100k stars on GitHub</Bullet>
                    <Bullet> Is maintained by Facebook</Bullet>
                    <Bullet> Powers thousands of enterprise apps, including mobile apps</Bullet>
                </Ul>
            </MainCont>
        )
    }
}

export default Main;