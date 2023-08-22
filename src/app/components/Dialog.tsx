'use client';

import { useContext } from 'react';
import { DialogContext } from '../contexts/DialogContext';

export interface DialogProps {}

export function Dialog(props: DialogProps) {
  const { open, toggle } = useContext(DialogContext);

  return (
    <>
      {open && <div>Dialog</div>}
      <button onClick={toggle}>toggle</button>
    </>
  );
}
