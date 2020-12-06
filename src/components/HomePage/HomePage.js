import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
// import '../HomePage/homePages.css';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.transactionDetails = {
      amount: "Rs. 10,00,000",
      paymentChannel: "OmniChannel",
      speed: "30 Seconds",
      OverallStatus: "Pending"
    };
    this.debitorDetails = {
      firstName: "Rajkamal",
      lastName: "MM",
      address: "no 4, Dubai Main road, Dubai kurukku sandu, Dubai",
      cardNo: "1234-5678-9012-3456",
      accountNumber: 23123423,
      bankName: "Reserve Bank of Dubai"
    };
    this.creditorDetails = {
      firstName: "Vigeesh",
      lastName: "LB",
      address: "234, Singapore Appartment, singapore",
      cardNo: "9012-3456-1234-5678",
      accountNumber: 34232312,
      bankName: "DBS Singapore"
    };
  }
  render() {
    return (
      <div className="HomePage">
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col-md-12 searchContainer">
              <div className="searchDiv">
                <span> Enter Transaction ID :</span>
                <input type="text" placeholder="search Transactions" className="searchIP" />
                <button className="searchBtn">Search</button>
                <button className="resetBtn">Reset</button>
              </div>
            </div>
            <div className="col-md-4 text-left">
              <h5><u>Transactions Details</u></h5>
              <p><strong>Amount:</strong> {this.transactionDetails.amount}</p>
              <p><strong>Payment Channel:</strong> {this.transactionDetails.paymentChannel}</p>
              <p><strong>Speed:</strong> {this.transactionDetails.speed}</p>
              <p><strong>Overall Status:</strong> {this.transactionDetails.OverallStatus}</p>
            </div>
            <div className="col-md-4 text-left">
              <h5><u>Debitor Details</u></h5>
              <p><strong>First Name:</strong> {this.debitorDetails.firstName}</p>
              <p><strong>Last Name:</strong> {this.debitorDetails.lastName}</p>
              <p><strong>Address:</strong> {this.debitorDetails.address}</p>
              <p><strong>Card Number:</strong> {this.debitorDetails.cardNo}</p>
              <p><strong>Account Number:</strong> {this.debitorDetails.accountNumber}</p>
              <p><strong>Bank Name:</strong> {this.debitorDetails.bankName}</p>
            </div>
            <div className="col-md-4 text-left">
              <h5><u>creditor Details</u></h5>
              <p><strong>First Name:</strong> {this.creditorDetails.firstName}</p>
              <p><strong>Last Name:</strong> {this.creditorDetails.lastName}</p>
              <p><strong>Address:</strong> {this.creditorDetails.address}</p>
              <p><strong>Card Number:</strong> {this.creditorDetails.cardNo}</p>
              <p><strong>Account Number:</strong> {this.creditorDetails.accountNumber}</p>
              <p><strong>Bank Name:</strong> {this.creditorDetails.bankName}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
