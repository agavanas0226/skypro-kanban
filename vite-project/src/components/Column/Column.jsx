import Card from "../Card/Card";
import { CardsColumn, ColumnTitle, MainColumn,  } from "../Column/Column.styled";
function Column (props) {
   return (
    <MainColumn>
    <ColumnTitle>
        <p>{props.name}</p>
    </ColumnTitle>
    <CardsColumn>
    {props.cardList.map(card => {
        return (<Card 
        key={card._id}
        id={card._id}
        name={card.title}
        theme={card.theme}
        data={card.data}
        />)
    })}   
    </CardsColumn>
    </MainColumn>
)
}
export default Column ;

 