import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  chilren: PropTypes.oneOf([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

export default propTypes;
