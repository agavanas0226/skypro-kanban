import { Container, MainBlock, MainContent } from "../Card/Card.styled";
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
		<Main>
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
		</Main>
    )
}
export default Main