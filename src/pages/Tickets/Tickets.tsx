/* eslint-disable react/destructuring-assignment */
import React, { ChangeEvent, useState } from 'react';
import {
  Box,
  Paper,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';

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
import { $bgLight, $white, $grey4, $white2, $blue } from 'constants/colors';
import FiltersTypo from 'pages/Tickets/CustomTypographies/FiltersTypo';
import { toggleTicketModal } from 'redux/slices/modal/modal.slice';
import { useAppDispatch } from 'redux/hooks';
import TicketModal from 'pages/Tickets/TicketModal/TicketModal';
import CustomBox from 'pages/Tickets/CustomBox/CustomBox';
import { TitleTypo } from 'pages/Contacts/Contacts';
import BlackTypo from 'pages/Tickets/CustomTypographies/BlackTypo';
import GreyTypo from 'pages/Tickets/CustomTypographies/GreyTypo';

const data = [
  {
    id: 1,
    src: tomcruise,
    ticketDetails: 'Contact Email not Linked',
    updated: '1 day ago',
    customerName: 'Tom Cruise',
    customerDate: '24.05.2019',
    date: 'May 26, 2019',
    time: '6:30 PM',
    priority: 'high',
  },
  {
    id: 2,
    src: mattdamon,
    ticketDetails: 'Adding Images to Featured Posts',
    updated: '1 day ago',
    customerName: 'Matt Damon',
    customerDate: '24.05.2019',
    date: 'May 26, 2019',
    time: '8:00 AM',
    priority: 'low',
  },
  {
    id: 3,
    src: robertdowney,
    ticketDetails: 'When will I be charged this month?',
    updated: '1 day ago',
    customerName: 'Robert Downey',
    customerDate: '24.05.2019',
    date: 'May 26, 2019',
    time: '7:30 PM',
    priority: 'high',
  },
  {
    id: 4,
    src: cristianbale,
    ticketDetails: 'Payment not going through',
    updated: '2 days ago',
    customerName: 'Cristian Bale',
    customerDate: '24.05.2019',
    date: 'May 25, 2019',
    time: '5:00 PM',
    priority: 'normal',
  },
  {
    id: 5,
    src: henrycavil,
    ticketDetails: 'Unable to add replies',
    updated: '2 days ago',
    customerName: 'Henry Cavil',
    customerDate: '24.05.2019',
    date: 'May 25, 2019',
    time: '4:00 PM',
    priority: 'high',
  },
  {
    id: 6,
    src: chrisevans,
    ticketDetails: 'Downtime since last week',
    updated: '3 days ago',
    customerName: 'Chris Evans',
    customerDate: '23.05.2019',
    date: 'May 25, 2019',
    time: '2:00 PM',
    priority: 'normal',
  },
  {
    id: 7,
    src: samsmith,
    ticketDetails: 'Referral Bonus',
    updated: '4 days ago',
    customerName: 'Sam Smith',
    customerDate: '22.05.2019',
    date: 'May 25, 2019',
    time: '11:30 AM',
    priority: 'low',
  },
  {
    id: 8,
    src: steverogers,
    ticketDetails: 'How do I change my password?',
    updated: '6 days ago',
    customerName: 'Steve Rogers',
    customerDate: '21.05.2019',
    date: 'May 24, 2019',
    time: '1:00 PM',
    priority: 'normal',
  },
];

interface Column {
  id: 'ticketDetails' | 'customerName' | 'date' | 'priority';
  label: string;
  minWidth?: number;
}
const columns: readonly Column[] = [
  { id: 'ticketDetails', label: 'Ticket Details', minWidth: 480 },
  { id: 'customerName', label: 'Customer name', minWidth: 248 },
  { id: 'date', label: 'Date', minWidth: 180 },
  { id: 'priority', label: 'Priority', minWidth: 180 },
];

const Tickets = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const dispatch = useAppDispatch();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const openModal = () => {
    dispatch(toggleTicketModal());
  };
  return (
    <>
      <TicketModal />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: '30px',
          width: '100%',
          height: '100%',
          backgroundColor: `${$bgLight}`,
        }}
      >
        <Paper
          sx={{
            maxWidth: '1122px',
            bgColor: `${$white}`,
            border: `1px solid ${$white2}`,
            borderRadius: '8px',
          }}
        >
          <TableContainer>
            <Table
              sx={{
                '& .MuiTableRow-hover:hover': {
                  backgroundColor: 'rgba(55, 81, 255, 0.04)',
                },
              }}
            >
              <TableHead>
                <TableRow sx={{ height: '134px' }}>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align="left"
                      style={{
                        minWidth: column.minWidth,
                        paddingLeft: '30px',
                      }}
                    >
                      {column.id === 'priority' && (
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '90px',
                          }}
                        >
                          <Box
                            component="button"
                            sx={{
                              fontSize: '14px',
                              fontWeight: 600,
                              letterSpacing: '0.2px',
                              color: `${$blue}`,
                              backgroundColor: 'transparent',
                            }}
                            onClick={openModal}
                          >
                            + Add contact
                          </Box>
                          <TitleTypo>{column.label}</TitleTypo>
                        </Box>
                      )}
                      {column.id === 'ticketDetails' && (
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            width: '100%',
                            height: '90px',
                          }}
                        >
                          <Box>
                            <IconButton sx={{ mr: '32px' }}>
                              <img src={sort} alt="sort" />
                              <FiltersTypo>Sort</FiltersTypo>
                            </IconButton>
                            <IconButton>
                              <img src={filter} alt="filter" />
                              <FiltersTypo>Filter</FiltersTypo>
                            </IconButton>
                          </Box>
                          <TitleTypo>{column.label}</TitleTypo>
                        </Box>
                      )}
                      {(column.id === 'date' ||
                        column.id === 'customerName') && (
                        <TitleTypo
                          sx={{
                            position: 'relative',
                            top: '35px',
                            ml: '-16px',
                          }}
                        >
                          {column.label}
                        </TitleTypo>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.id}
                      sx={{
                        position: 'relative',
                        top: 0,
                        pl: '30px',
                      }}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align="left"
                            sx={{ height: '92px', pr: 0 }}
                          >
                            {column.id === 'ticketDetails' && (
                              <Box sx={{ display: 'flex' }}>
                                <img
                                  src={row.src}
                                  alt="user"
                                  style={{
                                    marginRight: '24px',
                                    marginLeft: '14px',
                                  }}
                                />
                                <Box
                                  sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                  }}
                                >
                                  <BlackTypo>{value}</BlackTypo>
                                  <GreyTypo>Updated {row.updated}</GreyTypo>
                                </Box>
                              </Box>
                            )}
                            {column.id === 'customerName' && (
                              <Box
                                sx={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                }}
                              >
                                <BlackTypo>{value}</BlackTypo>
                                <GreyTypo>{row.customerDate}</GreyTypo>
                              </Box>
                            )}
                            {column.id === 'date' && (
                              <Box
                                sx={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                }}
                              >
                                <BlackTypo>{value}</BlackTypo>
                                <GreyTypo>{row.time}</GreyTypo>
                              </Box>
                            )}
                            {column.id === 'priority' && (
                              <CustomBox>{value}</CustomBox>
                            )}
                          </TableCell>
                        );
                      })}
                      <IconButton
                        size="large"
                        aria-label="display more actions"
                        edge="end"
                        sx={{
                          mt: 'auto',
                          mb: 'auto',
                          color: `${$grey4}`,
                          position: 'absolute',
                          right: '35px',
                          top: '23px',
                        }}
                      >
                        <MoreIcon />
                      </IconButton>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[8, 12, 16]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </>
  );
};
export default Tickets;
