import { useContext } from "react";
import { Card } from "react-bootstrap";
import UserContext from "./context";

export default function AllData() {
  const ctx = useContext(UserContext);
  function renderTableHeader() {
    let header = Object.keys(ctx.users[0]);
    return header.map((value, index) => {
      return <th>{value}</th>;
    });
  }

  function renderTableData() {
    return ctx.users.map((user, index) => {
      const { name, email, password, balance } = user;
      return (
        <tr className="data">
          <td>{name}</td>
          <td>{email}</td>
          <td>{password}</td>
          <td>{balance}</td>
        </tr>
      );
    });
  }

  return (
    <div className="alldata">
      <Card>
        <Card.Header className="bg-primary card-headera">
          All Transactions
        </Card.Header>
        <Card.Body>
          {" "}
          {
            <>
              <br />
              <table id="users">
                <tr>{renderTableHeader()}</tr>
                {renderTableData()}
              </table>
              <br />
            </>
          }
        </Card.Body>
      </Card>
    </div>
  );
}
