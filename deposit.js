import { useState, useContext } from "react";
import UserContext from "./context";

export default function Deposit() {
  const ctx = useContext(UserContext);
  const sam = ctx.users.length;
  const newBalance = ctx.users[sam - 1].balance;

  const [balance, setBalance] = useState(newBalance);
  const [input, setInput] = useState("");
  const [Deposit, setDeposit] = useState("");
  const [update, setUpdate] = useState(true);

  const click = () => {
    if (input > 0) {
      setBalance(Number(input) + newBalance);
      const total = newBalance + Number(input);
      ctx.users[sam - 1].balance = total;
      setUpdate(false);
      alert(`Deposit Successfully ${input}`);
    } else alert("enter a positive number");
    setInput("");
    setUpdate(true);
  };

  // function pageRefresh() {
  //   setInput("");
  //   setUpdate(true);
  // }
  // console.log(pageRefresh);

  return (
    <>
      <div className="deposit">
        <div class="card">
          <div class="bg-primary card-header">Deposit In Your Account</div>
          <div class="card-body">
            <label className="form-label">Balance: {balance}</label>
            <br />
            <br />
            <label className="form-label">Deposit</label>
            <br />
            <input
              type="input"
              placeholder="Enter Amount To Be Deposited"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <br />
            <br />
            <button
              class="btnbtn-primary btnstyle"
              type="submit"
              disabled=""
              onClick={click}
            >
              <span>Deposit</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
