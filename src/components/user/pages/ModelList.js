import React, { useState, useEffect } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import * as mocks from '../../data/mocks';
const ModelList = () => {
  const [model, setModel] = useState([]);
  useEffect(() => {
    setModel(mocks.model);
  }, []);
  return (
    <div>
      {model.map(m => (
        <MenuItem
          key={m.id}
          value={m.id}
          style={{
            justifyContent: 'center',
            backgroundColor: '#ff6e49',
            color: 'white',
            marginTop: 0.9
          }}
        >
          {m.name}
        </MenuItem>
      ))}
    </div>
  );
};

export default ModelList;
