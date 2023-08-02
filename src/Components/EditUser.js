import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function EditUser(){

    const navigate = useNavigate();
   const [inputs, setInputs] = useState([])

   // const [users, setUsers] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        getUser();
    }, []);

    function getUser(){
        axios.get(`http://192.168.1.9/api/user/${id}`).then(function(response){
            console.log(response.data);
            setInputs(response.data);
        });
    
        
    }

 

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    };

    const hadleSubmit =(event)=>{
        event.preventDefault();

        axios.put(`http://192.168.1.9/api/user/${id}/edit`, inputs) 
            .then((response) => {
                console.log(response.data);
                navigate('/');
              
            })
            .catch((error) => {
                console.error(error);
                
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
            <Form.Control type="text" name="name"  value={inputs.name}  onChange={handleChange} />
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email"  value={inputs.email} onChange={handleChange} />
                
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="text"  name="mobile" value={inputs.mobile} onChange={handleChange}/>
        </Form.Group>

       
        <Button variant="success" type="submit">
           Editar
        </Button>
        </Form>
        </Container>
    </div>
    )
}