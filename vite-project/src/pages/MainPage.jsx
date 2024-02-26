import Main from "../components/Main/Main";
import Header from "../components/Header/Header";
import Wrapper from "../components/Wrapper/Wrapper";
import PopExit from "../components/popExit/popExit";
import PopNewCard from "../components/popNewCard/popNewCard";
import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getTasks } from "../API/api";
import { useUser } from "../hooks/useUser";
import { TasksContext } from "../contexts/tasks";


export default function MainPage() {
  const { userData } = useUser();

  const {setTasksData} = useContext(TasksContext);
 
  const [isOpened, setIsOpened] = useState(false);


  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    getTasks({ token: userData.token })
      .then((data) => {
        console.log(data);
        setTasksData(data.tasks);
      })

      .then(() => {
        setIsLoaded(false);
      });
  }, []);

  function handleOpenPopUp() {
    setIsOpened(true);
  }
  function handleClosePopUp() {
    setIsOpened(false);
  }
  return (
    <>
      <Wrapper>
        <PopExit />
        {isOpened ? <PopNewCard handleClosePopUp={handleClosePopUp} /> : null}
        <Outlet />
        <Header addCard={handleOpenPopUp} />
        <Main isLoaded={isLoaded}  />
      </Wrapper>
    </>
  );
}
