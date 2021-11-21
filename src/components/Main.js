import React from 'react'
import Contentmain from './maincontent/Contentmain'
import Navbar from './navbar/Navbar'

const Main = ({add}) => {
    return (
        <>
            <Navbar add={add}/>
            <Contentmain/>
        </>
    )
}

export default Main
