import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';


function ModalPopup(abc) {
    const {name, emailId, location, qualification, phoneNo} = abc.cellData;

    console.log(abc.cellData);

    const saveChanges=() =>{

      
fetch(`https://67723bc2ee76b92dd491840c.mockapi.io/User_data/User_data${abc.cellData.id}`, {
  method: 'PUT', // or PATCH
  headers: {'content-type':'application/json'},
  body: JSON.stringify({completed: true})
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  // Do something with updated task
}).catch(error => {
  // handle error
})
    } 
  return (
    
    <Modal show={abc.status} onHide={abc.close}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                autoFocus
                defaultValue={name}
                onChange={(e)=>abc.updateData({...abc.cellData, name: e.target.value})}
              />
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="emailId"
                placeholder="Enter your email-id"
                defaultValue={emailId}
                onChange={(e)=>abc.updateData({...abc.cellData, emailId: e.target.value})}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name='location'
                placeholder="Enter your your location"
                defaultValue={location}
                onChange={(e)=>abc.updateData({...abc.cellData, location: e.target.value})}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                name="qualification"
                placeholder="Enter your qualification"
                defaultValue={qualification}
                onChange={(e)=>abc.updateData({...abc.cellData, qualification: e.target.value})}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your Phone number"
                defaultValue={phoneNo}
                onChange={(e)=>abc.updateData({...abc.cellData, phoneNo: e.target.value})}
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={abc.close}>
            Close
          </Button>
          <Button variant="primary" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default ModalPopup