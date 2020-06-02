import React, { useContext, useEffect } from 'react';
import MaterialTable from 'material-table';
import ModelContext from '../../../../context/model/modelContext';
import ManufacturerContext from '../../../../context/manufacturer/manufacturerContext';

const Model = () => {
  const modelContext = useContext(ModelContext);
  const { delModel, addModel, updateModel, model, getModel } = modelContext;

  const manufacturerContext = useContext(ManufacturerContext);
  const { manufacturer, getManufacturer } = manufacturerContext;
  useEffect(() => {
    getManufacturer();
    console.log(manufacturer);

    getModel();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MaterialTable
      title='Table Model'
      style={{
        borderRadius: 7,
        border: 2,
        boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)'
      }}
      columns={[
        { title: 'ID', field: 'id' },
        { title: 'Name', field: 'name' },

        {
          title: 'Manufacturer',
          field: 'manufacturer_id',
          lookup: manufacturer.reduce((mod, man) => {
            mod[man.id] = man.name;
            return mod;
          }, {})
        }
      ]}
      data={model}
      editable={{
        onRowAdd: newData => addModel(newData),

        onRowUpdate: (newData, oldData) => updateModel(oldData.id, newData),

        onRowDelete: oldData => delModel(oldData.id)
      }}
    />
  );
};
export default Model;
