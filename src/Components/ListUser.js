import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import {Button} from "react-bootstrap";

export default function ListUser(){


    const [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers();
    }, []);

    function getUsers(){
        axios.get('http://192.168.1.9/api/users/').then(function(response){
            console.log(response.data);
            setUsers(response.data);
        });
    
        
    }
    const deleteUser =   (id) =>{
        axios.delete(`http://192.168.1.9/api/user/${id}/delete`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }
    return(
        <div>
            <br></br>
            <h2>Listado de usuario</h2>
       <Table striped bordered hover>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user,key)=>
            <tr key ={key}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>

                <td>
            
                        <Link to={`user/${user.id}/edit`} style={{marginRight:"10px"}}  ><Button variant="success" >Editar</Button></Link>
                        
                        <Button onClick={() => deleteUser(user.id)} variant="danger" >Delate</Button>
                    
                </td>

            </tr>
            )}
        </tbody>
       </Table>
       </div>
       
    )
}