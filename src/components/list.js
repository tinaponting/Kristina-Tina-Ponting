import React from 'react';
import ListItem from './list_item';

const List = ({ data }) => (
  <section>
    <h1 className="section-header">{data.title}</h1>
    <div className="py-3">
      {data.items.map(item => (
        <ListItem key={`${item}-li`} text={item} />
      ))}
    </div>
  </section>
);

export default List;
