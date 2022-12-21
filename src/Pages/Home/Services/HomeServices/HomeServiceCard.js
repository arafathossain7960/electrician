import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const HomeServiceCard = ({homeServiceCard}) => {
    const {description,_id,img_url,service_name, price, ratings
    } = homeServiceCard;
    return (
        <Card style={{  }}>
        <Card.Img variant="top" src={img_url} />
        <Card.Body>
          <Card.Title className='text-danger'>{service_name}</Card.Title>
          <Card.Text>
           {description.slice(0,100)}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
};

export default HomeServiceCard;