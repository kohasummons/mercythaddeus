// library
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Icons
import {
  TokenETH,
  TokenSOL,
  TokenBTC,
  TokenSTELLA,
  TokenSTARL,
} from "@web3icons/react";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

import { PaymentSchema } from "@/helpers";

const Pay = () => {
  const goBack = () => {
    window.history.back();
  };

  const paymentInfo: PaymentSchema[] = [
    {
      token: "Ethereum",
      icon: <TokenETH variant="branded" size="25" />,
      wallet_address: "0x078c8986fe7b4482d50c9063c2e8a5ab234686e2",
    },
    {
      token: "Solana",
      icon: <TokenSOL variant="branded" size="25" />,
      wallet_address: "8kLYo7P5aGhSA9Gupgx3kBUYHpmJMnoijRgA8D3t8zQ9",
    },
    {
      token: "Bitcoin",
      icon: <TokenBTC variant="branded" size="25" />,
      wallet_address: "Nil",
    },
    {
      token: "Stella",
      icon: <TokenSTELLA variant="branded" size="25" />,
      wallet_address: "Nil",
    },
    {
      token: "Starknet",
      icon: <TokenSTARL variant="branded" size="25" />,
      wallet_address: "Nil",
    },
  ];

  const [selectedToken, setSelectedToken] = useState(paymentInfo[0]);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(selectedToken.wallet_address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="lg:space-y-20 md:space-y-36 space-y-20 relative">
      <button
        type="button"
        className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center cursor-pointer"
        onClick={goBack}
      >
        <ArrowLeft size={20} className="font-medium" />
      </button>

      <div className="w-full md:w-[460px] h-[337px] mx-auto transform bg-secondary rounded-xl">
        <div className="w-full h-[195px] flex items-center justify-center">
          <div className="space-y-2">
            <div className="w-32 h-32 md:w-24 md:h-24 rounded-xl bg-[url(/display_image.svg)] bg-center bg-cover bg-no-repeat"></div>
            <p>Hey, I&apos;m Mercy! ✦</p>
          </div>
        </div>

        <motion.div
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-border h-[142px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Token Selection */}
          <div className="grid grid-cols-5 divide-x divide-border h-[88px]">
            {paymentInfo.map((token) => (
              <motion.button
                key={token.token}
                className={`p-6 relative ${
                  selectedToken.token === token.token
                    ? "bg-secondary"
                    : "hover:bg-gray-200"
                } border-b border-b-border`}
                onClick={() => setSelectedToken(token)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-6 h-6 mx-auto">{token.icon}</div>
                {selectedToken.token === token.token && (
                  <motion.p
                    className="absolute right-0 top-1/2 -translate-y-1/2 uppercase text-[#E7E7E7] text-sm"
                    style={{
                      writingMode: "vertical-lr",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {token.token}
                  </motion.p>
                )}
              </motion.button>
            ))}
          </div>

          {/* Wallet Address */}
          <div className="px-5 py-2 bg-secondary h-[54px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedToken.token}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-between"
              >
                <div className="font-mono font-sem text-[#717171] truncate">
                  {selectedToken.wallet_address}
                </div>
                <button
                  onClick={copyToClipboard}
                  className="ml-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={copied ? { scale: [1, 1.2, 1] } : {}}
                    className={copied ? "text-green-500" : "text-gray-400"}
                  >
                    {copied ? (
                      <>
                        <polyline points="20 6 9 17 4 12" />
                      </>
                    ) : (
                      <>
                        <rect
                          x="9"
                          y="9"
                          width="13"
                          height="13"
                          rx="2"
                          ry="2"
                        />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </>
                    )}
                  </motion.svg>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pay;
