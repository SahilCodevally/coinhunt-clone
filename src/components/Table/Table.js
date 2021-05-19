import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { Table, Button } from "react-bootstrap";
import * as coinActions from "../../store/action";

const DataTable = (props) => {
  const { data, updateVote, promotedCoins } = props;
  return (
    <div className="data-table">
      <Table responsive variant="light">
        {!promotedCoins && (
          <thead>
            <tr>
              <th></th>
              <th>Market cap</th>
              <th>Time since launch</th>
              <th>Votes</th>
            </tr>
          </thead>
        )}
        <tbody>
          {data && data.length > 0 ? (
            data.map((coin) => (
              <tr key={coin.id}>
                <th>
                  <img alt="coin-imge" src={coin.image} />
                  {coin.name}
                </th>
                <th>${coin.marketCap}</th>
                <th>{moment(coin.launchTime).startOf("day").fromNow(true)}</th>
                <th>
                  <Button
                    className="vote_button"
                    variant={coin.voted ? "success" : "outline-success"}
                    onClick={() => updateVote(coin.id)}
                  >
                    <div className="button-svg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="landing_vote_icon"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                        ></path>
                      </svg>
                      <div className="vote_text">{coin.totalVotes}</div>
                    </div>
                  </Button>
                </th>
              </tr>
            ))
          ) : (
            <tr>No data available</tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

// Dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    updateVote: (id) => dispatch(coinActions.vote(id)),
  };
};

export default connect(undefined, mapDispatchToProps)(DataTable);
