import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

class AsymmetricDecryption extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <h2>Asimetrično dekriptiranje</h2>
                    <br></br>
                    <Form>
                        <Form.Group controlId="exampleForm.File1">
                            <Form.File id="formcheck-api-regular">
                                <Form.File.Label>Učitaj kriptirani tekst za dekriptiranje</Form.File.Label>
                                <Form.File.Input />
                            </Form.File>
                            <Form.Text className="text-muted">
                                Automatski generirani <b>"javni_ključ.txt"</b> i <b>"prvatni_ključ.txt"</b> će se koristiti radi dekriptiranje odabrane kriptirane datoteke
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Dekriptiraj
                        </Button>
                    </Form>

                    <br></br>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <h3>Dekriptirani tekst</h3>
                    <br></br>
                    <p>Neki tekst koji se upravo dekriptirao bla bla bla</p>
                </Container>
            </React.Fragment>
        );
    }
}

export default AsymmetricDecryption;
