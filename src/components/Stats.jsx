const Stats = ({ items }) => {
  if (items.length === 0) {
    return <footer>
    <em>Start adding some items to your packing list 💼</em>
  </footer>
  }
  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const packedPercentage = numPacked===0 ? 0 : Math.round((numPacked/numItems)*100)
  return (
    <footer>
      <em>{packedPercentage===100 ? 'You have everything! Ready to go ✈️': `You have ${numItems} in your list and you already packed ${numPacked} (${packedPercentage}%)`}</em>
    </footer>
  );
};

export default Stats;