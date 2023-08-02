import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function CreateUser(){
    
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({name: '', email: '', mobile: ''})

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    };

    const hadleSubmit =(event)=>{
        event.preventDefault();

        axios.post("http://192.168.1.9/api/user/save", inputs) // Enviar los datos del formulario en la solicitud POST
            .then((response) => {
                console.log(response.data);
                navigate('/');
                // Aquí podrías mostrar un mensaje de éxito al usuario
            })
            .catch((error) => {
                console.error(error);
                // Aquí podrías mostrar un mensaje de error al usuario
            });
      
    };
    return(
        <div>
            <Container>
                <br></br>
                <h4>Ingresar Datos</h4>


        <Form onSubmit={hadleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="name"  placeholder="Ingresar Nombre"  onChange={handleChange} />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email"  placeholder="Ingresar Email" onChange={handleChange} />
                    
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text"  name="mobile" placeholder="Ingresar Telefono" onChange={handleChange}/>
            </Form.Group>

           
            <Button variant="primary" type="submit">
               Crear
            </Button>
            </Form>
            </Container>
        </div>
       
    )
}