import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'
import ModalPopup from './sample';


function App() {

  const[tableData, setTableData] = useState(null);
  const[tempData, setTempData] = useState({});

  //for modal 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setShow(true);
    setTempData(data);
  };

  useEffect(()=>{
    fetch('https://67723bc2ee76b92dd491840c.mockapi.io/User_data/User_data', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(tasks => {
  setTableData(tasks);  // data comes in api
}).catch(error => {
  console.log(error);
})
  }, [])

  console.log(tableData);

  return (
    <>
    <Container fluid className='p-3'>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr className='fs-2 text-center'>
          <th>S.No</th>
          <th>Name</th>
          <th>Email-Id</th>
          <th>Location</th>
          <th>Qualification</th>
          <th>PhoneNo</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className='fs-5 text-center'>
        {tableData&&tableData.map((item, i)=>(
          <tr>
          <td>{i+1}</td>
          <td>{item.name}</td>
          <td>{item.emailId}</td>
          <td>{item.location}</td>
          <td>{item.qualification}</td>
          <td>{item.phoneNo}</td>
          <td>
            <Button variant='success' onClick={()=>handleShow(item)}> Edit </Button>&nbsp;
            <Button variant="danger"> Delete </Button>
          </td>
        </tr>
        ))}

        {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr> */}
      </tbody>
    </Table>
    </Container>

      <ModalPopup status={show} close={handleClose} cellData={tempData} updateData={setTempData}/>
    </>
  
  )
}

export default App