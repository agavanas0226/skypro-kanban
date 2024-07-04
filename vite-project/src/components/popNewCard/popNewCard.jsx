import { useContext, useEffect, useState } from "react";
import Calendar from "../Calendar/Calendar";
import { useUser } from "../../hooks/useUser";
import { postNewTask } from "../../API/api";
import { TasksContext } from "../../contexts/tasks";
import { CalendarBlock, FormNewInput, Label1, Label2, Label3, PopNewCardBlock, FormNewArea, FormNewBlockInput, FormNewBlockArea, PopNewCardForm, PopNewCardWrap, Input2, Input1, Input3 } from "./popNewCard.styled";

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
    if (!newTask.title.trim() || !newTask.topic.trim() || !newTask.description.trim() || !newTask.status.trim()
    || !selected) return alert("Заполните поля")
      
      postNewTask({ token: userData.token, ...newTask }).then(response =>{
      setTasksData(response.tasks);
      handleClosePopUp();
    })
    .catch((error) => {
      console.warn(error)
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
        <PopNewCardBlock >
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
            <PopNewCardWrap className="pop-new-card__wrap">
              <PopNewCardForm
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <FormNewBlockInput className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <FormNewInput
                    className="form-new__input"
                    value={newTask.title}
                    onChange={handleInputChange}
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </FormNewBlockInput>
                <FormNewBlockArea className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <FormNewArea
                    className="form-new__area"
                    value={newTask.description}
                    onChange={handleInputChange}
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></FormNewArea>
                </FormNewBlockArea>
              </PopNewCardForm>
              <CalendarBlock className="pop-new-card__calendar calendar">
                <Calendar className="calendarBlocked" selected={selected} setSelected={setSelected} />
              </CalendarBlock>
            </PopNewCardWrap>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div className="prod_checbox">
                  <div className="radio-toolbar">
                    {/*пропустить через метод map  */}
                    {/* array for theme(s) */}
                    {/* _orange */}
                    <Input1
                      type="radio"
                      id="radio1"
                      name="topic"
                      value={"Web Design"}
                      onChange={handleInputChange}
                    />
                    <Label1  for="radio1">Web Design</Label1>

                    {/* _green */}
                    <Input2
                      type="radio"
                      id="radio2"
                      name="topic"
                      value={"Research"}
                      onChange={handleInputChange}
                    />
                    <Label2 for="radio2">Research</Label2>

                    {/* _purple */}
                    <Input3
                      type="radio"
                      id="radio3"
                      name="topic"
                      value={"Copywriting"}
                      onChange={handleInputChange}
                    />
                    <Label3 for="radio3">Copywriting</Label3>
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
        </PopNewCardBlock>
      </div>
    </div>
  );
}
export default PopNewCard;
