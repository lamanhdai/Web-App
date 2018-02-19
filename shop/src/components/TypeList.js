import React from 'react';
import TypePreview from './TypePreview';

const TypeList = ({ types, onTypeClick }) => (
  <div className="TypeList">
    {Object.keys(types).map(typeId =>
      <TypePreview
        key={typeId}
        onClick={onTypeClick}
        {...types[typeId]} />
    )}
  </div>
);

TypeList.propTypes = {
  types: React.PropTypes.object,
  onTypeClick: React.PropTypes.func.isRequired,
};

export default TypeList;
