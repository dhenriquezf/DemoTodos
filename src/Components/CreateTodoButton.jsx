import React from 'react';
import '../Css/CreateTodoButton.css';

const CreateTodoButton = ({ setOpenModal }) => {
  const onClickButton = () => {
    setOpenModal(preState => !preState)
  };
  
  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
