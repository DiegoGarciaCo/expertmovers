import Image from 'next/image';

export default function Hero() {
    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            ⭐ Chicago's #1 Rated Moving Company
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Professional Moving Services in <span className="text-blue-600">Chicago</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Stress-free moving with expert care. Licensed, insured, and trusted by thousands of Chicago families.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <a href="#calculator" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition text-center">
                                Get Free Quote
                            </a>
                            <a href="tel:+17733607602" className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition text-center">
                                📞 Call Now
                            </a>
                        </div>
                        <div className="flex items-center gap-8 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Licensed & Insured</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>No Hidden Fees</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Same Day Service</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        {/* Placeholder for hero image - Replace with actual moving truck/team photo */}
                        <Image
                            src="/Hero.png"
                            alt="Expert Movers Logo and Reviews"
                            width={1920}
                            height={1200}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
