/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Box,
  Typography,
  Paper,
  IconButton,
  createTheme,
  ThemeProvider,
  Button,
} from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import type {} from '@mui/x-data-grid/themeAugmentation';

import chrisevans from 'assets/table/chrisevans.png';
import cristianbale from 'assets/table/cristianbale.png';
import henrycavil from 'assets/table/henrycavil.png';
import mattdamon from 'assets/table/mattdamon.png';
import robertdowney from 'assets/table/robertdowney.png';
import samsmith from 'assets/table/samsmith.png';
import steverogers from 'assets/table/steverogers.png';
import tomcruise from 'assets/table/tomcruise.png';
import sort from 'assets/table/sort.png';
import filter from 'assets/table/filter.png';
import { $bgLight, $white, $grey2, $blue } from 'constants/colors';
import CustomBox from 'pages/Tickets/CustomBox/CustomBox';
import FiltersTypo from 'pages/Tickets/CustomTypographies/FiltersTypo';
import BlackTypo from 'pages/Tickets/CustomTypographies/BlackTypo';
import GreyTypo from 'pages/Tickets/CustomTypographies/GreyTypo';
import { useAppDispatch } from 'redux/hooks';
import { open } from 'redux/slices/modal/modal.slice';

const dataGridTheme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus':
            {
              outline: 'none',
            },
          '.MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell':
            {
              overflow: 'visible',
            },
        },
        footerContainer: {
          border: 'none',
        },
        menuIconButton: {
          marginTop: '85px',
        },
        row: {
          '&:hover': {
            backgroundColor: 'rgba(55, 81, 255, 0.04)',
          },
        },
        columnHeaders: {
          overflow: 'visible',
        },
      },
    },
  },
});

