// Contact Dialog
// TODO - Create Form Handling

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Dialog, TextInput, } from 'evergreen-ui'
  
export const Contact = () => {
  
  const [openDialog, setOpenDialog] = React.useState(true)
  const navigate = useNavigate();

  
  return (
    <div style={{
      display: 'block', width: 900, paddingLeft: 30
    }}>
  
      <Dialog
        isShown={openDialog}
        title="Contact Me"
        confirmLabel="Submit"
        onCloseComplete={() => {
          setOpenDialog(false)
          navigate(-1)
        }
        }
      >
        <form>
          <TextInput 
            required='true'
            placeholder='Name'
          />
          <TextInput 
            required='true'
            placeholder='Email'
          />
          <TextInput 
            required='true'
            placeholder='Message'
          />

        </form>
      </Dialog>
    </div>
  );
}