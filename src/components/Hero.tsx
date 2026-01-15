import Image from "next/image";
import SingleStepForm from "./singleStepForm";
import TwoStepForm from "./2StepForm";

export default function Hero() {
    const NAV_HEIGHT = 96; // same as Nav h-24

    return (
        <section
            className="relative px-4 sm:px-6 lg:px-8 overflow-hidden"
            style={{ paddingTop: `${NAV_HEIGHT}px` }}
        >
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/backgroundImageOfChicago.png"
                    alt="Chicago skyline"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-top"
                />
            </div>

            <div className="relative max-w-7xl mx-auto flex items-center">
                <div className="grid md:grid-cols-2 gap-12 w-full">
                    {/* LEFT: Text directly on image */}
                    <div className="text-white">
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 capitalize mt-4">
                            Chicago's Top customer-referred Moving Company
                        </h1>

                        <p className="text-xl text-white/90 mb-8 max-w-xl uppercase">
                            Stress-free moving with no hidden fees. Trusted by repeat customers across
                            Chicago.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <a
                                href="#calculator"
                                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition text-center"
                            >
                                Get Free Quote
                            </a>
                            <a
                                href="tel:+17733607602"
                                className="bg-white/90 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white transition text-center"
                            >
                                📞 Call Now
                            </a>
                        </div>

                        <div className="flex items-center gap-8 text-sm text-white/90">
                            {["Licensed & Insured", "No Hidden Fees", "Same Day Service"].map(
                                (text) => (
                                    <div key={text} className="flex items-center gap-2">
                                        <svg
                                            className="w-5 h-5 text-green-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>{text}</span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* RIGHT: Form */}
                    <div className="rounded-2xl md:pr-10 self-center">
                        <div className="text-gray-500 text-center">
                            <TwoStepForm variant="hero" />
                        </div>
                    </div>

                    <div className="md:col-span-2 md:pr-10">
                        <div className="
    bg-white/50 
    mx-auto 
    mb-10 
    md:p-5 
    p-4
    rounded-lg 
    backdrop-blur-sm 
    grid grid-cols-2 gap-4
    md:grid-cols-4
    items-center
    w-full
  ">
                            <Image
                                src="/googleGuaranteed.png"
                                alt="Google Guaranteed"
                                width={100}
                                height={50}
                                className="object-contain mx-auto"
                            />
                            <Image
                                src="/hassleFreeGuarantee.png"
                                alt="Hassle Free Guaranteed"
                                width={100}
                                height={50}
                                className="object-contain mx-auto"
                            />
                            <Image
                                src="/localMovers.png"
                                alt="Best Price Guaranteed"
                                width={100}
                                height={50}
                                className="object-contain mx-auto"
                            />
                            <Image
                                src="/yelpGuaranteed.png"
                                alt="Yelp Guaranteed"
                                width={100}
                                height={50}
                                className="object-contain mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
