const Stats = ({ items }) => {
  const numItems = items.length;
  return (
    <footer>
      <em>💼 You have {numItems} items on your list and you already packed X (X%)</em>
    </footer>
  );
};

export default Stats;
