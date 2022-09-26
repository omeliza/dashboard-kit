import React, { ChangeEvent, useState } from 'react';
import {
  Box,
  IconButton,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';

import {
  $bgLight,
  $black,
  $blue,
  $grey2,
  $grey4,
  $white,
  $white2,
} from 'constants/colors';
import FiltersTypo from 'pages/Tickets/CustomTypographies/FiltersTypo';
import yasirstein from 'assets/table/chrisevans.png';
import lucasharrington from 'assets/table/cristianbale.png';
import carltonblackmore from 'assets/table/henrycavil.png';
import elenasheldon from 'assets/table/mattdamon.png';
import kimgould from 'assets/table/robertdowney.png';
import danikabass from 'assets/table/samsmith.png';
import shaynatierney from 'assets/table/steverogers.png';
import mandeepwalton from 'assets/table/tomcruise.png';
import sort from 'assets/table/sort.png';
import filter from 'assets/table/filter.png';
import ContactsModal from 'pages/Contacts/ContactsModal/ContactsModal';
import { useAppDispatch } from 'redux/hooks';
import { toggleContactModal } from 'redux/slices/modal/modal.slice';

const data = [
  {
    id: 1,
    src: mandeepwalton,
    name: 'Mandeep Walton',
    email: 'mandeep.walton@gmail.com',
    address:
      'Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate",B98 9PA',
    createdAt: 'May 26, 2019',
  },
  {
    id: 2,
    src: elenasheldon,
    name: 'Elena Sheldon',
    email: 'elena.sheldon@gmail.com',
    address: 'South Lodge, Reddish Lane, Lymm,WA13 9PY',
    createdAt: 'May 26, 2019',
  },
  {
    id: 3,
    src: kimgould,
    name: 'Kim Gould',
    email: 'kim.gould@gmail.com',
    address: '15 Romilly Street, Liverpool,L6 9JL',
    createdAt: 'May 26, 2019',
  },
  {
    id: 4,
    src: lucasharrington,
    name: 'Lucas Harrington',
    email: 'harringtonl@gmail.com',
    address: '13 Balfour Crescent, Bracknell, RG12 7JA',
    createdAt: 'May 25, 2019',
  },
  {
    id: 5,
    src: carltonblackmore,
    name: 'Carlton Blackmore',
    email: 'carlton.blackmore@gmail.com',
    address: '267 Rundells, Harlow,CM18 7HH',
    createdAt: 'May 25, 2019',
  },
  {
    id: 6,
    src: yasirstein,
    name: 'Yasir Stein',
    email: 'yasir.stein@gmail.com',
    address: '47 Chelmsford Close, Hull,HU9 5DR',
    createdAt: 'May 25, 2019',
  },
  {
    id: 7,
    src: danikabass,
    name: 'Danika Bass',
    email: 'danika.bass@gmail.com',
    address: '65 Chapel Street, Salford,M3 5BZ',
    createdAt: 'May 25, 2019',
  },
  {
    id: 8,
    src: shaynatierney,
    name: 'Shayna Tierney',
    email: 'shayna.tierney@gmail.com',
    address: '16 Cedar Avenue, Poulton-Le-Fylde",FY6 8DQ',
    createdAt: 'May 24, 2019',
  },
];

const BlackTypo = styled(Typography)({
  fontWeight: 600,
  letterSpacing: '0.2px',
  color: `${$black}`,
});

interface Column {
  id: 'name' | 'email' | 'address' | 'createdAt';
  label: string;
  minWidth?: number;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 396 },
  { id: 'email', label: 'Email', minWidth: 248 },
  { id: 'address', label: 'Address', minWidth: 248 },
  { id: 'createdAt', label: 'Created at', minWidth: 225 },
];

export const TitleTypo = styled(Typography)({
  lineHeight: '18px',
  letterSpacing: '0.2px',
  color: `${$grey2}`,
  fontWeight: 700,
});

const Contacts = () => {
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
    dispatch(toggleContactModal());
  };

  return (
    <>
      <ContactsModal />
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
                      {column.id === 'createdAt' && (
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
                      {column.id === 'name' && (
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
                      {(column.id === 'address' || column.id === 'email') && (
                        <TitleTypo sx={{ position: 'relative', top: '35px' }}>
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
                      }}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align="left"
                            sx={{ height: '92px', pl: '30px', pr: 0 }}
                          >
                            {column.id === 'name' ? (
                              <Box
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                <img src={row.src} alt={row.name} />
                                <BlackTypo sx={{ ml: '24px' }}>
                                  {value}
                                </BlackTypo>
                              </Box>
                            ) : (
                              <BlackTypo
                                sx={{
                                  fontWeight:
                                    column.id === 'address' ? 400 : 600,
                                }}
                              >
                                {value}
                              </BlackTypo>
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

export default Contacts;
