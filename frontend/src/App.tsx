import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page imports
import Layout from "./Layout";
import Home from "./pages/Home";
import CreateAuction from "./pages/CreateAuction";
import Bid from "./pages/Bid";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateAuction />} />
          <Route path="/bid" element={<Bid />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
}
