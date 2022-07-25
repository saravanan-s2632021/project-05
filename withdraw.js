import { useState, useContext } from "react";
import UserContext from "./context";

export default function Withdraw() {
  const ctx = useContext(UserContext);
  const sam = ctx.users.length;
  const newBalance = ctx.users[sam - 1].balance;

  const [balance, setBalance] = useState(newBalance);
  const [input, setInput] = useState("");
  const [isWithDraw, setIsWithDraw] = useState("");
  const [update, setUpdate] = useState(true);

  function validateError(field, label) {
    if (input) {
      return false;
    }

    // if (field >= newValue) {
    //   alert("Insufficient Balance...");
    //   return false;
    // }
    return true;
  }

  const click = () => {
    if (input > 0) {
      if (input < newBalance) {
        setBalance(newBalance - input);
        const total = newBalance - Number(input);
        ctx.users[sam - 1].balance = total;
        setUpdate(false);
        alert(`Withdraw Successfully ${input}`);
      } else alert("insufficient balance ");
    } else alert("please enter the value greater then 0");
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
      <div className="withdraw">
        <div class="card">
          <div class="bg-primary card-headera">Withdraw From Account</div>
          <div class="card-body">
            <label className="form-label">Balance: {balance}</label>
            <br />
            <br />
            <label className="form-label">WithDraw</label>
            <br />
            <input
              type="input"
              placeholder="Enter Amount To Be Withdrawn"
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
              <span>WithDraw</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
