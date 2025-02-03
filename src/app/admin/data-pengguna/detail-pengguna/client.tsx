"use client";
import * as React from "react";

import ProfileDetail from "./profile-pengguna/profile-pengguna";
import RiwayatPenukaran from "./riwayat-penukaran/riwayat-penukaran";

export default function DetailPenggunaClient() {
  return (
    <>
      <ProfileDetail />
      <RiwayatPenukaran />
    </>
  );
}
