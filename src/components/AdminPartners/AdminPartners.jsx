import React, { useEffect, useState } from "react";
import "./AdminPartners.scss";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
// import { partners } from "../../data/partners";
import {useSelector,useDispatch} from "react-redux"
import ReactPaginate from "react-paginate";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import { getPartners } from "../../features/partnerSlice";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
const AdminPartners = () => {
  const dispatch = useDispatch();
  const partners = useSelector((state)=>state.partner.partners);
  const [page, setPage] = useState(0);
  const itemsPerPage = 8;
  useEffect(()=>{
    dispatch(getPartners());
  },[dispatch])
  return (
    <div className="admin-partners">
   <div class="modal fade" id="addPartner" tabindex="-1" aria-labelledby="addPartnerLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="addPartnerLabel">add partner</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form className="add-partner-form">
            <div className="field partner-title">
                <label htmlFor="partner-title">partner title</label>
                <input type="text" placeholder="partner title ..." />
            </div>
            <div className="field partner-adresse">
                <label htmlFor="partner-adresse">partner adresse</label>
                <input type="text" placeholder="partner adresse ..." />
            </div>
            <div className="field partner-city">
                <label htmlFor="partner-city">partner city</label>
                <input type="text" placeholder="partner city ..." />
            </div>
            <div className="field partner-category">
                <label htmlFor="partner-category">partner category</label>
                <input type="text" placeholder="ex: remote or face to face " />
            </div>
            <div className="field partner-image">
                <label htmlFor="partner-image">partner image</label>
                <input type="text" placeholder="partner image ..." />
            </div>
            <div className="field partner-start-date">
                <label htmlFor="partner-start-date">partner start date</label>
                <input type="date" placeholder="partner start date ..." />
            </div>
            <div className="field partner-end-date">
                <label htmlFor="partner-end-date">partner end date</label>
                <input type="date" placeholder="partner end date ..." />
            </div>
        </form>
      </div>
      <div class="modal-footer">
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        <button type="button" class="btn btn-primary p-3">add partner</button>
      </div>
    </div>
  </div>
</div>
      <div className="top">
        <h1>Partners</h1>
        <button className="add-partner-btn" data-bs-toggle="modal" data-bs-target="#addPartner">
          <AddCircleOutlineRoundedIcon /> Add new partner
        </button>
      </div>
      <div className="bottom">
        <table className="partners-table">
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>adresse</th>
              <th>city</th>
              <th>category</th>
              <th>image</th>
              <th>start date</th>
              <th>end date</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {partners.filter((item, index) => {
         return (index >= page * itemsPerPage) & (index < (page + 1) * itemsPerPage);
        }).map((partner) => (
              <tr key={partner.id}>
                <td>{partner.id}</td>
                <td>{partner.title}</td>
                <td>{partner.adresse}</td>
                <td>{partner.city}</td>
                <td>{partner.category}</td>
                <td>
                  {/* <img src={partner.image} width={50} alt="" /> */}
                  {partner.placesCount}
                </td>
                <td>{partner.startDate}</td>
                <td>{partner.endDate}</td>
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
  previousLabel={
    <KeyboardArrowLeftRoundedIcon/>
  }
  nextLabel={
    <KeyboardArrowRightRoundedIcon/>
  }
/>
      </div>
    </div>
  );
};

export default AdminPartners;
