export const getColor = (dateString: number | null) => {
  let settedColor = "#EDEDED";
  if (dateString) {
    if (dateString > 0 && dateString <= 9) {
      settedColor = "#ACD5F2";
    } else if (dateString > 9 && dateString <= 19) {
      settedColor = "#7FA8C9";
    } else if (dateString > 19 && dateString <= 30) {
      settedColor = "#527BA0";
    } else {
      settedColor = "#254E77";
    }
  }
  return settedColor;
};
