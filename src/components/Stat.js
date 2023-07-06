const Stats = ({ item }) => {
  if (!item.length)
    return (
      <p className="stats">
        <em>Start planning your day!</em>
      </p>
    );

  let noOfCompleted = item.filter((el) => el.completed === true).length;
  let taskNo = item.length;
  let percentage = Math.round((noOfCompleted / taskNo) * 100);

  return (
    <footer className="stats">
      <p>
        {percentage < 100 ? (
          <em>
            You have {taskNo} tasks on your list and you have completed{" "}
            {noOfCompleted ? noOfCompleted : "nil"} (
            {((noOfCompleted / taskNo) * 100).toFixed(1)}%)
          </em>
        ) : (
          <em>You got everything checked off! Time to rest 🛏️</em>
        )}
      </p>
      <p className="attribution">Made with ❤️ by JonnieDev</p>
    </footer>
  );
};

export default Stats;
