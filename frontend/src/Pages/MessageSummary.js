import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

class MessageSummary extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            varString: '',
            varEncrypted: '',
            varSelectedFile: '',
            varAllFiles: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
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
        await axios.get("http://localhost:3001/hashingGet")
            .then(res => {
                this.setState({ varEncrypted: res.data })
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
                            <Form.Label>Učitan je tekst iz datoteke <b>text.txt</b></Form.Label>
                            <Form.Control disabled type="text" value={this.state.varString} onChange={this.handleChange} as="textarea" rows={3} />
                            <Form.Text className="text-muted">
                                Upisani kriptirani tekst spremit će se u datoteku <b>"sazetak_poruke.txt"</b>
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

                    <h3>{this.state.varEncrypted === '' ? '' : 'Tekst je uspješno kriptiran!'}</h3>
                    <br></br>
                    <Form.Group controlId="ControlTextarea2">
                        <Form.Label>Kriptirana datoteka <b>asymmetric_encryption_file.txt</b></Form.Label>
                        <Form.Control disabled type="text" value={this.state.varEncrypted} onChange={this.handleChange} as="textarea" rows={3} />
                        <Form.Text className="text-muted">
                            Automatski su se generiralni javni i privatni ključevi unutar datoteka <b>"javni_ključ.txt"</b> i <b>"prvatni_ključ.txt"</b>
                        </Form.Text>
                    </Form.Group>
                </Container>
            </React.Fragment>
        );
    }
}

export default MessageSummary;
