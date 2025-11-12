import { WagmiProvider } from "wagmi";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { config } from "./wagmiConfig";

import "@rainbow-me/rainbowkit/styles.css";
import "./index.css";

// Page imports
import Layout from "./Layout";
import Home from "./pages/Home";
import CreateAuction from "./pages/CreateAuction";
import Bid from "./pages/Bid";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

export default function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
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
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
