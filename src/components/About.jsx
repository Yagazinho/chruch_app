import React from 'react'
import { Button, Card, CardBody, CardText, CardTitle } from 'react-bootstrap'
const About = () => {
  return (
    <div className='row justify-content-center'>
        <div className="col-md-10 d-flex justify-content-center pb-3">
            <div className="row">
                <div className="col-md-6">
                    <Card className='border-0 mr-0 mb-3 left-card rounded-0 text-center' style={{width: '25rem'}}>
                     <CardBody>
                        <CardTitle>Sunday Mass</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus hic aliquid sit iure debitis, iste sunt numquam molestias incidunt sapiente. </CardText>
                        <Button bsPrefix='btn-custom'>Do Something</Button>
                     </CardBody>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card className='ml-0 rounded-0 text-center right-card' style={{width: '25rem'}}>
                     <CardBody>
                        <CardTitle>Be Inspired</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus hic aliquid sit iure debitis, iste sunt numquam molestias incidunt sapiente. Tmet consectetur adipisicing elit. Minus hic aliquid sit iure debitis, iste sunt numquam molestias incidunt sapiente.</CardText>
                        <Button variant='secondary'>Do Something</Button>
                     </CardBody>
                    </Card>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About




















