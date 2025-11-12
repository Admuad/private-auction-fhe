import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { sepolia } from "wagmi/chains";
import { http } from "wagmi";

export const config = getDefaultConfig({
  appName: "Zama Auctions",
  projectId: "96919b5df10daff3dba92f92a29b7eb7", // ← replace this
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(),
  },
  ssr: false,
});
