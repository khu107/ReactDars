import React from 'react'
import { Container } from './style'
import { useContext } from 'react'
import { StudentContext } from '../../context'

const  Navbar = ()=> {
  const [data] = useContext(StudentContext);
  // console.log(info);
  return (
    <Container>
        <h1>Home</h1>
        <h1>Contact</h1>
        <h1>About</h1>
        <h1>Students {data.length}</h1>
    </Container>
  )
}
export default Navbar;
