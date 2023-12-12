export const getContributionText = (dateString: number | null) => {
  let res = "Нет контрибуций";
  if (dateString) {
    if (dateString > 0 && dateString <= 9) {
      res = "1-9 контрибуций";
    } else if (dateString > 9 && dateString <= 19) {
      res = "10-19 контрибуций";
    } else if (dateString > 19 && dateString <= 30) {
      res = "20-29 контрибуций";
    } else if (dateString > 30) {
      res = "30+ контрибуций";
    }
  }
  return res;
};
