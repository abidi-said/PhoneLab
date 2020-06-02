import React, { useContext, useEffect } from 'react';
import MaterialTable from 'material-table';
import PanneContext from '../../../../context/panne/panneContext';
import ModelContext from '../../../../context/model/modelContext';
import ManufacturerContext from '../../../../context/manufacturer/manufacturerContext';

const Panne = () => {
  const manufacturerContext = useContext(ManufacturerContext);
  const { getManufacturer } = manufacturerContext;

  const modelContext = useContext(ModelContext);
  const { model, getModel } = modelContext;

  const panneContext = useContext(PanneContext);
  const { delPanne, addPanne, updatePanne, panne, getPanne } = panneContext;

  useEffect(() => {
    getManufacturer();
    getModel();
    getPanne();
    getManufacturer();
    getModel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MaterialTable
      title='Table Panne'
      style={{
        borderRadius: 7,
        border: 2,
        boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
      }}
      columns={[
        { title: 'ID', field: 'id' },
        { title: 'Defect', field: 'name' },

        {
          title: 'Model',
          field: 'modele_id',
          lookup: model.reduce((acc, cur) => {
            acc[cur.id] = cur.name;
            return acc;
          }, {}),
        },

        { title: 'Price', field: 'price', type: 'currency' },
      ]}
      data={panne}
      editable={{
        onRowAdd: (newData) => addPanne(newData),

        onRowUpdate: (newData, oldData) => updatePanne(oldData.id, newData),

        onRowDelete: (oldData) => delPanne(oldData.id),
      }}
    />
  );
};
export default Panne;
