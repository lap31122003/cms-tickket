
import { Table } from "./bang/Table";
import { Modal } from "./bang/Modal";
import { useState } from "react";
import styles from "./caidat.module.scss";
import classNames from 'classnames/bind';
let cd = classNames.bind(styles);
function Caidat1() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      STT: "1",
      magoi: "ALT20210501",
      tengoive:"Gói gia đình",
      ngayapdung:"14/04/2021",
      hethan:"14/04/2021",
      giave:"90.000 VND",
      giacombo:"360.000 VND/4vé",
      status: "ĐangÁpDụng",
    },
    {
      STT: "2",
      magoi: "ALT20210501",
      tengoive:"Gói sự kiện",
      ngayapdung:"14/04/2021",
      hethan:"14/04/2021",
      giave:"20.000 VND",
      giacombo:"",
      status: "Tắt",
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className={cd("AppGlass3")}>
        <h1 className={cd("h1")}>Danh sách gói vé</h1>
        <div>
        <input className={cd('timkiem-caidat' )}placeholder='Tìm kiếm theo số vé' type="text" />
        <button className={cd('nutthemgoive' )} onClick={() => setModalOpen(true)}>Thêm gói vé</button>
        <button className={cd('nutxuatfile')} >Xuất file</button>
      </div>
        <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
        {/* <button onClick={() => setModalOpen(true)} className="btn">
            Add
        </button> */}
        {modalOpen && (
            <Modal
            closeModal={() => {
                setModalOpen(false);
                setRowToEdit(null);
            }}
            onSubmit={handleSubmit}
            defaultValue={rowToEdit !== null && rows[rowToEdit]}
            />
        )}
        </div>
  );
}

export default Caidat1;
