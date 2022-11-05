import React from 'react';

import {
  ContactFilter,
  InputForContactFilter,
  LabelForContactFilter,
} from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from 'redux/filterSlice';

const Filter = () => {
  const dipatch = useDispatch();
  const storeFilter = useSelector(state => state.filter);

  const onChangeFilter = event => {
    dipatch(filter(event.currentTarget.value));
  };

  return (
    <ContactFilter>
      <LabelForContactFilter>Find contacts by name</LabelForContactFilter>
      <InputForContactFilter
        type="text"
        value={storeFilter}
        onChange={onChangeFilter}
      />
    </ContactFilter>
  );
};
export default Filter;
