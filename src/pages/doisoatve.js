// import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";

// import "./css/doisoatve.module.scss";
import styles from './css/doisoatve.module.scss';
import classNames from 'classnames/bind';
let dsv = classNames.bind(styles);


const rows = [
  {
    stt:1,sove:12345678,date:'12/12/2023',tenloaive:'ve cong',cong:'cong 1',soat:'chua doi soat'

  },
  {
    stt:2,sove:12345678,date:'12/12/2023',tenloaive:'ve cong',cong:'cong 1',soat:'chua doi soat'

  },
  {
    stt:2,sove:12345678,date:'12/12/2023',tenloaive:'ve cong',cong:'cong 1',soat:'chua doi soat'

  },
  {
    stt:2,sove:12345678,date:'12/12/2023',tenloaive:'ve cong',cong:'cong 1',soat:'chua doi soat'

  },
  {
    stt:2,sove:12345678,date:'12/12/2023',tenloaive:'ve cong',cong:'cong 1',soat:'chua doi soat'

  },
  {
    stt:2,sove:12345678,date:'12/12/2023',tenloaive:'ve cong',cong:'cong 1',soat:'chua doi soat'

  },
  {
    stt:2,sove:12345678,date:'12/12/2023',tenloaive:'ve cong',cong:'cong 1',soat:'chua doi soat'

  },
  {
    stt:2,sove:12345678,date:'12/12/2023',tenloaive:'ve cong',cong:'cong 1',soat:'chua doi soat'

  },

];

const makeStyle = (soat) => {
  if (soat === "Chưa đổi soát") {
    return {
      color: "gray",
    };
  } else if (soat === "Đã đổi soát") {
    return {
      color: "red",
    };
  }
};


export function Doisoatve() {
  useEffect(() => {
    // Khởi tạo rowsToDisplay với `rowsPerPage` phần tử đầu tiên của `rows` array
    setRowsToDisplay(rows.slice(0, rowsPerPage));
  }, []); // empty dependency array ensures this effect only runs once, when the component mounts

  const [currentPage] = useState(1);
  const [rowsPerPage] = useState(8);
  const [searchValue, setSearchValue] = useState("");
  const [isLabeled, setIsLabeled] = useState("Tất cả");
  const [rowsToDisplay, setRowsToDisplay] = useState([]);
  const handleSearch = (event) => {
    event.preventDefault();

    const filteredRows = rows.filter((row) => {
      if (isLabeled === "Đã đổi soát" && row.soat === "Đã đổi soát") {
        return true;
      }
      if (isLabeled === "Chưa đổi soát" && row.soat === "Chưa đổi soát") {
        return true;
      }
      if (isLabeled === "Tất cả") {
        return true;
      }
      return false;
    });

    const searchedRows = filteredRows.filter((row) =>
      row.sove.toString().includes(searchValue)
    );

    setRowsToDisplay(searchedRows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage));
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleFilterChange = (event) => {
    setIsLabeled(event.target.value);
  };


  

  return ( 
    <div className={dsv("AppGlass2")}>
      <div className={dsv("Table")}>
        <h1 className={dsv("h1")}>Đổi soát vé</h1>
        <input
            className={dsv("search-locve")}
            placeholder="Lọc theo số vé"
            type="text"
            id="search"
            value={searchValue}
            onChange={handleSearchChange}
          /><br />
          <button className={dsv("chotdoisoat-button")} type="submit">
            Chốt đổi vé
          </button>
        <div className={dsv("content2")}>
          <h3 className={dsv("h3")}>Lọc vé</h3>
          {/* <select className="option">
            <option value="option1">Hội chợ triển lãm tiêu dùng 2021</option>
            <option value="option2">Hội chợ triển lãm tiêu dùng 2021</option>
           
          </select> */}
        
          <h4 className={dsv("text-tinhtrang")}>Tình trạng soát vé</h4>
          <div className={dsv("checkbox")}>
            <label>
              <input
                type="radio"
                value="Tất cả"
                checked={isLabeled === "Tất cả"}
                onChange={handleFilterChange}
              />
              Tất cả
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="Chưa đổi soát"
                checked={isLabeled === "Chưa đổi soát"}
                onChange={handleFilterChange}
              />
              Chưa đổi soát
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="Đã đổi soát"
                checked={isLabeled === "Đã đổi soát"}
                onChange={handleFilterChange}
              />
              Đã đổi soát
            </label>
          </div>
          <h4 className={dsv("loaive")}>Loại vé</h4>
          <p className={dsv("vecong")}>Vé cổng</p>
          <h4 className={dsv("tungay")}>Từ ngày</h4>
          <input className={dsv("input" )}type="date" placeholder="01/05/2021"/>
          <h4 className={dsv("denngay")}>Đến ngày</h4>
          <input className={dsv("inputdn" )}type="date" /> 
          <form onSubmit={handleSearch}>
         
          
          <button className={dsv("btlocve")} type="submit">  lọc vé</button>
        </form>
        </div>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">STT</TableCell>
                <TableCell align="left">Số vé</TableCell>
                <TableCell align="left">Ngày sử dụng</TableCell>
                <TableCell align="left">Tên loại vé</TableCell>
                <TableCell align="left">Cổng check-in</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rowsToDisplay.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {((currentPage - 1) * rowsPerPage + 1) + index}
                  </TableCell>

                  <TableCell component="th" scope="row">
                    {row.sove}
                  </TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">{row.tenloaive}</TableCell>
                  <TableCell align="left">
                    <span className="status">{row.cong}</span>
                  </TableCell>
                  <TableCell
                    align="left"
                    style={makeStyle(row.soat)}
                  >
                    {row.soat}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
export default Doisoatve;
