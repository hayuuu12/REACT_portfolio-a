import React, { useContext } from 'react'
import { FcCloseUpMode } from "react-icons/fc";
import { Container, Row, Col, Image } from 'react-bootstrap';
import { DataContext } from '../context/DataProvider';

const About = () => {
  const { about } = useContext(DataContext);
  console.log(about[0].title);
  console.table(about[1].desc);

  return (
    <Container id="about">
        <h1><FcCloseUpMode />About me</h1>
        <Row className="border-bottom">
            <h3>{about[0].title}</h3>
            <Col md={8}>
                {
                    about[1].desc.map((item, index)=>(
                        <p key={index}>{item}</p>
                    ))
                }
            </Col>
            <Col md={4}>
                <Image src="./images/me2.png" fluid/>
            </Col>
        </Row>
    </Container>
  )
}

export default About