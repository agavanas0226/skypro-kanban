import { useNavigate, useParams } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import { useState } from "react";
import { appRoutes } from "../../lib/appRoutes";
import { useUser } from "../../hooks/useUser";
import { editTask } from "../../API/api";
import { useTask } from "../../hooks/useTask";
import { ButtonExit, ButtonGroup, CalendarBlock, PopBrowseBlock, PopBrowseForm, PopBrowseStatus, PopBrowseWrap, StatusThemes } from "./popBrowse.styled";
import { FormNewArea, FormNewBlockArea } from "../popNewCard/popNewCard.styled";
// import {useTask} from "../../hooks/useTask";


function PopBrowse({id}) {
  const navigate = useNavigate();
  const {cardId} = useParams();
  const { userData } = useUser();
  const { tasksData, returnTask } = useTask();
  const task = tasksData.find((task) => task._id === cardId);
  const [selected, setSelected] = useState(task.date);
  const [isEdit, setIsEdit] = useState(false);

  const [editedTask, setEditedTask] = useState({
    title: task?.title,
    topic: task?.topic,
    status: task?.status,
    description: task?.description,
    date: task?.date,
  });
  const handleInputChange = (e) => {
    console.log("item editing");
    const { name, value } = e.target;
    setEditedTask({
      ...editedTask,
      [name]: value,
    });
  };
  const editCard = async (e) => {
    e.preventDefault();

    const taskData = {
      ...editedTask,
      date: selected,
      token: userData.token,
    };
    console.log(editedTask);

    await editTask({
      id,
      token: userData.token,
    })
    .then((data) => {
      returnTask(data.userData);
      navigate(appRoutes.HOME);
    })
    .catch((error) => {
      console.error(error);
    })
  };
  const deleteCard = async (e) => {
    e.preventDefault();

    await deleteCard({
      id,
      token: userData.token,
    })
    .then((data) => {
      returnTask(data.userData);
      navigate(appRoutes.HOME);
    })
    .catch((error) => {
      console.error(error);
    })
  };
  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <PopBrowseBlock className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{editedTask.title}</h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">{editedTask.topic}</p>
              </div>
            </div>
            <PopBrowseStatus className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              {isEdit && (
              <StatusThemes className="status__themes">
              <div className="status__theme ">
                <p>Без статуса</p>
              </div>
              <div className="status__theme _gray">
                <p className="_gray">Нужно сделать</p>
              </div>
              <div className="status__theme ">
                <p>В работе</p>
              </div>
              <div className="status__theme ">
                <p>Тестирование</p>
              </div>
              <div className="status__theme">
                <p>Готово</p>
              </div>
            </StatusThemes>

              )}
            </PopBrowseStatus>
            <PopBrowseWrap className="pop-browse__wrap">
              <PopBrowseForm
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <FormNewBlockArea className="form-browse__block">
                  <label
                    htmlFor="textArea01"
                    className="subttl"
                    onChange={handleInputChange}
                    name="description"
                    id="textArea01"
                    placeholder="Enter task description..."
                  >
                    Описание задачи
                  </label>
                  <FormNewArea
                  value={editedTask.description}
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></FormNewArea>
                </FormNewBlockArea>
              </PopBrowseForm>
              <CalendarBlock className="pop-new-card__calendar calendar">
                <Calendar className="calendarBlocked" selected={selected} setSelected={setSelected} />
              </CalendarBlock>
            </PopBrowseWrap>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">{editedTask.topic}</p>
              </div>
            </div>
            <ButtonGroup className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button
                  className="btn-browse__edit _btn-bor _hover03"
                  onClick={() => setIsEdit(true)}
                >
                  Редактировать задачу
                </button>
                <button
                  className="btn-browse__delete _btn-bor _hover03"
                  onClick={deleteCard}
                >
                  Удалить задачу
                </button>
              </div>
              <ButtonExit>
              <button
                className="btn-browse__close _btn-bg _hover01"
                onClick={() => navigate(appRoutes.MAIN)}
              >
                Закрыть
              </button>
              </ButtonExit>
            </ButtonGroup>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  Сохранить
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                  onClick={deleteCard}
                >
                  Удалить задачу
                </button>
              </div>
              <button
                className="btn-edit__close _btn-bg _hover01"
                onClick={appRoutes.HOME}
              >
                Закрыть
              </button>
            </div>
          </div>
        </PopBrowseBlock>
      </div>
    </div>
  );
}
export default PopBrowse;
