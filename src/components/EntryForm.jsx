import PropTypes from 'prop-types';

export default function EntryForm({ id, onChange, entry: { identifier, info } }) {
  return (
    <form style={{margin: "16px 0"}}>
      <label htmlFor={id}>{identifier}: </label>
      <input id={id} value={info} onChange={onChange}></input>
    </form>
  );
}

EntryForm.propTypes = {
  id: PropTypes.string.required,
  entry: PropTypes.shape({
    identifier: PropTypes.string.required,
    info: PropTypes.string.required,
  }),
};
