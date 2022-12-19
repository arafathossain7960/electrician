import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AllServicesCard = ({allService}) => {
    const {description,_id,img_url,service_name, price, ratings
    } =allService;
    return (
        <Card >
        <Card.Img variant="top" src={img_url} />
        <Card.Body>
          <Card.Title>{service_name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant="primary">See details</Button>
        </Card.Body>
      </Card>
    );
};

export default AllServicesCard;