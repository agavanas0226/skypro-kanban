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
        console.log(props.cardList)
        return (<Card 
        key={card._id}
        id={card._id}
        name={card.title}
        theme={card.topic}
        date={card.date}
        />)
    })}   
    </CardsColumn>
    </MainColumn>
)
}
export default Column ;

 