import React, {useState, useEffect} from 'react';
import Bookings from './components/Bookings';
import Meals from './components/Meals';
import Error from './components/Error';


function App() {
    const [guestArr, setGuestArr] = useState([]);
    const [dateArr, setDateArr] = useState([]);
    const [mealsArr, setMealsArr] = useState([]);
    const [errArr, setErrArr] = useState([]);


    const countDays = str => {
        const arr = str.split(' ');
        const start = Date.parse(arr[0]);
        const end = Date.parse(arr[2]);
        if (start >= end) {
            return -1;
        }
        const diff = (end - start) / 3600000 / 24;
        return [diff, start];
    }

    const generateMeals = e => {
        let i = 0;
        let j = 0;
        const errs = [];
        const entryArr = [];
        const mealsData = [];
        while (i < guestArr.length && j < dateArr.length) {
            let obj = {}
            const [diff, start] = countDays(dateArr[j]);
            if (diff !== -1) {
                obj.guest = guestArr[i];
                obj.start = start;
                obj.days = diff;
                entryArr.push(obj);
            } else {
                errs.push(guestArr[i]);
            }
            i += 1;
            j += 1;
        }
        while (i < guestArr.length) {
            errs.push(guestArr[i]);
            i += 1;
        }
        console.log(entryArr);
        for (let k = 0; k < entryArr.length; k++) {
            let count = 0;
            let date = entryArr[k].start;
            while (count < entryArr[k].days) {
                let element = [];
                let day = new Date(date);
                element.push(entryArr[k].guest);
                element.push(day);
                element.push(date);
                date += 86400000
                count += 1;
                mealsData.push(element);
            }

        }
        const mealsDataSorted = mealsData.sort((a, b) => (a[2] - b[2]));
        console.log(mealsDataSorted)
        setMealsArr(mealsDataSorted);
        setErrArr(errs);
    }

    return (<div className="container-fluid">
        <center>
            <h2>Hacker Hostel</h2>
        </center>
        <div className="container">
            <Bookings
                setGuestArr={setGuestArr}
                setDateArr={setDateArr}
                generateMeals={generateMeals}
            />
            {mealsArr.map(el => (<Meals name={el[0]} date={el[1]} />))}
            {errArr.map(el => (<Error name={el} />))}
        </div>
    </div>);
}

export default App;