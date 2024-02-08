import React, { useEffect, useState } from "react";
import "./AdminPartners.scss";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
// import { partners } from "../../data/partners";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import { getPartners } from "../../features/partnerSlice";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
const AdminPartners = () => {
  const dispatch = useDispatch();
  const partners = useSelector((state) => state.partner.partners);
  const [page, setPage] = useState(0);
  const itemsPerPage = 8;
  useEffect(() => {
    dispatch(getPartners());
  }, [dispatch]);

  return (
    <div className="admin-partners">
      <div
        className="modal fade"
        id="addPartner"
        tabIndex="-1"
        aria-labelledby="addPartnerLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addPartnerLabel">
                add partner
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="add-partner-form">
                <div className="field partner-name">
                  <label htmlFor="partner-name">partner name</label>
                  <input type="text" placeholder="partner name ..." />
                </div>
                <div className="field partner-logo">
                  <label htmlFor="partner-logo">partner logo</label>
                  <input type="text" placeholder="partner logo ..." />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
              <button type="button" className="btn btn-primary p-3">
                add partner
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="top">
        <h1>Partners</h1>
        <button
          className="add-partner-btn"
          data-bs-toggle="modal"
          data-bs-target="#addPartner"
        >
          <AddCircleOutlineRoundedIcon /> Add new partner
        </button>
      </div>
      <div className="bottom">
        <table className="partners-table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>logo</th>
            </tr>
          </thead>
          <tbody>
            {partners
              .filter((item, index) => {
                return (
                  (index >= page * itemsPerPage) &
                  (index < (page + 1) * itemsPerPage)
                );
              })
              .map((partner) => (
                <tr key={partner.partenaireId}>
                  <td>{partner.partenaireId}</td>
                  <td>{partner.nom}</td>
                  <td>
                    <img src={partner.logo} width={50} />
                  </td>
                  <td>
                    <button className="edit-btn">
                      <BorderColorRoundedIcon />
                    </button>
                    <button className="delete-btn">
                      <DeleteOutlineRoundedIcon />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <ReactPaginate
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          activeClassName={"active"}
          onPageChange={(partner) => setPage(partner.selected)}
          pageCount={Math.ceil(partners.length / itemsPerPage)}
          breakLabel="..."
          previousLabel={<KeyboardArrowLeftRoundedIcon />}
          nextLabel={<KeyboardArrowRightRoundedIcon />}
        />
      </div>
    </div>
  );
};

export default AdminPartners;
