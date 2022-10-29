import CurrentMarket from "./components/orderbook/orderbook";
import Graph from "./components/graph/graph";
import Header from "./components/header/header";
import "./app.css"
import UserPortfolio from "./components/userportfolio/userportfolio";
import TradeHistory from "./components/tradehistory/tradehistory";
import BuyAndSell from "./components/buyandsell/buyandsell";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="app">
      <Header />
      <div>
        <div className="cmg-container">
          <Graph />
          <CurrentMarket />
        </div>
        <div className="upthbs-container">
          <UserPortfolio />
          <TradeHistory />
          <BuyAndSell/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
