import { useState } from "react";
import { getColor } from "../../utils/getColor";
import CellItem from "../CellItem";
import styles from "./Cell.module.scss";

const Cell = ({
  dateString = 0,
  date,
}: {
  dateString: number | null;
  date: string;
}) => {
  const style = {
    backgroundColor: getColor(dateString),
  };
  const [isShowed, setIsShowed] = useState(false);
  const handleMouseIn = () => setIsShowed(true);
  const handleMouseOut = () => setIsShowed(false);
  return (
    <div
      onMouseOver={handleMouseIn}
      onMouseOut={handleMouseOut}
      className={styles.cell__wrapper}
      style={style}
    >
      {isShowed ? (
        <CellItem date={date} dateString={dateString ? dateString : 0} />
      ) : null}
    </div>
  );
};

export default Cell;
