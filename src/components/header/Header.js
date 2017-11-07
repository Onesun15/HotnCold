import React from 'react';

import Navigation from '../navigation/Navigation';
import Modal from '../modal/Modal';

import './Header.css';

export default function Header() {
  return (
    <header>
      <Navigation />
      <Modal />
      <h1>HOT or COLD</h1>
    </header>
  );
}