const columns: GridColDef[] = [
  {
    field: 'ticketDetails',
    headerClassName: 'theme--header',
    renderHeader: () => (
      <Box sx={{ pl: '30px', mt: '50px' }}>
        <Box sx={{ pb: '25px' }}>
          <IconButton sx={{ mr: '32px' }}>
            <img src={sort} alt="sort" />
            <FiltersTypo>Sort</FiltersTypo>
          </IconButton>
          <IconButton>
            <img src={filter} alt="filter" />
            <FiltersTypo>Filter</FiltersTypo>
          </IconButton>
        </Box>
        <Typography sx={{ mb: '30px' }}>Ticket details</Typography>
      </Box>
    ),
    minWidth: 480,
    renderCell: (params: GridRenderCellParams) => (
      <>
        <img
          src={params.row.src}
          alt="user"
          style={{ marginRight: '24px', marginLeft: '30px' }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <BlackTypo>{params.row.issue}</BlackTypo>
          <GreyTypo>{params.row.updated}</GreyTypo>
        </Box>
      </>
    ),
    hideSortIcons: true,
    disableColumnMenu: true,
    sortable: false,
  },
  {
    field: 'customerName',
    headerClassName: 'theme--header',
    renderHeader: () => (
      <Typography
        sx={{
          mt: '85px',
        }}
      >
        Customer Name
      </Typography>
    ),
    minWidth: 248,
    renderCell: (params: GridRenderCellParams) => (
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <BlackTypo>{params.row.name}</BlackTypo>
        <GreyTypo>{params.row.date}</GreyTypo>
      </Box>
    ),
    hideSortIcons: true,
    disableColumnMenu: true,
    sortable: false,
  },
  {
    field: 'date',
    headerClassName: 'theme--header',
    renderHeader: () => (
      <Typography
        sx={{
          mt: '85px',
        }}
      >
        Date
      </Typography>
    ),
    minWidth: 180,
    align: 'left',
    renderCell: (params: GridRenderCellParams) => (
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <BlackTypo>{params.row.created}</BlackTypo>
        <GreyTypo>{params.row.time}</GreyTypo>
      </Box>
    ),
    hideSortIcons: true,
    disableColumnMenu: true,
    sortable: false,
  },
  {
    field: 'priority',
    headerClassName: 'theme--header',
    renderHeader: () => <Typography sx={{ mt: '80px' }}>Priority</Typography>,
    width: 180,
    align: 'left',
    renderCell: (params: GridRenderCellParams) => (
      <CustomBox>{params.row.priority}</CustomBox>
    ),
    hideSortIcons: true,
    disableColumnMenu: true,
    sortable: false,
  },
];

const rows = [
  {
    id: 1,
    src: tomcruise,
    issue: 'Contact Email not Linked',
    updated: '1 day ago',
    name: 'Tom Cruise',
    date: '24.05.2019',
    created: 'May 26, 2019',
    time: '6:30 PM',
    priority: 'high',
  },
  {
    id: 2,
    src: mattdamon,
    issue: 'Adding Images to Featured Posts',
    updated: '1 day ago',
    name: 'Matt Damon',
    date: '24.05.2019',
    created: 'May 26, 2019',
    time: '8:00 AM',
    priority: 'low',
  },
  {
    id: 3,
    src: robertdowney,
    issue: 'When will I be charged this month?',
    updated: '1 day ago',
    name: 'Robert Downey',
    date: '24.05.2019',
    created: 'May 26, 2019',
    time: '7:30 PM',
    priority: 'high',
  },
  {
    id: 4,
    src: cristianbale,
    issue: 'Payment not going through',
    updated: '2 days ago',
    name: 'Cristian Bale',
    date: '24.05.2019',
    created: 'May 25, 2019',
    time: '5:00 PM',
    priority: 'normal',
  },
  {
    id: 5,
    src: henrycavil,
    issue: 'Unable to add replies',
    updated: '2 days ago',
    name: 'Henry Cavil',
    date: '24.05.2019',
    created: 'May 25, 2019',
    time: '4:00 PM',
    priority: 'high',
  },
  {
    id: 6,
    src: chrisevans,
    issue: 'Downtime since last week',
    updated: '3 days ago',
    name: 'Chris Evans',
    date: '23.05.2019',
    created: 'May 25, 2019',
    time: '2:00 PM',
    priority: 'normal',
  },
  {
    id: 7,
    src: samsmith,
    issue: 'Referral Bonus',
    updated: '4 days ago',
    name: 'Sam Smith',
    date: '22.05.2019',
    created: 'May 25, 2019',
    time: '11:30 AM',
    priority: 'low',
  },
  {
    id: 8,
    src: steverogers,
    issue: 'How do I change my password?',
    updated: '6 days ago',
    name: 'Steve Rogers',
    date: '21.05.2019',
    created: 'May 24, 2019',
    time: '1:00 PM',
    priority: 'normal',
  },
];

const Tickets = () => {
  const openModal = () => {
    const dispatch = useAppDispatch();
    dispatch(open());
  };
  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        bgcolor: `${$bgLight}`,
        p: '30px',
        position: 'relative',
        top: 0,
        '& .theme--header': {
          lineHeight: '18px',
          letterSpacing: '0.2px',
          color: `${$grey2}`,
          overflow: 'visible',
          '& > .MuiDataGrid-columnSeparator': {
            visibility: 'hidden',
          },
        },
      }}
    >
      <Button
        sx={{
          alignSelf: 'flex-end',
          fontWeight: 600,
          letterSpacing: '0.2px',
          color: `${$blue}`,
          mt: '25px',
          textTransform: 'capitalize',
          position: 'absolute',
          top: '40px',
          right: '130px',
          zIndex: 2,
        }}
        onClick={() => openModal()}
      >
        + Add ticket
      </Button>
      <ThemeProvider theme={dataGridTheme}>
        <DataGrid
          sx={{
            maxWidth: '1120px',
            height: '942px',
            bgcolor: `${$white}`,
            borderRadius: '8px',
          }}
          headerHeight={134}
          rowHeight={92}
          rows={rows}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8, 12, 16]}
          hideFooterSelectedRowCount
        />
      </ThemeProvider>
    </Paper>
  );
};

export default Tickets;
