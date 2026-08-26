"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

export default function ReferralRedirect() {
  const params = useParams<{ referralCode: string | string[] }>();

  useEffect(() => {
    const value = params.referralCode;

    const referralCode = Array.isArray(value) ? value[0] : value;

    if (!referralCode) return;

    window.location.href =
      `https://staging.shiptos.com/api/v1/referral/share/${encodeURIComponent(
        referralCode
      )}`;
  }, [params.referralCode]);

  return null;
}