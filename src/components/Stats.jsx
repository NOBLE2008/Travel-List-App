const Stats = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const packedPercentage = numPacked===0 ? 0 : Math.round((numPacked/numItems)*100)
  return (
    <footer>
      <em>{packedPercentage===100? `You got Everything. Ready to go✈️`:  `💼 You have ${numItems} items on your list and you already packed ${numPacked} (${packedPercentage}%)`}</em>
    </footer>
  );
};

export default Stats;