const calcDistance = ({
  codeArray,
  station_code,
}: {
  codeArray: number[];
  station_code: number;
}) => {
  const leastDifference = codeArray.reduce((acc, currentCode, index) => {
    if (index === 0) {
      return Math.abs(station_code - currentCode);
    } else if (acc > Math.abs(station_code - currentCode)) {
      return Math.abs(station_code - currentCode);
    } else {
      return acc;
    }
  }, 0);
  console.log({ codeArray, station_code, leastDifference });

  return leastDifference;
};

export default calcDistance;
