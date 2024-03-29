import React from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap';

import symmetricEncryptionImage from '../images/symmetricEncryptionImage.webp';
import symmetricDecryptionImage from '../images/symmetricDecryptionImage.webp';
import asymmetricEncryptionImage from '../images/asymmetricEncryptionImage.webp';
import asymmetricDecryptionImage from '../images/asymmetricDecryptionImage.webp';
import messageSummaryImage from '../images/messageSummaryImage.webp';
import digitalSignatureImage from '../images/digitalSignatureImage.webp';
import { Link } from 'react-router-dom';

export default function CenteredGrid() {
  return (
    <React.Fragment>
    <CardDeck>
      <Card>
        <Card.Img variant="top" style={{ height: '250px' }} src={symmetricEncryptionImage} />
        <Card.Body>
          <Card.Title>Simetrično kriptiranje</Card.Title>
          <Link to={'/symmetricEncryption'}>
            <Button variant="primary">Otvori</Button>
          </Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" style={{ height: '250px' }} src={symmetricDecryptionImage} />
        <Card.Body>
          <Card.Title>Simetrično dekriptiranje</Card.Title>
          <Link to={'/symmetricDecryption'}>
            <Button variant="primary">Otvori</Button>
          </Link>
        </Card.Body>
      </Card>
    </CardDeck>

    <br></br>
    <br></br>

    <CardDeck>
      <Card>
        <Card.Img variant="top" style={{ height: '250px' }} src={asymmetricEncryptionImage} />
        <Card.Body>
          <Card.Title>Asimetrično kriptiranje</Card.Title>
          <Link to={'/asymmetricEncryption'}>
            <Button variant="primary">Otvori</Button>
          </Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" style={{ height: '250px' }} src={asymmetricDecryptionImage} />
        <Card.Body>
          <Card.Title>Asimetrično dekriptiranje</Card.Title>
          <Link to={'/asymmetricDecryption'}>
            <Button variant="primary">Otvori</Button>
          </Link>
        </Card.Body>
      </Card>
    </CardDeck>

    <br></br>
    <br></br>

    <CardDeck>
      <Card>
        <Card.Img variant="top" style={{ height: '250px' }} src={messageSummaryImage} />
        <Card.Body>
          <Card.Title>Sažetak poruke</Card.Title>
          <Link to={'/messageSummary'}>
            <Button variant="primary">Otvori</Button>
          </Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" style={{ height: '250px' }} src={digitalSignatureImage} />
        <Card.Body>
          <Card.Title>Digitalni potpis</Card.Title>
          <Link to={'/digitalSignature'}>
            <Button variant="primary">Otvori</Button>
          </Link>
        </Card.Body>
      </Card>
    </CardDeck>

    <br></br>
    <br></br>
    <br></br>
    </React.Fragment>
  );
}
