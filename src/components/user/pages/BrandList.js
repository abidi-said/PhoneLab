import React, { useState, useEffect } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import * as mocks from '../../data/mocks';
const BrandList = () => {
  const [brand, setBrand] = useState([]);
  useEffect(() => {
    setBrand(mocks.brand);
  }, []);
  return (
    <div>
      {brand.map(b => (
        <MenuItem
          key={b.id}
          value={b.id}
          style={{
            justifyContent: 'center',
            backgroundColor: '#ff6e49',
            color: 'white',
            marginTop: 0.9
          }}
        >
          {b.name}
        </MenuItem>
      ))}
    </div>
  );
};

export default BrandList;
