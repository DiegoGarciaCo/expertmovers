export default function ContactSection() {
    return (
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
    )
}
