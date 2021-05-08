import React from 'react';
import BoltIcon from '../assets/bolt.svg';

const ListItem = ({ text }) => (
  <div className="my-1">
    <BoltIcon className="inline-block h-3 fill-current text-secondary-500" />
    <span className="inline-block font-medium ml-2">{text}</span>
  </div>
);

export default ListItem;
