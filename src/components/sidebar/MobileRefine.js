import React from 'react';
import PropTypes from 'prop-types';

const MobileRefine = ({ onRefineClick, refined }) => {
  const mql = window.matchMedia('(max-width: 767px)');
  const filterText = mql.matches ? 'Refine' : 'Filter data';
  const buttonForceMargin = { marginBottom: '20px', marginTop: '30px' };
  return (
    <button
      style={buttonForceMargin}
      type="submit"
      className="btn-main btn-main-primary btn-main-primary--solid mar-20"
      onClick={() => onRefineClick()}
    >
      {refined ? <span>Close </span> : <span>{filterText}</span>}

      <i className="fal fa-filter" />
    </button>
  );
};

export default MobileRefine;

MobileRefine.propTypes = {
  onRefineClick: PropTypes.instanceOf(Function).isRequired,
  refined: PropTypes.instanceOf(Boolean).isRequired
};
