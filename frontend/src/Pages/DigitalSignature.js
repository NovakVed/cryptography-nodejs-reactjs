import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

class DigitalSignature extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            varString: '',
            varDigitalSignature: '',
            varCheckSignature: false,
            varSelectedFile: '',
            varAllFiles: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleCheckSignature = this.handleCheckSignature.bind(this)
    };

    handleChange(event) {
        this.setState({ varString: event.target.value })
    }

    handleSelectChange(event) {
        this.setState({ varSelectedFile: event.target.value })
    }

    async handleClick(event) {
        event.preventDefault()

        const { varSelectedFile } = this.state;

        const sendString = {
            varSelectedFile,
        };

        await axios.post("http://localhost:3001/textFilePost", sendString)
            .then(res => {
                this.setState({ varString: res.data })
            })
            .catch(err => { console.error(err) })
    }

    async handleCheckSignature(event) {
        event.preventDefault()

        await axios.get('http://localhost:3001/digitalSignatureCheckGet')
            .then(res => {
                this.setState({ varCheckSignature: res.data })
                console.log(this.state.varCheckSignature)
            })
            .catch(err => { console.error(err) })
    }

    componentDidMount() {
        axios.get("http://localhost:3001/getAllFiles")
            .then(res => {
                this.setState({ varAllFiles: res.data })
            })
            .catch(err => { console.error(err) })
    }

    async handleSubmit(event) {
        event.preventDefault()

        //get response
        await axios.get("http://localhost:3001/digitalSignatureGet")
            .then(res => {
                this.setState({ varDigitalSignature: res.data })
            })
            .catch(err => { console.error(err) })
    }

    render() {

        //Create var optionItems with list of all files
        let optionItems = this.state.varAllFiles.map((item) =>
            <option key={item}>{item}</option>
        );

        return (
            <React.Fragment>
                <Container>
                    <h2>Sažetak poruke</h2>
                    <br></br>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group value={this.state.varSelectedFile} onChange={this.handleSelectChange} controlId="ControlSelect1">
                            <Form.Label>Odaberite datoteku koju želite učitati</Form.Label>
                            <Form.Control as="select">
                                {optionItems}
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="button" onClick={this.handleClick}>
                            Učitaj
                        </Button>

                        <br></br>
                        <br></br>

                        <Form.Group controlId="ControlTextarea1">
                            <Form.Label>Učitan je tekst iz datoteke <b>{this.state.varSelectedFile}</b></Form.Label>
                            <Form.Control disabled type="text" value={this.state.varString} onChange={this.handleChange} as="textarea" rows={3} />
                            <Form.Text className="text-muted">
                                Upisani tekst nakon generiranja digitalnog potpisa spremit će se u datoteku <b>"digitalni_potpis.txt"</b>
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Sažetak
                        </Button>
                    </Form>

                    <br></br>
                    <br></br>

                    <hr></hr>

                    <br></br>

                    <h3>{this.state.varDigitalSignature === '' ? '' : 'Digitalni potpis je uspješno kreiran!'}</h3>
                    <br></br>
                    <Form.Group controlId="ControlTextarea2">
                        <Form.Label>Učitana datoteka <b>digitalni_potpis.txt</b></Form.Label>
                        <Form.Control disabled type="text" value={this.state.varDigitalSignature} onChange={this.handleChange} as="textarea" rows={3} />
                        <Form.Text className="text-muted">
                            Automatski su se generiralni digitalni potpis unutar datoteke <b>"digitalni_potpis.txt"</b>
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" className="col text-center" type="button" onClick={this.handleCheckSignature}>
                        Provjeri digitalni potpis
                        </Button>
                    <br></br>
                    <br></br>
                    <h3>{ this.state.varCheckSignature ? 'Digitalni potpis je ispravan' : 'Digitalni potpis nije ispravan!' }</h3>
                </Container>
            </React.Fragment>
        );
    }
}

export default DigitalSignature;