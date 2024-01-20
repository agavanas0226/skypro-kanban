import Card from "../Card/Card";
function Column (props) {
   return (
    <div className="main__column">
    <div className="column__title">
        <p>{props.name}</p>
    </div>
    <div className="cards">
    {props.cardList.map((card) => (
        <Card name={card.title}
        theme={card.theme}
        data={card.data}
        key={card.id}
        />
    ))}   
    </div>
    </div>
)
}
export default Column ;

 