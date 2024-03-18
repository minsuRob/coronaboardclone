import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Card } from 'react-bootstrap';

export default function CardPage(){
    return (
        <Container className='pt-3'>
            <Card>
                <Card.Header>카드의 헤더</Card.Header>
                <Card.Body>
                    <Card.Title>카드 타이틀</Card.Title>
                    <Card.Subtitle>카드의 서브타이틀</Card.Subtitle>
                    <Card.Text>카드의 본문</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}