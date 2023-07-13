import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Table.css";

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã gói</th>
            <th>Tên gói</th>
            <th>Ngày áp dụng</th>
            <th>Ngày hết hạn</th>
            <th>Gía vé</th>
            <th>Gía combo</th>
            <th>Tình trạng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const statusText =
              row.status.charAt(0).toUpperCase() + row.status.slice(1);

            return (
              <tr key={idx}>
                <td>{row.STT}</td>
                <td className="expand">{row.magoi}</td>
                <td>{row.tengoive}</td> 
                <td>{row.ngayapdung}</td>
                <td>{row.hethan}</td>
                <td>{row.giave}</td>
                <td>{row.giacombo}</td>
                <td>
                  <span className={`label label-${row.status}`}>
                    {statusText}
                  </span>
                </td>
                <td className="fit">
                  <span className="actions">
                    {/* <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    /> */}
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    /><p className="text-capnhap">Cập nhập</p>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
