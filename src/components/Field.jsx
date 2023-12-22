import PropTypes from 'prop-types';

export default function Field({ field: { identifier, info } }) {
  return (
    <p>{identifier}: {info}</p>
  );
}

Field.propTypes = {
  field: PropTypes.shape({
    identifier: PropTypes.string.required,
    info: PropTypes.string.required,
  }),
};
