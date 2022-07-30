import { useState } from 'react';

export type UseModalReturn = [boolean, () => void, () => void];

//Hook to implement modals states
export const useModalState = (value: boolean): UseModalReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(value);

  const open = () => {
    setIsOpen(true);
  };

  const close = (): void => {
    setIsOpen(false);
  };

  return [isOpen, open, close];
};
