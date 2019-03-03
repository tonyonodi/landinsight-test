const groupOpacity = [2.5, 15, 50, 85, 97.5];

const groupBoundaries = [5, 25, 75, 95, 100];

export const getPercentile = (position, dataSize) =>
  (position / dataSize) * 100;

export default (position, dataSize) => {
  const percentile = getPercentile(position, dataSize);
  const groupIndex = groupBoundaries.findIndex(
    boundary => percentile < boundary
  );
  const opacity = groupOpacity[groupIndex];

  return `rgba(255, 0, 0, ${opacity / 100})`;
};
