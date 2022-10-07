/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  ThemeProvider,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import TicketModal from 'pages/Tickets/TicketModal/TicketModal';
import CustomBox from 'pages/Tickets/CustomBox/CustomBox';
import { stringAvatar } from 'utils/navbarHelpers';
import PopoverPopup from 'components/PopoverPopup/PopoverPopup';
import FilterPopover from 'components/FilterPopover/FilterPopover';
import SortPopover from 'components/SortPopover/SortPopover';
import {
  BlackTypo,
  GreyTypo,
  TitleTypo,
} from 'components/Typographies/Typographies';
import { sortingFilteredTickets } from 'utils/sortingFiltered';
import {
  addTicketStyles,
  BgTickets,
  DetailsWrapper,
  HeaderCell,
  NameDateWrapper,
  PopoversWrapper,
  PositionedRow,
  PositionedTitle,
  StyledAvatar,
  StyledCell,
  StyledImg,
  TableWrapper,
} from 'pages/Tickets/styles';
import { TicketsColumn } from 'interfaces/interfaces';
import { rowTheme } from 'pages/Contacts/styles';
import { AppState } from 'store/reducers/rootReducer';
import { toggleTicketModal } from 'store/actions/modal/modalActions';
import {
  deleteTicket,
  setCurrentTicket,
  setCurrentTicketId,
} from 'store/actions/tickets/ticketActions';

const columns: readonly TicketsColumn[] = [
  { id: 'ticketDetails', label: 'Ticket Details', minWidth: 480 },
  { id: 'customerName', label: 'Customer name', minWidth: 248 },
  { id: 'date', label: 'Date', minWidth: 180 },
  { id: 'priority', label: 'Priority', minWidth: 180 },
];

const Tickets = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const dispatch = useDispatch();
  const { currentTicketId, searchedText, ticketOrder, list } = useSelector(
    (state: AppState) => state.tickets,
  );

  const ticket = useSelector((state: AppState) =>
    currentTicketId
      ? state.tickets.list.find((t) => t.id === currentTicketId)
      : null,
  );

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
          date: '',
        }),
      );
      dispatch(setCurrentTicketId(ticket.id));
      dispatch(toggleTicketModal());
    }
  };

  const deleteLine = (id: number | undefined) => {
    dispatch(setCurrentTicketId(id));
    if (ticket && typeof ticket !== undefined && currentTicketId) {
      dispatch(deleteTicket(currentTicketId));
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
          date: '',
        }),
      );
  }, [currentTicketId, dispatch]);

  return (
    <>
      <TicketModal />
      <BgTickets>
        <TableWrapper>
          <>
            <ThemeProvider theme={rowTheme}>
              <TableContainer>
                <Table>
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
                              <HeaderCell>
                                <Box
                                  component="button"
                                  style={addTicketStyles}
                                  onClick={openModal}
                                >
                                  + Add ticket
                                </Box>
                                <TitleTypo>{column.label}</TitleTypo>
                              </HeaderCell>
                            )}
                            {column.id === 'ticketDetails' && (
                              <HeaderCell>
                                <PopoversWrapper>
                                  <SortPopover />
                                  <FilterPopover />
                                </PopoversWrapper>
                                <TitleTypo>{column.label}</TitleTypo>
                              </HeaderCell>
                            )}
                            {(column.id === 'date' ||
                              column.id === 'customerName') && (
                              <PositionedTitle>{column.label}</PositionedTitle>
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {sortingFilteredTickets(searchedText, ticketOrder, list)
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage,
                        )
                        .map((row) => (
                          <PositionedRow hover tabIndex={-1} key={row.id}>
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <StyledCell key={column.id}>
                                  {column.id === 'ticketDetails' && (
                                    <Box sx={{ display: 'flex' }}>
                                      {row.src ? (
                                        <StyledImg src={row.src} alt="user" />
                                      ) : (
                                        <StyledAvatar
                                          {...stringAvatar(row.customerName)}
                                        />
                                      )}
                                      <DetailsWrapper>
                                        <BlackTypo>{value}</BlackTypo>
                                        <GreyTypo>
                                          Updated {row.updated}
                                        </GreyTypo>
                                      </DetailsWrapper>
                                    </Box>
                                  )}
                                  {column.id === 'customerName' && (
                                    <NameDateWrapper>
                                      <BlackTypo>{value}</BlackTypo>
                                      <GreyTypo>{row.customerDate}</GreyTypo>
                                    </NameDateWrapper>
                                  )}
                                  {column.id === 'date' && (
                                    <NameDateWrapper>
                                      <BlackTypo>{value}</BlackTypo>
                                      <GreyTypo>{row.time}</GreyTypo>
                                    </NameDateWrapper>
                                  )}
                                  {column.id === 'priority' && (
                                    <CustomBox>{value}</CustomBox>
                                  )}
                                </StyledCell>
                              );
                            })}
                            <PopoverPopup
                              edit={() => edit(row.id)}
                              deleteLine={() => deleteLine(row.id)}
                            />
                          </PositionedRow>
                        ))}
                    </TableBody>
                  </>
                </Table>
              </TableContainer>
            </ThemeProvider>
            <TablePagination
              rowsPerPageOptions={[8, 12, 16]}
              component="div"
              count={list.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        </TableWrapper>
      </BgTickets>
    </>
  );
};
export default Tickets;
