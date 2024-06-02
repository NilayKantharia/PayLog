import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./AddTransaction.css";

const AddTransaction = () => {
  const [showForm, setShowForm] = useState(false);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [transactionArray, setTransactionArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !isNaN(amount) &&
      amount.trim() !== "" &&
      description.trim() !== "" &&
      date.trim() !== "" &&
      time.trim() !== ""
    ) {
      const newTransaction = {
        amount: parseFloat(amount),
        description,
        date,
        time,
      };

      setTransactionArray([...transactionArray, newTransaction]);

      setAmount("");
      setDescription("");
      setDate("");
      setTime("");
      setShowForm(false);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Transaction History</h1>

      <div className="form-wrapper">
        {showForm ? (
          <form onSubmit={handleSubmit} className="transaction-form">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              required
            />
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
            <div className="button-group">
            <button type="button" onClick={() => setShowForm(false)} className="cancel-button">
                Cancel
              </button>
              <button type="submit" className="submit-button">Submit</button>
            </div>
          </form>
        ) : (
          <button onClick={() => setShowForm(true)} className="add-button">
            <FontAwesomeIcon icon={faPlus} />
            <span>Add Transaction</span>
          </button>
        )}
      </div>

      <div className="transaction-list">
        <h2>Transactions:</h2>
        <ul>
          {transactionArray.map((transaction, index) => (
            <li key={index}>
              <span className="transaction-info">Rs: {transaction.amount} on, {transaction.description}, on the date of, {transaction.date} at {transaction.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddTransaction;
