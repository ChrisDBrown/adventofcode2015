module.exports = (instruction) => {
  const parsed = instruction.match(/(.*) (\d+),(\d+) through (\d+),(\d+)/);

  return {
    type: parsed[1],
    x1: Math.min(parsed[2], parsed[4]),
    y1: Math.min(parsed[3], parsed[5]),
    x2: Math.max(parsed[2], parsed[4]),
    y2: Math.max(parsed[3], parsed[5]),
  };
};
