import React from "react";

const TodoForm = (props) => {
    const { handleSubmit, todoText, setTodoText, isEdit } =props;

    return (
        <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
      <input value={todoText} type="text" 
      className="form-control text-bg-info" 
      placeholder="Type Your Todo" onChange={(event)=>setTodoText(event.target.value)}
      />
      <button className={`btn btn-${isEdit === true ? "success" : "primary"}`}
      type="submit">
        {isEdit === true ? "Save Your Todo" : "Add Your Todo"}
      </button>
      </div>
      </form>

    )
}
export default TodoForm;