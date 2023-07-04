export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 260,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 130,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 10 },
  {
    field: "name",
    headerName: "Name",
    width: 350,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "distance",
    headerName: "distance",
    width: 50,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "desc",
    headerName: "desc",
    width: 370,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 600,
  },
  {
    field: "price",
    headerName: "Price",
    width: 80,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 50,
  },
];
