import {MainHat, Container, MainBlock, MainContent,  } from "../Main/Main.styled";
import Column from "../Column/Column";

const statusList = [
	"Без статуса",
	"Нужно сделать",
	"В работе",
	"Тестирование",
	"Готово",
];

function Main({cardList, isLoaded}){
    return(
		<MainHat>
			<Container>
				<MainBlock>
					<MainContent>
						{
						isLoaded ? 'Loading' :
						statusList.map((item) => (
							<Column 
							name={item}
							key={item}
							cardList={cardList.filter((card) => card.status === item)}
							/>
						))
						}
				</MainContent>
				</MainBlock>
			</Container>
		</MainHat>
    )
}
export default Main