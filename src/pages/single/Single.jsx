import "./Single.css";
import { Navbar, Sidebar } from "../../components/index";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Dana Subardjo</h1>

                <div className="detailItem">
                  <span className="itemKey">Jenis Kelamin:</span>
                  <span className="itemValue">Laki-Laki</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Rt/RW:</span>
                  <span className="itemValue">09/11</span>
                </div>

                
                <div className="detailItem">
                  <span className="itemKey">Desa:</span>
                  <span className="itemValue">Cagak</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Kecamatan:</span>
                  <span className="itemValue">Tanjung Minang</span>
                </div>
                
                <div className="detailItem">
                  <span className="itemKey">Kota:</span>
                  <span className="itemValue">Bekasi</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">Dana@gmail.com</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Telpon:</span>
                  <span className="itemValue">+62 2345 67 89</span>
                </div>
                
                <div className="detailItem">
                  <span className="itemKey">Alamat:</span>
                  <span className="itemValue">
                    Jl. Cagak No 27 Rw.11/Rt.09 Bekasi Jawa Barat
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Kewarganegaraan:</span>
                  <span className="itemValue">Indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Single;
