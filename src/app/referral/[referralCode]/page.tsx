import ReferralRedirectClient from "./ReferralRedirectClient";

export function generateStaticParams() {
  // Generate at least one static page so Next.js can export the dynamic route.
  // The actual referral code is handled client-side from the URL.
  return [{ referralCode: "default" }];
}

type Props = {
  params: Promise<{
    referralCode: string;
  }>;
};

export default async function ReferralRedirect({
  params,
}: Props) {
  const { referralCode } = await params;

  return <ReferralRedirectClient referralCode={referralCode} />;
}