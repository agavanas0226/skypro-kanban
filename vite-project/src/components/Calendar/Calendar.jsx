import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import {format} from 'date-fns';
import ru from 'date-fns/locale/ru';

 function Calendar({selected, setSelected}){

    let footer = <p>Please pick a day</p>;
    if (selected){
        footer = <p>You picked {format(selected, 'PP', {locale: ru})}.</p>;
    }
    return (
        <DayPicker locale={ru}
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
        />
    );
}
export default Calendar