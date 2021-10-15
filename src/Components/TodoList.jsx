import React from 'react';
import '../Css/TodoList.css'

const TodoList = props => {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };
