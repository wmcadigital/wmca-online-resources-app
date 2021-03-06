import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getFiltersGroup } from '../../utils/utils';
import { GlobalState } from '../../store';
import Radio from './inputs/Radio';
import { FiltersDispatch } from './SidebarStore';

function FiltersGroupInitial(props) {
  const { filterName, displayName } = props;
  const filterDispatch = useContext(FiltersDispatch);
  const globalState = useContext(GlobalState);
  const { allJobs } = globalState.store;
  const [filters, setAllFilters] = useState();
  const setSelectedFilters = (value, parent) => {
    filterDispatch.dispatch({
      type: 'SET_INITIAL_FILTERS',
      payload: {
        parent,
        value
      }
    });
  };
  React.useEffect(() => {
    setAllFilters(getFiltersGroup(allJobs, filterName));
  }, [allJobs, filterName]);

  return (
    <>
      <fieldset aria-required="true" className="wmcads-fe-fieldset">
        <legend className="wmcads-fe-fieldset__legend">{displayName}</legend>
        {filters &&
          filters.map((filter, i) => {
            return (
              filter && (
                <Radio
                  setSelectedFilters={setSelectedFilters}
                  int={i}
                  name={filter}
                  parent={filterName}
                  key={`${filterName}-${filter}`}
                />
              )
            );
          })}
      </fieldset>
    </>
  );
}

export default React.memo(FiltersGroupInitial);

FiltersGroupInitial.propTypes = {
  filterName: PropTypes.string,
  displayName: PropTypes.string
};

FiltersGroupInitial.defaultProps = {
  filterName: '',
  displayName: ''
};
