import { useContext, useEffect, useState } from "react";
import Calendar from "../Calendar/Calendar";
import { useUser } from "../../hooks/useUser";
import { postNewTask } from "../../API/api";
import { TasksContext } from "../../contexts/tasks";

function PopNewCard({ handleClosePopUp }) {
  const { userData } = useUser();

  const {setTasksData} = useContext(TasksContext);


  const [selected, setSelected] = useState();
//сделать state под категории
  const [newTask, setNewTask] = useState({
    title: "",
    topic: "",
    description: "",
    status: "Без статуса",
  });

  let newCard = {
    ...newTask,
    data: selected,
  };
  console.log(newCard);

  const handleButtonClick = () => {
    postNewTask({ token: userData.token, ...newTask }).then(response =>{
      setTasksData(response.tasks);
      handleClosePopUp();
    })

  };
  //
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение
    console.log(name, value)
    setNewTask({
      ...newTask, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  useEffect(() => {
    if (selected) {
      setNewTask({
        ...newTask,
        date: selected,
      });
    }
  }, [selected]);
//добавитьь статусы и навесить handleinpurchange//
  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <a
              href="#"
              className="pop-new-card__close"
              onClick={(event) =>{
                event.preventDefault();
                handleClosePopUp();
              }}
            >
              &#10006;
            </a>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    value={newTask.title}
                    onChange={handleInputChange}
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    value={newTask.description}
                    onChange={handleInputChange}
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <div className="pop-new-card__calendar calendar">
                <Calendar selected={selected} setSelected={setSelected} />
              </div>
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div className="prod_checbox">
                  <div className="radio-toolbar">
                    {/*пропустить через метод map  */}
                    {/* array for theme(s) */}
                    {/* _orange */}
                    <input
                      type="radio"
                      id="radio1"
                      name="topic"
                      value={"Web Design"}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="radio1">Web Design</label>

                    {/* _green */}
                    <input
                      type="radio"
                      id="radio2"
                      name="topic"
                      value={"Research"}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="radio2">Research</label>

                    {/* _purple */}
                    <input
                      type="radio"
                      id="radio3"
                      name="topic"
                      value={"Copywriting"}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="radio3">Copywriting</label>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="form-new__create _hover01"
              id="btnCreate"
              onClick={handleButtonClick}
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PopNewCard;
