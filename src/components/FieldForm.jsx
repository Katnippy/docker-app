import PropTypes from 'prop-types';

export default function FieldForm({ id, onChange, field: { identifier, info } }) {
  return (
    <form style={{margin: "16px 0"}}>
      <label htmlFor={id}>{identifier}: </label>
      <input id={id} value={info} onChange={onChange}></input>
    </form>
  );
}

FieldForm.propTypes = {
  id: PropTypes.string.required,
  field: PropTypes.shape({
    identifier: PropTypes.string.required,
    info: PropTypes.string.required,
  }),
};
