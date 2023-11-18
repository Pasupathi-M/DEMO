/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/** @format */

import { useState } from 'react';
import { Box, Grid, Select, MenuItem, Button } from '@mui/material';
import { styled } from '@mui/styles';
import { ColDef } from '@ag-grid-community/core';
import ServerSideGrid from '../../components/MUI/DataGrid/DataGrid';
import { Data } from './Data';
import * as _ from 'lodash';

const StyledBox = styled(Box)({
  width: '100%',
  // margin: 20,
  '& .ag-header': {
    letterSpacing: '2px',
    border: '1px solid #E4E6EF!important',
    borderBottom: 'none',
    borderStyle: 'dashed!important',
  },
  '& .ag-header-cell': {
    color: '#373A46',
    fontFamily: 'Poppins!important',
    fontWeight: 600,
    fontSize: '12px',
    // paddingLeft: '1px',
    // paddingLeft: '15px!important',
    justifyContent: 'center',
  },
  '& .ag-selection-checkbox': {
    justifyContent: 'center',
    // padding: '10px 20px',
    // paddingLeft: '14px',
  },
  '& .ag-header-cell-label': {
    display: 'flex!important',
    justifyContent: 'flex-start!impotant',
  },
  '& .ag-row': {
    // background: '#F1F1F1',
    border: '0.2px dashed #E4E6EF!important',
    borderStyle: 'dashed!important',
    cursor: 'pointer',
  },
  '& .ag-cell': {
    fontSize: '15px',
    color: '#3F3D56',
    fontFamily: 'Poppins!important',
    fontWeight: 400,
    lineHeight: '24px',
    display: 'flex',
    justifyContent: 'center',
    '& .ag-react-container': {
      height: '100%',
      '& div': {
        'white-space': 'nowrap',
        'text-overflow': 'ellipsis',
        overflow: 'hidden',
      },
    },
  },
  '& .ag-row:hover': {
    backgroundColor: '#f5f5f5',
  },
});

function IconComponent(props: any) {
  console.log('props', props);
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <Button
            sx={{
              backgroundColor: '#F4F7F9',
              color: '#000000',
              fontFamily: 'Poppins',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'transparent',
              },
              borderRadius: 8,
            }}
            disableElevation
            fullWidth
            variant='contained'
            // startIcon={<img src={edit} alt='logo' width={25} />}
          >
            Edit
          </Button>
        </Grid>
        <Grid item xs={7}>
          <Button
            sx={{
              backgroundColor: '#F4F7F9',
              color: '#000000',
              fontFamily: 'Poppins',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'transparent',
              },
              borderRadius: 8,
            }}
            disableElevation
            fullWidth
            variant='contained'
            // onClick={() => {
            //   setShowConfirmationModal(true);
            // }}
            // startIcon={<img src={removeIcon} alt='logo' width={25}
            //  />}
          >
            Active
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
function TestPage5() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedRow, setSelectedRow] = useState<any>([]);
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(0);
  const [totalData, setTotalData] = useState(30);
  const defaultPagination = [10, 20, 30, 40, 50, 100, 200, 500];
  console.log('page12', page);
  // console.log('page', page);
  console.log('pageSize', pageSize);

  console.log('selectedRow', selectedRow);
  const columnDefs: ColDef[] = [
    {
      headerName: 'User Name',
      field: 'username',
      filter: true,
      width: 500,
      cellStyle: { textTransform: 'capitalize' },
    },
    {
      headerName: 'Email Address',
      field: 'emailAddress',
      filter: true,
      width: 500,
    },
    {
      headerName: 'Mobile',
      field: 'mobile',
      filter: true,
      width: 500,
    },
    {
      headerName: 'Actions',
      field: '',
      width: 400,
      cellRenderer: IconComponent,
      cellRendererParams: {},
    },
  ];

  const onSelectionChanged = (event: any) => {
    setSelectedRow(event.api.getSelectedRows());
  };
  return (
    <div>
      {/* <StyledBox> */}
      <ServerSideGrid
        rowData={Data}
        headerHeight={80}
        columnDefs={columnDefs}
        defaultColDef={{
          sortable: true,
          resizable: true,
          filter: true,
          flex: 1,
          minWidth: 100,
        }}
        rowHeight={55}
        handleCellClick={undefined}
        loading={false}
        disableClickSelectionRenderers={false}
        noDataTxt='No Records Found'
        TableHeight={80}
        // rowSelection={rowSelectionType}
        onSelectionChanged={onSelectionChanged}
        pageSize={pageSize}
        totalDataCount={totalData}
        serverRowSize={pageSize}
        currentPage={page}
        serverSidePagination={true}
        serverPageCount={Math.ceil(totalData / pageSize)}
        setServerRowSize={(rowSize: number) => {
          setPageSize(rowSize);
        }}
        setServerSidePage={(e: any, p: number) => {
          setPage(p);
        }}
        defaultPagination={defaultPagination}
        setPageSize={setPageSize}
        setPage={setPage}
      />

      {/* </div> */}
      {/* </StyledBox> */}
    </div>
  );
}

export default TestPage5;
