/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Avatar,
} from '@mui/material';

import { $bgLight, $white, $white2, $blue } from 'constants/colors';
import { toggleTicketModal } from 'redux/slices/modal/modal.slice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import TicketModal from 'pages/Tickets/TicketModal/TicketModal';
import CustomBox from 'pages/Tickets/CustomBox/CustomBox';
import { TitleTypo } from 'pages/Contacts/Contacts';
import BlackTypo from 'pages/Tickets/CustomTypographies/BlackTypo';
import GreyTypo from 'pages/Tickets/CustomTypographies/GreyTypo';
import { stringAvatar } from 'utils/navbarHelpers';
import {
  deleteTicket,
  ITicket,
  setCurrentTicket,
  setCurrentTicketId,
} from 'redux/slices/tickets/tickets.slice';
import PopoverPopup from 'components/PopoverPopup/PopoverPopup';
import FilterPopover from 'components/FilterPopover/FilterPopover';
import SortPopover from 'components/SortPopover/SortPopover';

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
  const currentId = useAppSelector((state) => state.tickets.currentTicketId);
  const searchedText = useAppSelector((state) => state.tickets.searchedText);
  const ticketOrder = useAppSelector((state) => state.tickets.ticketOrder);

  const ticket = useAppSelector((state) =>
    currentId ? state.tickets.list.find((t) => t.id === currentId) : null,
  );
  const data = useAppSelector((state) => state.tickets.list);

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

  const edit = (id: number | undefined) => {
    dispatch(setCurrentTicketId(id));
    if (ticket && typeof ticket !== undefined) {
      dispatch(
        setCurrentTicket({
          id: ticket.id,
          customerName: ticket.customerName,
          ticketDetails: ticket.ticketDetails,
          priority: ticket.priority,
        }),
      );
      dispatch(setCurrentTicketId(ticket.id));
      dispatch(toggleTicketModal());
    }
  };

  const deleteLine = (id: number | undefined) => {
    dispatch(setCurrentTicketId(id));
    if (ticket && typeof ticket !== undefined && currentId) {
      dispatch(deleteTicket(currentId));
    }
  };

  useEffect(() => {
    if (ticket)
      dispatch(
        setCurrentTicket({
          id: ticket.id,
          customerName: ticket.customerName,
          ticketDetails: ticket.ticketDetails,
          priority: ticket.priority,
        }),
      );
  }, [currentId, dispatch]);

  const filtering = (arr: ITicket[], text: string) => {
    return [...arr].filter(
      (str: {
        ticketDetails: string;
        priority: string;
        customerName: string;
      }) =>
        str.ticketDetails
          .toLowerCase()
          .concat(str.priority)
          .concat(str.customerName.toLowerCase())
          .includes(text),
    );
  };

  const filteredText = (text: string | undefined) => {
    if (ticketOrder === 'asc' && text) {
      return filtering(data, text).sort((a, b) =>
        a.customerName > b.customerName ? 1 : -1,
      );
    }
    if (ticketOrder === 'desc' && text) {
      return filtering(data, text).sort((a, b) =>
        a.customerName > b.customerName ? -1 : 1,
      );
    }
    if (ticketOrder === '' && text) {
      return filtering(data, text);
    }
    if (ticketOrder === 'desc' && text === '') {
      return [...data].sort((a, b) =>
        a.customerName > b.customerName ? -1 : 1,
      );
    }
    if (ticketOrder === 'asc' && text === '') {
      return [...data].sort((a, b) =>
        a.customerName > b.customerName ? 1 : -1,
      );
    }
    return data;
  };
  return (
    <>
      <TicketModal />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: '30px',
          width: '100%',
          minHeight: 'calc(100vh - 93px)',
          backgroundColor: `${$bgLight}`,
        }}
      >
        <Paper
          sx={{
            height: 'max-content',
            maxWidth: '1122px',
            bgColor: `${$white}`,
            border: `1px solid ${$white2}`,
            borderRadius: '8px',
          }}
        >
          <>
            <TableContainer>
              <Table
                sx={{
                  '& .MuiTableRow-hover:hover': {
                    backgroundColor: 'rgba(55, 81, 255, 0.04)',
                  },
                }}
              >
                <>
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
                              <Box sx={{ display: 'flex' }}>
                                <SortPopover />
                                <FilterPopover />
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
                    {filteredText(searchedText)
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage,
                      )
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
                                    {row.src ? (
                                      <img
                                        src={row.src}
                                        alt="user"
                                        style={{
                                          marginRight: '24px',
                                          marginLeft: '14px',
                                        }}
                                      />
                                    ) : (
                                      <Avatar
                                        style={{
                                          marginRight: '24px',
                                          marginLeft: '14px',
                                        }}
                                        {...stringAvatar(row.customerName)}
                                      />
                                    )}
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
                          <PopoverPopup
                            edit={() => edit(row.id)}
                            deleteLine={() => deleteLine(row.id)}
                          />
                        </TableRow>
                      ))}
                  </TableBody>
                </>
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
          </>
        </Paper>
      </Box>
    </>
  );
};
export default Tickets;
