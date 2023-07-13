import React, { useState } from "react";

import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      STT: "",
      magoi: "",
      tengoive: "",
      ngayapdung: "",
      hethan: "",
      giave: "",
      giacombo: "",
      status: "",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.STT && formState.magoi && formState.tengoive && formState.ngayapdung && formState.hethan
      && formState.giave && formState.giacombo && formState.status) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form clasName="addform">
          <h1 className="text-themgoive">Thêm gói vé</h1>
          <p>Tên gói vé</p>
          <input
            name="tengoive"
            onChange={handleChange}
            value={formState.tengoive}
            className='nhaptengoive'
            type="text" />

          <p className="text-stt">STT</p>
          <input
          name="STT"
          onChange={handleChange} 
          value={formState.STT}
           className='nhapstt' />

          <p className="text-magoi">Mã gói</p>
          <input name="magoi"
              onChange={handleChange}
              value={formState.magoi} 
              className='nhapmagoi' />
          <div className="date">
            <p className="text-ngayapdung">Ngày áp dụng</p>
            <input
              name="ngayapdung"
              onChange={handleChange}
              value={formState.ngayapdung}
              className='nhapngayapdung'
              type="text" />
            <div className="hethan">
              <p >Ngày hết hạn</p>
              <input
                name="hethan"
                onChange={handleChange}
                value={formState.hethan}
                className="ngayhethan" type="text" />
            </div>
          </div>

          <div className="giave-ad-combo">
            <p>Gía vé áp dụng</p>
            <p>Vé lẻ với giá</p> <input name="giave" onChange={handleChange} value={formState.giave} className="vele" type="text" />
            <p>Vé Combo với giá</p> <input className="vecombo" name="giacombo"
              onChange={handleChange}
              value={formState.giacombo} type="text" />
          </div>
          <div className="nuttrangthai">
            Tình trạng
            <select
              name="status"
              onChange={handleChange}
              value={formState.status}
            >
              <option value="Đang áp dụng">Chọn tình trạng</option>
              <option value="Tắt">Tắt </option>
              <option value="ĐangÁpDụng">Đang Áp Dụng</option>
             
            </select>
          </div>
          <div className="nut">
            <button type="submit" className="btn-luu" onClick={handleSubmit}>
              Lưu
            </button>
            {/* {errors && <div className="error">{`Please include: ${errors}`}</div>} */}
            <button type="submit" className="btn-huy">
              Hủy
            </button>
          </div>


        </form>

      </div>
    </div>
  );
};
