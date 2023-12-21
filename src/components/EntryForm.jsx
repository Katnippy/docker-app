export default function EntryForm({ id, entry: { identifier, info } }) {
  return (
    <form style={{margin: "16px 0"}}>
      <label htmlFor={id}>{identifier}: </label>
      <input id={id} value={info}></input>
    </form>
  );
}
