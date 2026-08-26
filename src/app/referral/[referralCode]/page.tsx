import { redirect } from "next/navigation";

type Props = {
    params: Promise<{
        referralCode: string;
    }>;
};

export default async function ReferralRedirect({ params }: Props) {
    const { referralCode } = await params;

    console.log("this is the the referralCode", referralCode)

    redirect(
        `https://staging.shiptos.com/api/v1/referral/share/${encodeURIComponent(
            referralCode
        )}`
    );
}