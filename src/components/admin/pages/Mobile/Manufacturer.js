import React, { useContext, useEffect } from 'react';
import MaterialTable from 'material-table';
import ManufacturerContext from '../../../../context/manufacturer/manufacturerContext';

const Manufacturer = () => {
  const manufacturerContext = useContext(ManufacturerContext);
  const {
    delManufacturer,
    addManufacturer,
    updateManufacturer,
    manufacturer,
    getManufacturer,
  } = manufacturerContext;

  useEffect(() => {
    getManufacturer();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MaterialTable
      title='Table Manufacturer'
      style={{
        borderRadius: 7,
        border: 2,
        boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
      }}
      columns={[
        { title: 'ID', field: 'id', editable: 'never' },
        { title: 'Name', field: 'name' },
      ]}
      data={manufacturer}
      editable={{
        onRowAdd: (newData) =>
          newData !== null && addManufacturer(newData.name),

        onRowUpdate: (newData, oldData) =>
          updateManufacturer(oldData.id, newData.name, newData),

        onRowDelete: (oldData) => delManufacturer(oldData.id),
      }}
    />
  );
};
export default Manufacturer;
