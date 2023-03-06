export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];


// DataTable Officers
export const officerColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "gender",
    headerName: "gender",
    width: 100,
  },
  {
    field: "activate",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.activate}`}>
          {params.row.activate}
        </div>
      );
    },
  },
];

// data officer
export const officerRows = [
  {
    id: 1,
    username: "Dana Subardjo",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    activate: "active",
    email: "Dana@gmail.com",
    age: 35,
    dateBirth : "10-01-1990",
    placeBirth : "Bekasi",
    gender : "Laki-laki",
    addres : "Jl. Cagak No 27 Rw.11/Rt.09 Bekasi Jawa Barat",
    Rt : "09",
    Rw : "11",
    village : "Desa Cagak",
    subDistrict : "Jaya",
    city : "Bekasi",
    province : "Jawa Barat",
    religion : "Islam",
    marital_status : "Pelajar",
    job : "Wirausaha",
    citizenship : "Loremm",
    mother_name : "Edroh Sukaesih",
    father_name : "Rudi Adriansih",
  },
  {
    id: 2,
    username: "Dzaki Hars",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    activate: "passive",
    email: "harsnow@gmail.com",
    age: 35,
    dateBirth : "10-01-1990",
    placeBirth : "Bekasi",
    gender : "Laki-laki",
    addres : "Jl. Cagak No 27 Rw.11/Rt.09 Bekasi Jawa Barat",
    Rt : "09",
    Rw : "11",
    village : "Desa Cagak",
    subDistrict : "Jaya",
    city : "Bekasi",
    province : "Jawa Barat",
    religion : "Islam",
    marital_status : "Pelajar",
    job : "Wirausaha",
    citizenship : "Loremm",
    mother_name : "Edroh Sukaesih",
    father_name : "Rudi Adriansih",
  },
  {
    id: 3,
    username: "Nopal",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    activate: "pending",
    email: "Noval@gmail.com",
    age: 35,
    dateBirth : "10-01-1990",
    placeBirth : "Bekasi",
    gender : "Laki-laki",
    addres : "Jl. Cagak No 27 Rw.11/Rt.09 Bekasi Jawa Barat",
    Rt : "09",
    Rw : "11",
    village : "Desa Cagak",
    subDistrict : "Jaya",
    city : "Bekasi",
    province : "Jawa Barat",
    religion : "Islam",
    marital_status : "Pelajar",
    job : "Wirausaha",
    citizenship : "Loremm",
    mother_name : "Edroh Sukaesih",
    father_name : "Rudi Adriansih",
  },
  {
    id: 4,
    username: "Surya",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    activate: "active",
    email: "suryaw@gmail.com",
    age: 35,
    dateBirth : "10-01-1990",
    placeBirth : "Bekasi",
    gender : "Laki-laki",
    addres : "Jl. Cagak No 27 Rw.11/Rt.09 Bekasi Jawa Barat",
    Rt : "09",
    Rw : "11",
    village : "Desa Cagak",
    subDistrict : "Jaya",
    city : "Bekasi",
    province : "Jawa Barat",
    religion : "Islam",
    marital_status : "Pelajar",
    job : "Wirausaha",
    citizenship : "Loremm",
    mother_name : "Edroh Sukaesih",
    father_name : "Rudi Adriansih",
  },
  {
    id: 5,
    username: "Reyhan",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    activate: "active",
    email: "1snow@gmail.com",
    age: 35,
    dateBirth : "10-01-1990",
    placeBirth : "Bekasi",
    gender : "Laki-laki",
    addres : "Jl. Cagak No 27 Rw.11/Rt.09 Bekasi Jawa Barat",
    Rt : "09",
    Rw : "11",
    village : "Desa Cagak",
    subDistrict : "Jaya",
    city : "Bekasi",
    province : "Jawa Barat",
    religion : "Islam",
    marital_status : "Pelajar",
    job : "Wirausaha",
    citizenship : "Loremm",
    mother_name : "Edroh Sukaesih",
    father_name : "Rudi Adriansih",
  },
  {
    id: 6,
    username: "Adriansyah",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    activate: "active",
    email: "adri@gmail.com",
    age: 35,
    dateBirth : "10-01-1990",
    placeBirth : "Bekasi",
    gender : "Laki-laki",
    addres : "Jl. Cagak No 27 Rw.11/Rt.09 Bekasi Jawa Barat",
    Rt : "09",
    Rw : "11",
    village : "Desa Cagak",
    subDistrict : "Jaya",
    city : "Bekasi",
    province : "Jawa Barat",
    religion : "Islam",
    marital_status : "Pelajar",
    job : "Wirausaha",
    citizenship : "Loremm",
    mother_name : "Edroh Sukaesih",
    father_name : "Rudi Adriansih",
  },
  {
    id: 7,
    username: "Rahman",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    activate: "active",
    email: "Rahman@gmail.com",
    age: 35,
    dateBirth : "10-01-1990",
    placeBirth : "Bekasi",
    gender : "Laki-laki",
    addres : "Jl. Cagak No 27 Rw.11/Rt.09 Bekasi Jawa Barat",
    Rt : "09",
    Rw : "11",
    village : "Desa Cagak",
    subDistrict : "Jaya",
    city : "Bekasi",
    province : "Jawa Barat",
    religion : "Islam",
    marital_status : "Pelajar",
    job : "Wirausaha",
    citizenship : "Loremm",
    mother_name : "Edroh Sukaesih",
    father_name : "Rudi Adriansih",
  },
  {
    id: 8,
    username: "Subakdi",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    activate: "active",
    email: "1snow@gmail.com",
    age: 35,
    dateBirth : "10-01-1990",
    placeBirth : "Bekasi",
    gender : "Laki-laki",
    addres : "Jl. Cagak No 27 Rw.11/Rt.09 Bekasi Jawa Barat",
    Rt : "09",
    Rw : "11",
    village : "Desa Cagak",
    subDistrict : "Jaya",
    city : "Bekasi",
    province : "Jawa Barat",
    religion : "Islam",
    marital_status : "Pelajar",
    job : "Wirausaha",
    citizenship : "Loremm",
    mother_name : "Edroh Sukaesih",
    father_name : "Rudi Adriansih",
  },
  {
    id: 9,
    username: "Jaheran",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    activate: "active",
    email: "1snow@gmail.com",
    age: 35,
    dateBirth : "10-01-1990",
    placeBirth : "Bekasi",
    gender : "Laki-laki",
    addres : "Jl. Cagak No 27 Rw.11/Rt.09 Bekasi Jawa Barat",
    Rt : "09",
    Rw : "11",
    village : "Desa Cagak",
    subDistrict : "Jaya",
    city : "Bekasi",
    province : "Jawa Barat",
    religion : "Islam",
    marital_status : "Pelajar",
    job : "Wirausaha",
    citizenship : "Loremm",
    mother_name : "Edroh Sukaesih",
    father_name : "Rudi Adriansih",
  },
  {
    id: 10,
    username: "Subardo",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    activate: "active",
    email: "1snow@gmail.com",
    age: 35,
    dateBirth : "10-01-1990",
    placeBirth : "Bekasi",
    gender : "Laki-laki",
    addres : "Jl. Cagak No 27 Rw.11/Rt.09 Bekasi Jawa Barat",
    Rt : "09",
    Rw : "11",
    village : "Desa Cagak",
    subDistrict : "Jaya",
    city : "Bekasi",
    province : "Jawa Barat",
    religion : "Islam",
    marital_status : "Pelajar",
    job : "Wirausaha",
    citizenship : "Loremm",
    mother_name : "Edroh Sukaesih",
    father_name : "Rudi Adriansih",
  },
  
];