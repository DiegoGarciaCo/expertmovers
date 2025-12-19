import Image from 'next/image';

export default function Nav() {
    return (
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

    )
}
