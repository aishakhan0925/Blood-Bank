import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { DONORS } from "../../Shared/donors";
import all from "../../Config/Fire";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function OurDonors() {
  const [state, setState] = useState({ donor: [] });
  const classes = useStyles();

  // Mounting Component
  useEffect(() => {
    console.log("mounted");
    // Fetching Data from firebase realtime DB

    all.db.ref("NewDonor").on("child_added", (data) => {
      const DataFromDB = data.val();
      state.donor.push(DataFromDB);
      // console.log(state.donor);
      console.log(state.donor);
      setState({
        donor: DataFromDB,
      });
      return state;
    });
  }, [0]);

  return (
    <div className="container p-5 m-auto align-content-center justify-content-center">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/home">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/about">About</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Our Donor</BreadcrumbItem>
      </Breadcrumb>
      <h1 align="center" className="p-4">
        Available Donors
      </h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">First Name</StyledTableCell>
              <StyledTableCell align="center">Last Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Tel.</StyledTableCell>
              <StyledTableCell align="center">Age</StyledTableCell>
              <StyledTableCell align="center">City</StyledTableCell>
              <StyledTableCell align="center">Country</StyledTableCell>
              <StyledTableCell align="center">Blood Group</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.donor.map((don) => (
              <StyledTableRow key={don.id} align="center">
                <StyledTableCell align="center">
                  {don.firstname}
                </StyledTableCell>
                <StyledTableCell align="center">{don.lastname}</StyledTableCell>
                <StyledTableCell align="center">{don.email}</StyledTableCell>
                <StyledTableCell align="center">{don.telnum}</StyledTableCell>
                <StyledTableCell align="center">{don.age}</StyledTableCell>
                <StyledTableCell align="center">{don.city}</StyledTableCell>
                <StyledTableCell align="center">{don.country}</StyledTableCell>
                <StyledTableCell align="center">
                  {don.bloodGroup}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
