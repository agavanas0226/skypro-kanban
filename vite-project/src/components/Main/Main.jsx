import {MainHat, Container, MainBlock, MainContent,  } from "../Main/Main.styled";
import Column from "../Column/Column";
import { useContext } from "react";
import { TasksContext } from "../../contexts/tasks";

const statusList = [
	"Без статуса",
	"Нужно сделать",
	"В работе",
	"Тестирование",
	"Готово",
];

function Main({ isLoaded}){
	const {tasksData} = useContext(TasksContext);
    return(
		<MainHat>
			<Container>
				<MainBlock>
					<MainContent>
						{
						isLoaded ? 'Loading' :
						statusList.map(item => {
							return (<Column 
							name={item}
							key={item}
							cardList={tasksData.filter((card) => card.status === item)}
							/>)
						})
						}
				</MainContent>
				</MainBlock>
			</Container>
		</MainHat>
    )
}
export default Main