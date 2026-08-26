"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

export function generateStaticParams() {
  return [];
}

export default function ReferralRedirect() {
  const { referralCode } = useParams<{ referralCode: string }>();

  useEffect(() => {
    if (!referralCode) return;

    window.location.href =
      `https://staging.shiptos.com/api/v1/referral/share/${encodeURIComponent(
        referralCode
      )}`;
  }, [referralCode]);

  return null;
}