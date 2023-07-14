import React from 'react'
import styled from 'styled-components'



const MyText = styled.h1`
font-weight: bold;
`


const Home = () => {
    return (
        <MyText>
            This is the Future
        </MyText>
    )
}

export { Home, MyText }
