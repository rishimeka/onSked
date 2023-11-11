import Calendar from "react-calendar";
import './App.css';
const MonthlyCalender = (props) => {
    return(
        <div>
            <Calendar value={new Date()}
                      defaultValue={"month"}
                      tileClassName={'calender_tile_class'}
                      minDetail={"year"}
            />
        </div>
    )
}

export default MonthlyCalender;
