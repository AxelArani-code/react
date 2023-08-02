import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import './App.css';
import ListUser from './Components/ListUser';
import CreateUser from './Components/CreateUser';
import EditUser from './Components/EditUser';
import NavigateApp from './Components/Navigation';

import {Container} from 'react-bootstrap';



function App() {
  //const [value, setValue] = React.useState(0);
  return (
 
    <div >
      <Container> 
          <BrowserRouter>
             <NavigateApp/>
            <Routes>
              <Route index element={<ListUser/>} />
              <Route path='user/create' element={<CreateUser/>} />
              <Route path='user/:id/edit' element={<EditUser/>} />
            </Routes>
          </BrowserRouter>
    </Container>
    </div>
  );
}

export default App;
