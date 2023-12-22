import React, { useContext, useState } from 'react'
import { PersonContext } from '@/pages/decision';
import {v4 as uuidv4} from 'uuid';
import { 
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Form, 
  FormGroup, 
  Label, 
  Input 
} from 'reactstrap';

export default function TreeHead({parent}) {
    const {handlePersonDataAdd, handlePersonRelationHeadAdd} = useContext(PersonContext);

    const [newUser, setNewUser] = useState({id : uuidv4()});
  
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
  
    function addDetail(detail){
      setNewUser(prev => ({...prev, ...detail}));
    }
    // console.log(newUser);
  
    function save() {
      handlePersonDataAdd({...newUser});

      handlePersonRelationHeadAdd(newUser.id);


      console.log("save : ", newUser);
    //   console.log("new Rel : ", newRel);
      close();
    }
  
  
    function close() {
      setNewUser({id: uuidv4()});
      toggle();
    }

    return (
    <>
    <Button color="danger" size="sm" onClick={toggle}>
        +
    </Button>
        
    <div>
        <Modal className='absolute top-0 bg-yellow-100 w-full' isOpen={modal} toggle={toggle}>
            <ModalHeader className='mx-3 mt-2 font-bold' toggle={toggle}>Add New Person (child of {parent})</ModalHeader>
            <ModalBody>
            <Form className='space-y-2 mx-3'>
                <FormGroup>
            
                <Input
                   className='border border-gray-400 rounded px-2 py-1'
                    id="personName"
                    name="name"
                    placeholder="Enter person's name"
                    type="text"
                    onChange={e => addDetail({name: e.target.value})}
                />
                </FormGroup>
                <FormGroup>
               
                <Input
                className='border border-gray-400 rounded px-2 py-1'
                    id="personAge"
                    name="age"
                    placeholder="Enter person's age"
                    type="number"
                    onChange={e => addDetail({age: e.target.value})}
                />
                </FormGroup>
            </Form>
            </ModalBody>
            <ModalFooter>
            <Button className="text-white border mx-3 my-2 bg-yellow-800 rounded px-2 py-1" onClick={save}>
                Save
            </Button>
            <Button className="text-yellow-800 hover:text-white transition border border-yellow-800 mx-2 hover:bg-yellow-800 rounded px-2 py-1" onClick={close}>
                Cancel
            </Button>
            </ModalFooter>
        </Modal>
    </div>
    </>
  )
}
