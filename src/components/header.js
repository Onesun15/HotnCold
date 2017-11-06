import React from 'react';

import Navigation from './navigation';
import Modal from './modal';

import './style/header.css';

export default function Header(props) {
    return (
        <header>
             <Navigation />
             <Modal />
            <h1>{props.title}</h1>
        </header>
    );
};

Header.defaultProps = {
    title: 'HOT or COLD'
};

