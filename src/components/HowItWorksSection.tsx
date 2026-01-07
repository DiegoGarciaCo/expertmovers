import StepCard from "./StepCard";

export default function HowItWorksSection() {
    const steps = [
        {
            step: 1,
            title: "Get a Free Quote",
            description:
                "Use our online calculator or call us to receive a no-obligation quote tailored to your moving needs.",
        },
        {
            step: 2,
            title: "Schedule Your Move",
            description:
                "Choose a convenient date and time for your move. We offer flexible scheduling to fit your busy life.",
        },
        {
            step: 3,
            title: "Enjoy a Stress-Free Move",
            description:
                "Our professional movers handle everything with care, ensuring a smooth and efficient moving experience.",
        },
    ];

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-24">
                    How It Works
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map(({ step, title, description }) => (
                        <StepCard
                            key={step}
                            step={step}
                            title={title}
                            description={description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}   
