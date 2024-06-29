const Stats = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const packedPercentage = Math.round((numPacked/numItems)*100)
  return (
    <footer>
      <em>💼 You have {numItems} items on your list and you already packed {numPacked} (X%)</em>
    </footer>
  );
};

export default Stats;