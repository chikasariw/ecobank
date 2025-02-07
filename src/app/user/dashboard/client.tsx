"use client";
import * as React from "react";

import { WelcomeSection } from "./welcome-card"
import { BalanceCard } from "./balance-card"
import { TransactionHistory } from "./transaction-history"
import { Barchart } from "./barchart";

export default function DashboardClient() {
  return (
    <div>
      <div className="lg:flex gap-3">
        <WelcomeSection />
        <BalanceCard />
      </div>
      <div className="lg:flex gap-3">
        <TransactionHistory />
        <div className="flex flex-col w-full lg:w-1/3 ">
          <Barchart />
        </div>
      </div>
    </div>
  )
}
