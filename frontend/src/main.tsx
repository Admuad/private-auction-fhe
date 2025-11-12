import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import {
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { sepolia, mainnet, polygon, optimism, arbitrum, base } from "viem/chains";

import "@rainbow-me/rainbowkit/styles.css";

const config = getDefaultConfig({
  appName: "Zama Front",
  projectId: "96919b5df10daff3dba92f92a29b7eb7", // we'll fix this next
  chains: [sepolia , mainnet, polygon, optimism, arbitrum, base],
  ssr: false,
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
