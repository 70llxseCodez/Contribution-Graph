import Cell from "./components/Cell";
import "./App.scss";
import { months, weekDays, getDaysInYear } from "./utils/getDates";
import { useEffect, useState } from "react";
import { getData } from "./api/getData";

function App() {
  const [data, setData] = useState<string[] | null>(null);
  const [fullData, setFullData] = useState(null);
  useEffect(() => {
    getData().then((data) => {
      setData(Object.keys(data));
      setFullData(data);
    });
  }, []);

  const currentYear = new Date().getFullYear();
  const daysInYear = getDaysInYear(currentYear);

  if (!data || !fullData) return <>loading</>;
  return (
    <div className="App">
      <div className="contribution-wrapper-months">
        {months.map((item) => (
          <div className="contribution-wrapper-month-name">{item}</div>
        ))}
      </div>
      <div className="contribution-wrapper">
        <div className="contribution-wrapper-weeks">
          {[...Array(6)].map((_, i) => (
            <div className="contribution-wrapper-week-name">{weekDays[i]}</div>
          ))}
        </div>
        <div className="contribution-item-wrapper">
          {[...daysInYear.slice(1, 358)].map((date: string) => {
            return (
              <Cell
                date={date}
                dateString={fullData[date] ? fullData[date] : null}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
