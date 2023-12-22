import PropTypes from 'prop-types';

export default function Entry({ entry: { identifier, info } }) {
  return (
    <p>{identifier}: {info}</p>
  );
}

Entry.propTypes = {
  entry: PropTypes.shape({
    identifier: PropTypes.string.required,
    info: PropTypes.string.required,
  }),
};
