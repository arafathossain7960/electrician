import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './HomeServices';

const HomeServiceCard = ({homeServiceCard}) => {
    const {description,_id,img_url,service_name, price, ratings
    } = homeServiceCard;
    return (
        <Card className='mx-2 rounded pb-4'>
        <Card.Img className='homeServiceImg h-100 rounded' src={img_url} />
        <Card.Body>
          <Card.Title className='text-danger'>{service_name}</Card.Title>
          <Card.Text>
           {description.slice(0,100)}
          </Card.Text>
         <Link className='homeServiceBtn position-absolute' to={`/serviceDetails/${_id}`}> <Button variant="info ">Details </Button></Link>
        </Card.Body>
      </Card>
    );
};

export default HomeServiceCard;