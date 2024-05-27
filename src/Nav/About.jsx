import React from 'react'
import { FcDebt} from "react-icons/fc";
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <Container id="about">
        <h1><FcDebt />About</h1>
        <Row className="border-bottom">
            <Col md={8}>
                <p>EZEN 컴퓨터 아카데미에서 6개월 동안 JAVA(서블릿, 스프링, 스프링부트), React 
                    그리고 NodeJS를 배운 신입 풀스택 개발자 입니다. 이 과정을 통해 웹 애플리케이션 개발의
                    전체 주기를 이해하고, 프론트와 백엔드 개발 모두에서 실력을 쌓을 수 있었습니다.</p>
                <p>
                    프로젝트 경험으로는 학원에서 다양한 팀 프로젝트와 개인 프로젝트가 있습니다.
                    그 중 하나를 소개하자면 java를 이용한 여러가지 방법으로 같은 db의 게시판 프로젝트가 있습니다.
                    이 경험은 저에게 실시간 데이터 처리와 RESTful API 디자인에 대한 실질적인 이해를 제공했습니다.
                </p>
                <p>개발 기술 이외에도 이 프로젝트를 통해 커뮤니케이션 능력과 협업 능력을 향상
                    시킬 수 있었습니다. 프로젝트이 성공적인 완료를 위해 동료들과 지속적으로
                    의견을 조율하고, 합의점을 찾는 과정에서 많은 것을 배웠습니다.
                </p>
                <p>ㅇddddddddㄹㅇ</p>
            </Col>
            <Col md={4}>
                <Image src="./images/me.png" fluid/>
            </Col>
        </Row>
    </Container>
  )
}

export default About