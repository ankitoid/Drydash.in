"use client";

import { useEffect } from "react";

type Props = {
  referralCode: string;
};

export default function ReferralRedirectClient({
  referralCode,
}: Props) {
  useEffect(() => {
    if (!referralCode) return;

    const url =
      `https://staging.shiptos.com/api/v1/referral/share/${encodeURIComponent(
        referralCode
      )}`;

    window.location.replace(url);
  }, [referralCode]);

  return null;
}