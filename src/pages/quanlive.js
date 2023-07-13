import React, { useState } from 'react';
import './css/quanlive.module.scss'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from './css/quanlive.module.scss';
import classNames from 'classnames/bind';
let qlv = classNames.bind(styles);


const rows = 
[
  {
    stt:1,booking:"Lasania Chiken Fri",sove:123456789,status:'Đã sử dụng',ngaysd:' 31/12/2003',ngayxv:'31/12/22003',cong:'1'

  },
  {
    stt:2,booking:"Lasania Chiken Fri",sove:123456789,status:'Đã sử dụng',ngaysd:' 31/12/2003',ngayxv:'31/12/22003',cong:'1'

  },
  {
    stt:3,booking:"Lasania Chiken Fri",sove:123456789,status:'Đã sử dụng',ngaysd:' 31/12/2003',ngayxv:'31/12/22003',cong:'1'

  },
  {
    stt:4,booking:"Lasania Chiken Fri",sove:123456789,status:'Đã sử dụng',ngaysd:' 31/12/2003',ngayxv:'31/12/22003',cong:'1'

  },
  {
    stt:5,booking:"Lasania Chiken Fri",sove:123456789,status:'Đã sử dụng',ngaysd:' 31/12/2003',ngayxv:'31/12/22003',cong:'1'

  },
  {
    stt:6,booking:"Lasania Chiken Fri",sove:123456789,status:'Đã sử dụng',ngaysd:' 31/12/2003',ngayxv:'31/12/22003',cong:'1'

  },
  {
    stt:7,booking:"Lasania Chiken Fri",sove:123456789,status:'Đã sử dụng',ngaysd:' 31/12/2003',ngayxv:'31/12/22003',cong:'1'

  },  
  // createData(1, "Lasania Chiken Fri", 12345678, "Đã sử dụng", "19/1/2020", "19/1/2020", 1),
  // createData(2, "Lasania Chiken Fri", 12345678, "Đã sử dụng", "19/1/2020", "19/1/2020", 1),
  // createData(3, "Lasania Chiken Fri", 12345678, "Đã sử dụng", "19/1/2020", "19/1/2020", 1),
  // createData(4, "Lasania Chiken Fri", 12345678, "Chưa sử dụng", "", "19/1/2020", 1),
  // createData(5, "Lasania Chiken Fri", 12345678, "Chưa sử dụng", "", "19/1/2020", 1),
  // createData(6, "Lasania Chiken Fri", 87654321, "Đã sử dụng", "19/1/2020", "19/1/2020", 1),
  // createData(7, "Lasania Chiken Fri", 87654321, "Đã sử dụng", "19/1/2020", "19/1/2020", 1),
  // createData(8, "Lasania Chiken Fri", 87654321, "Chưa sử dụng", "", "19/1/2020", 1),
  // createData(9, "Lasania Chiken Fri", 87654321, "Đã sử dụng", "19/1/2020", "19/1/2020", 1),
  // createData(10, "Lasania Chiken Fri",87654321, "Đã sử dụng", "19/1/2020", "19/1/2020", 1),
  // createData(11, "Lasania Chiken Fri",12345678, "Chưa sử dụng", "", "19/1/2020", 1),
  // createData(12, "Lasania Chiken Fri",12345678, "Đã sử dụng", "19/1/2020", "19/1/2020", 1),
  // createData(13, "Lasania Chiken Fri",12345678, "Hết hạn", "", "19/1/2020", 1),
  // createData(14, "Lasania Chiken Fri",12345678, "Đã sử dụng", "19/1/2020", "19/1/2020", 1),
  ]
;
const makeStyle = (status) => {
  if (status === 'Chưa sử dụng') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if (status === 'Hết hạn') {
    return {
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else if (status === 'Đã sử dụng') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else {
    return {
      background: '',
      color: '',
    }
  }
}

const ITEMS_PER_PAGE = 5;

function Quanlive() {
  const [filteredRows, setFilteredRows] = useState(rows);
  const [filterChecked, setFilterChecked] = useState({
    chuaSuDung: false,
    hetHan: false,
    daSuDung: false,
  });

  const handleFilterClick = () => {
    const filteredRows = rows.filter((row) => {
      const searchMatch = row.booking.toString().includes(searchValue);
      const filterMatch =
        (filterChecked.chuaSuDung && row.status === "Chưa sử dụng") ||
        (filterChecked.hetHan && row.status === "Hết hạn") ||
        (filterChecked.daSuDung && row.status === "Đã sử dụng");
      return searchMatch && filterMatch;
    });

    setFilteredRows(filteredRows);
    setCurrentPage(1);
  };
  
  
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
    setFilterValue('');
    setCurrentPage(1);
  };

  const handleFilterInputChange1 = (event) => {
    const { name, checked } = event.target;

    setFilterChecked((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredRows.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentRows = filteredRows.slice(startIndex, endIndex);




  return (
    <div className={qlv('AppGlass1')}>
      <h1 className={qlv("h1")}>Danh sách vé</h1>
      <div>
        <input className={qlv('timkiem')} id="search-input" placeholder='Tìm kiếm theo số vé' type="text" value={searchValue} onChange={handleSearchInputChange} />
        <button className={qlv('locve1')} onClick={handleFilterClick}>Lọc vé</button>
        <button className={qlv('nutxuat')} >Xuất file</button>
        <div className={qlv("quanlive-search")}>
          <label>
            <input
              type="checkbox"
              name="chuaSuDung"
              checked={filterChecked.chuaSuDung}
              onChange={handleFilterInputChange1}
            />
            Chưa sử dụng
          </label><br/>
          <label>
            <input
              type="checkbox"
              name="hetHan"
              checked={filterChecked.hetHan}
              onChange={handleFilterInputChange1}
            />
            Hết hạn
          </label>
          <label><br/>
            <input
              type="checkbox"
              name="daSuDung"
              checked={filterChecked.daSuDung}
              onChange={handleFilterInputChange1}
            />
            Đã sử dụng
          </label>
        </div>

      </div>
      <div className={qlv("Table")}>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">STT</TableCell>
                <TableCell align="left">Booking</TableCell>
                <TableCell align="left">Số vé</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Ngày sử dụng</TableCell>
                <TableCell align="left">Ngày xuất vé</TableCell>
                <TableCell align="left">Cổng</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {currentRows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.stt}
                  </TableCell>
                  <TableCell align="left">{row.booking}</TableCell>
                  <TableCell align="left">{row.sove}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  <TableCell align="left" >{row.ngaysd}</TableCell>
                  <TableCell align="left" >{row.ngayxv}</TableCell>
                  <TableCell align="left" >{row.cong}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className={qlv("pagination")}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`page-btn ${i + 1 === currentPage ? 'active' : ''}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quanlive;