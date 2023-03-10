import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const AllServicesCard = ({allService}) => {
    const {description,_id, id,img_url,service_name, price, ratings
    } =allService;
    return (
     <Col>
        <Card style={{width:'18rem'}}>
        <Card.Img variant="top" />



        <PhotoProvider>
      <PhotoView src={img_url}>
        <img src={img_url} alt="" />
      </PhotoView>
    </PhotoProvider>

        <Card.Body>
          <Card.Title>{service_name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Link to={`/serviceDetails/${_id}`}>
          <Button variant="primary">See details</Button>
          </Link>
        </Card.Body>
      </Card>
      </Col>
    );
};

export default AllServicesCard;