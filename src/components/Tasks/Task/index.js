function Task({ id, name, status, onStatus, onRemove }) {
  function handleChangeStatus() {
    onStatus(id);
  }
  function handleRemoveTask() {
    onRemove(id);
  }

  return (
    <div className="main">
      <h2>{name}</h2>
      <p>{id}</p>
      <p>{status}</p>
      <button onClick={handleChangeStatus}>Change status</button>
      <button onClick={handleRemoveTask}>Remove Task</button>
    </div>
  );
}
export default Task;
