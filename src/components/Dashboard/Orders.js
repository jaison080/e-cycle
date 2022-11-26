import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

// const rows = [
//   createData(
//     0,
//     "16 Mar, 2019",
//     "Elvis Presley",
//     "Tupelo, MS",
//     "VISA ⠀•••• 3719",
//     312.44
//   ),
//   createData(
//     1,
//     "16 Mar, 2019",
//     "Paul McCartney",
//     "London, UK",
//     "VISA ⠀•••• 2574",
//     866.99
//   ),
//   createData(
//     2,
//     "16 Mar, 2019",
//     "Tom Scholz",
//     "Boston, MA",
//     "MC ⠀•••• 1253",
//     100.81
//   ),
//   createData(
//     3,
//     "16 Mar, 2019",
//     "Michael Jackson",
//     "Gary, IN",
//     "AMEX ⠀•••• 2000",
//     654.39
//   ),
//   createData(
//     4,
//     "15 Mar, 2019",
//     "Bruce Springsteen",
//     "Long Branch, NJ",
//     "VISA ⠀•••• 5919",
//     212.79
//   ),
// ];

function preventDefault(event) {
  event.preventDefault();
}
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const getDate = (date) => {
  let d = new Date(date);
  return months[d.getMonth()] + " " + d.getFullYear();
};

export default function Orders({ rows }) {
  return (
    <React.Fragment>
      <Title>Recent Returns</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "800 !important" }}>
              Appliance Type
            </TableCell>
            <TableCell style={{ fontWeight: "800 !important" }}>
              Model No.
            </TableCell>
            <TableCell style={{ fontWeight: "800 !important" }}>
              Purchase Date
            </TableCell>
            <TableCell style={{ fontWeight: "800 !important" }}>
              Current Condition
            </TableCell>
            <TableCell style={{ fontWeight: "800 !important" }}>
              Is Working
            </TableCell>
            <TableCell style={{ fontWeight: "800 !important" }}>
              Is Under Warranty
            </TableCell>
            {/* <TableCell align="right">Image</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row?.category?.toString()}</TableCell>
              <TableCell>{row?.modelNo?.toString()}</TableCell>
              <TableCell>{getDate(row?.purchaseDate)}</TableCell>
              <TableCell>{row?.currentCondition?.toString()}</TableCell>
              <TableCell>{row?.isWorking ? "Yes" : "No"}</TableCell>
              <TableCell>{row?.isWarranty ? "Yes" : "No"}</TableCell>
              {/* <TableCell align="right">{`$${row.disposalMethod}`}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
