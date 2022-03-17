export const getSortedData = (data, sortBy) => {
    if (sortBy === "lowtoHigh")
      return [...data].sort((a, b) => a.price - b.price);
    if (sortBy === "hightoLow")
      return [...data].sort((a, b) => b.price - a.price);
    return data;
  };
  