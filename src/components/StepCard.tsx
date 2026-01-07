interface StepCardProps {
    step: number | string;
    title: string;
    description: string;
}

export default function StepCard({ step, title, description }: StepCardProps) {
    return (
        <div className="relative border-4 border-blue-600 bg-white p-6 mx-auto">
            {/* Top middle "Step" label */}
            <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-5 py-3 rounded-lg text-base font-semibold shadow">
                Step

                {/* White circle with step number */}
                <div className="bg-blue-600 border-2 border-white rounded-full flex items-center justify-center text-white text-lg mt-2">
                    {step}
                </div>
            </div>


            {/* Card content */}
            <div className="mt-8 text-center">
                <h2 className="text-blue-600 text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
}
