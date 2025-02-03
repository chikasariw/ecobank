"use client";
import * as React from "react";

import { WelcomeSection } from "./welcome-card"
import { BalanceCard } from "./balance-card"
import { TransactionHistory } from "./transaction-history"
import { StatsSection } from "./chart-card"

export default function DashboardClient() {
  return (
    <div>
      <div className="lg:flex gap-3">
        <WelcomeSection />
        <BalanceCard />
      </div>
      <div className="lg:flex gap-3">
        <TransactionHistory />
        <StatsSection />
      </div>
    </div>
  )
}
