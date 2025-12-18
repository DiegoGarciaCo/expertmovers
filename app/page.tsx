import MoveboardLongForm from "@/src/components/moversLongForm";
import Testimonials from "@/src/components/testimonials";
import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        <div className="flex items-center">
                            {/* Logo - Replace with your actual logo */}
                            <div className="text-2xl font-bold text-blue-600">
                                <Image src="/Expert-Movers-Logo.png" alt="Expert Movers Logo" width={150} height={50} />
                            </div>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
                            <a href="#calculator" className="text-gray-700 hover:text-blue-600 transition">Get Quote</a>
                            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition">Reviews</a>
                            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
                            <a href="tel:+17733607602" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section - Above the Fold */}
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

            {/* Services Section */}
            <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Our Moving Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprehensive moving solutions tailored to your needs
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Card 1 */}
                        <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-blue-500 hover:shadow-lg transition">
                            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Local Moving</h3>
                            <p className="text-gray-600 mb-4">
                                Moving within Chicago? We provide fast, efficient local moving services with careful handling of your belongings.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Same-day service available
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Professional packing materials
                                </li>
                            </ul>
                        </div>

                        {/* Service Card 2 */}
                        <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-blue-500 hover:shadow-lg transition">
                            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Long Distance</h3>
                            <p className="text-gray-600 mb-4">
                                Relocating across state lines? Our experienced team ensures your items arrive safely at your new home.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Interstate moving specialists
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Real-time tracking
                                </li>
                            </ul>
                        </div>

                        {/* Service Card 3 */}
                        <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-blue-500 hover:shadow-lg transition">
                            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Commercial Moving</h3>
                            <p className="text-gray-600 mb-4">
                                Office relocation made easy. Minimize downtime with our efficient commercial moving solutions.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    After-hours moving available
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    IT equipment specialists
                                </li>
                            </ul>
                        </div>

                        {/* Service Card 4 */}
                        <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-blue-500 hover:shadow-lg transition">
                            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Packing Services</h3>
                            <p className="text-gray-600 mb-4">
                                Let our professionals handle the packing. We use premium materials to protect your valuables.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Full or partial packing
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Fragile item specialists
                                </li>
                            </ul>
                        </div>

                        {/* Service Card 5 */}
                        <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-blue-500 hover:shadow-lg transition">
                            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Storage Solutions</h3>
                            <p className="text-gray-600 mb-4">
                                Need temporary storage? Our secure facilities keep your belongings safe until you're ready.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Climate-controlled units
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    24/7 security monitoring
                                </li>
                            </ul>
                        </div>

                        {/* Service Card 6 */}
                        <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-blue-500 hover:shadow-lg transition">
                            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Last-Minute Moves</h3>
                            <p className="text-gray-600 mb-4">
                                Need to move quickly? We offer expedited moving services with the same quality care.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    24-hour availability
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Emergency response team
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Moving Calculator Section */}
            <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Hassle-Free Guarantee
                        </h2>
                        <p className="text-xl text-gray-600">
                            Use our hassle-free calculator to get an instant estimate for your move
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        {/* Placeholder for embed code */}
                        {/*    <div className="min-h-[400px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                            <div className="text-center text-gray-500">
                                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                <p className="text-lg font-semibold mb-2">Moving Calculator Embed Code Goes Here</p>
                                <p className="text-sm">Replace this section with your calculator embed code</p>
                            </div>
                         </div> */}
                        <MoveboardLongForm />
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                {/*
            <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            What Our Customers Say
                        </h2>
                        <p className="text-xl text-gray-600">
                            Don't just take our word for it - hear from our satisfied customers
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-xl p-8">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 italic">
                                "Expert Movers made our relocation completely stress-free. The team was professional, efficient, and took great care of our belongings. Highly recommend!"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold">
                                    SM
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">Sarah Mitchell</div>
                                    <div className="text-sm text-gray-600">Lincoln Park</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-8">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 italic">
                                "Best moving experience I've ever had! They arrived on time, worked quickly, and nothing was damaged. Worth every penny."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold">
                                    JT
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">James Thompson</div>
                                    <div className="text-sm text-gray-600">Wicker Park</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-8">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 italic">
                                "We needed a last-minute move and Expert Movers came through! Their team was incredibly accommodating and handled everything with care."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold">
                                    ER
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">Emily Rodriguez</div>
                                    <div className="text-sm text-gray-600">River North</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <Testimonials />
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-blue-100">
                            Contact us today for a free quote and let's make your move effortless
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {/* Phone */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                            <a href="tel:+7733607602" className="text-lg hover:underline">(773) 360-7602</a>
                            <p className="text-sm text-blue-200 mt-1">Available 24/7</p>
                        </div>

                        {/* Email */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                            <a href="mailto:info@hireexpertmovers.com" className="text-lg hover:underline">info@hireexpertmovers.com</a>
                            <p className="text-sm text-blue-200 mt-1">Response within 1 hour</p>
                        </div>

                        {/* Address */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                            <p className="text-lg">4841 W Division St</p>
                            <p className="text-lg">Chicago, IL 60651</p>
                            <p className="text-sm text-blue-200 mt-1">Mon-Fri: 9AM-5PM</p>
                            <p className="text-sm text-blue-200 mt-1">Sat: 9AM-1PM</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="#calculator" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition">
                            Get Your Free Quote Now
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="text-white text-xl font-bold mb-4">Expert Movers</h3>
                            <p className="text-sm">
                                Chicago's trusted moving company since 2014. Licensed, insured, and committed to excellence.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#services" className="hover:text-white transition">Local Moving</a></li>
                                <li><a href="#services" className="hover:text-white transition">Long Distance</a></li>
                                <li><a href="#services" className="hover:text-white transition">Commercial Moving</a></li>
                                <li><a href="#services" className="hover:text-white transition">Packing Services</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                                <li><a href="#testimonials" className="hover:text-white transition">Reviews</a></li>
                                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            {/* <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                    </svg>
                                </a>
                            </div>
                            */}
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center text-sm">
                        <p>&copy; 2024 Expert Movers Chicago. All rights reserved. | Licensed & Insured | MC# 1578685</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
