import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';

import { Container, Card, Accordion, Button, Alert } from 'react-bootstrap';

const options = [
    {value: 'KR', label: '한국'},
    {value: 'JP', label: '일본'},
    {value: 'US', label: '미국'},
    {value: 'CN', label: '중국'},
]

export default function CardPage(){
    const [selOptSingle, setSelOptSingle] = useState();
    const [selOptMulti, setSelOptMulti] = useState();
    
    return (
        <Container className='pt-3'>
            <Select value={selOptSingle} onChange={(selectOption)=>{
                    setSelOptSingle(selectOption)
                }}
                options={options}
                isSearchable={false}
            />
            <Select value={selOptMulti} onChange={(selectOption)=>{
                    setSelOptMulti(selectOption)
                }}
                options={options}
                isMulti={true}
                isSearchable={true}
                placeholder="국가선택"
            />

            <Alert variant='primary'>알러트프라이머리2</Alert>
            <Accordion defaultActiveKey='0'>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle className='p-0' as={Button} variant="link" eventKey='0'>
                        카드의 헤더2
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey='0'>
                        <Card.Body>
                            <Card.Title>카드 타이틀2</Card.Title>
                            <Card.Subtitle>카드의 서브타이틀</Card.Subtitle>
                            <Card.Text>카드의 본문</Card.Text>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
    );
}