React responsive modal with features like Modal component and hook to manage the lifecycle of Modal.

### CodeSandbox link

[https://codesandbox.io/s/react-modal-utility-k3232l](https://codesandbox.io/s/react-modal-utility-k3232l)

# Components

## Modal

> Use Modal Component without useModalState hook

```js
import { Modal } from 'react-modal-utility';
import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);

  //Function to close when user clicks overlay
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <Modal close={closeModal} label="heading">
          <h1>This is modal</h1>
        </Modal>
      )}
    </>
  );
}
```

### Optional props

- Close (function): To close modal. If excluded then manual close is disabled.
- label (string): heading of the modal
- backdrop (boolean): Specifies weather to close modal when user clicks background
  - Default: true
- animate (string): "fade-in", "pop-down", "pop-up", "shrink-in", "expand-in","fade-down", "none"
  - Default: "fade-down"
- style (object): user defined style for Modal
- className (string): className for modal
- labelStyle (object): User defined style to label
- labelClassName (string): className for label
- hideCloseIcon (boolean): To Hide close icon
- fullScreen (boolean): Specifies weather modal needs to fit full window screen 

# Hooks

## useModalState

> Optional Hooks used to easily manage lifecycle of the modal
> Use Modal with 'useModalState' hook

```js
import { Modal, useModalState } from 'react-modal-utility';

export default function App() {
  //Variables can be customised
  const [isModalOpen, openModal, closeModal] = useModalState(false);

  return (
    <>
      {isModalOpen && (
        <Modal
          close={closeModal}
          label="heading"
          style={{ padding: '10px' }}
          className="modal-style"
          animate="pop-down"
        >
          <h1>This is modal</h1>
        </Modal>
      )}
    </>
  );
}
```
