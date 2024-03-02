import investmentplans from "@/lib/investmentplans";
import Link from "next/link";

export default function InvestmentCards() {
  return (
    // parent div container
    <section className="flex gap-4 flex-col md:flex-row p-6">
      {investmentplans.map((plan) => (
        <div
          key={plan.id}
          className="bg-sideBar flex-1 basis-auto space-y-4 rounded-lg p-3 "
        >
          <h4 className="text-neutral-400 md:text-2xl text-2xl font-header font-semibold">
            {plan.name}
          </h4>
          <h4 className="text-neutral-200 text-4xl font-header font-bold">
            {plan.minAmount}
          </h4>
          <p className="font-header text-neutral-400 underline">
            ROI:{plan.return}
          </p>
          <p className="font-header text-neutral-400 underline">
            Duration:{plan.duration}
          </p>
          <div className="py-5">
            <Link
              href="/dashboard/deposit"
              className="bg-main rounded-lg px-4 py-3 w-full font-header text-white font-bold"
            >
              Get started
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
