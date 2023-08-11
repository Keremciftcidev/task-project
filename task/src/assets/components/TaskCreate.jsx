import { useState } from "react";

function TaskCreate({ onCreate, task, taskformUpdate ,onUpdate}) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    if(taskformUpdate){
      onUpdate(task.id,title,taskDesc)
    }else{
    onCreate(title, taskDesc);
      
    }
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskformUpdate ? (
        <div className="task-update2">
          <h3>Lütfen Taskı Düzenleyiniz</h3>
          <form className="task-form">
            <label className="task-label">Başlığı düzenleyiniz</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task Düzenleyiniz</label>
            <textarea
              rows={5}
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
            />
            <button onClick={handleClick} className="task-button update-button">
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task Giriniz</label>
            <textarea
              rows={5}
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
            />
            <button onClick={handleClick} className="task-button ">
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
