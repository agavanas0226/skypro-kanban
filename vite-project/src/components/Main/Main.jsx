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
        <main className="main">
			<div className="container">	
				<div className="main__block">
					<div className="main__content">
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
						
						
					</div>
				</div>
			</div>
		</main>
    )
}
export default Main