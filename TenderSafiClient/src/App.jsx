import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Approve from "./pages/approve/Approve";
import BiderForm from "./pages/biderpostform/BiderForm";
import LandingPage from "./pages/LandingPage";
import TenderAllocation from "./pages/tenderallocation/TenderAllocation";
import AvailableTenders from "./pages/tenderpost/AvailableTenders";
import DisplayTenders from "./pages/tenderpost/DisplayAvailableTenders";
import Tenders from "./pages/tenderpost/Tenders";
import TenderStatus from "./pages/tenderstatus/TenderStatus";
// import Tokens from "./pages/Tokens";

function App() {
 

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/Tenders" element={<Tenders />} />
          <Route path="/BiderForm" element={<BiderForm />} />
          <Route path="/TenderAllocation" element={<TenderAllocation />} />
          <Route path="/DisplayAvailableTenders" element={<DisplayTenders />} />
          
          <Route path="/AvailableTenders" element={<AvailableTenders />} />
          <Route path="/TenderStatus" element={<TenderStatus />} />
          <Route path="/Approve" element={<Approve />} />
          {/* <Route path="/Tokens" element={<Tokens />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
