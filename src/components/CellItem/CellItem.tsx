import ArrowIcon from "../../assets/ArrowIcon";
import { getContributionText } from "../../utils/getContributionText";
import { getFormattedDate } from "../../utils/getDates";
import { CellItemPropTypes } from "./CellItem.types";

const CellItem = ({ date, dateString }: CellItemPropTypes) => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 10000,
        left: -80,
        width: 180,
        top: -55,
        background: "#000",
        color: "#fff",
        height: 50,
        borderRadius: 3,
        textAlign: "center",
      }}
    >
      <div>
        <div>
          <div>
            <span style={{ fontSize: 12 }}>
              {getContributionText(dateString)}
            </span>
          </div>
          <span style={{ color: "#7C7C7C", fontSize: 10 }}>
            {getFormattedDate(date)}
          </span>
        </div>
      </div>
      <div style={{ position: "absolute", top: 40, left: "calc(50% - 7px)" }}>
        <ArrowIcon />
      </div>
    </div>
  );
};

export default CellItem;
