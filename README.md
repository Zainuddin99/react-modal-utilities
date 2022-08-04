React responsive modal with full fledged features like Modal component and hook to manage the lifecycle.

# Components

## Modal
> To use modal in your project
> Install the pacakge

```bash
npm i react-modal-utilities
```

> Use Modal Component without hook

```js
import { Modal } from 'react-modal-utilities'
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false)

  //Function to close when user clicks overlay
  const closeModal = () =>{
    setOpen(false)
  }

  return (
    <>
    {
      open && (<Modal close={closeModal} label="heading" style={{padding: "10px"}} className="modal-style" animate="pop-down" >
      <h1>This is modal</h1>
    </Modal>)
    }
    </>
  );
}
```
### Optional props
- label<string>: heading of the modal
- backdrop<boolean>: Specifies weather to close modal when user clicks background
  - Default: true
- animate<string>: "fade-in", "pop-down", "fade-down", "none"
  - Default: "fade-down"
<<<<<<< Updated upstream
- style<object>: user defined style for Modal
- className<string>: className for modal
- labelStyle<object>: User defined style to label
- labelClassName<string>: className for label
=======
- style (object): user defined style for Modal
- className (string): className for modal
- labelStyle (object): User defined style to label
- labelClassName (string): className for label
- fullScreen (boolean): specifies weather the modal should fit full window screen
- hideCloseIcon (boolean): Specifies to hide close icon
>>>>>>> Stashed changes

# Hooks

## useModalState
> Optional Hooks used to easily manage lifecycle of the modal
> Use Modal with 'useModalState' hook

```js
import { Modal, useModalState } from 'react-modal-utilities'

export default function App() {
  //Variables can be customised
  const [isModalOpen, openModal, closeModal] = useModalState(false)

  return (
    <>
    {
      isModalOpen && (<Modal close={closeModal} label="heading" style={{padding: "10px"}} className="modal-style" animate="pop-down" >
      <h1>This is modal</h1>
    </Modal>)
    }
    </>
  );
}
```








