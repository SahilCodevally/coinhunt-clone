import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { Tabs, Tab } from "react-bootstrap";

import * as coinActions from "../../store/action";

import DataTable from "../../components/Table/Table";

const Home = (props) => {
  const {
    tabKey,
    getAllTimeBest,
    updateTabKey,
    getTodayBest,
    allTimeBestCoins,
    promotedCoins,
    todayBestCoins,
  } = props;

  const getCoinData = useCallback(async () => {
    if (tabKey === "AllTimeBest") {
      await getAllTimeBest();
    } else {
      await getTodayBest();
    }
  }, [tabKey, getAllTimeBest, getTodayBest]);

  useEffect(() => {
    getCoinData();
  }, [tabKey, getCoinData]);

  return (
    <div className="home-container">
      <div className="promoted-coins">
        <div className="top-title">Promoted coins</div>
        <DataTable data={promotedCoins} tabKey={tabKey} promotedCoins />
      </div>
      <div className="all-coins">
        <Tabs
          id="coin-tabs"
          defaultActiveKey="TodayBest"
          activeKey={tabKey}
          onSelect={async (key) => {
            // Set key into store
            await updateTabKey(key);
          }}
        >
          <Tab eventKey="AllTimeBest" title="All time best">
            <DataTable data={allTimeBestCoins} tabKey={tabKey} />
          </Tab>
          <Tab eventKey="TodayBest" title="Today's best">
            <DataTable data={todayBestCoins} tabKey={tabKey} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

// Get state value from store
const mapStateToProps = (state) => {
  return {
    todayBestCoins: state.coin.todayBestCoins,
    allTimeBestCoins: state.coin.allTimeBestCoins,
    promotedCoins: state.coin.promotedCoins,
    tabKey: state.coin.tabKey,
  };
};

// Dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    updateTabKey: (key) => dispatch(coinActions.updateTabKey(key)),
    getAllTimeBest: () => dispatch(coinActions.getAllTimeBest()),
    getTodayBest: () => dispatch(coinActions.getTodayBest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
