'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ThankYouPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    {/* Success Icon Animation */}
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                            <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-full p-8 shadow-2xl">
                                <CheckCircle className="w-20 h-20 text-white" strokeWidth={2.5} />
                            </div>
                        </div>
                    </div>

                    {/* Main Message */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                            Thank You!
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-2">
                            Your quote request has been received
                        </p>
                        <p className="text-lg text-gray-500">
                            We're excited to help you with your move
                        </p>
                    </div>

                    {/* What Happens Next Section */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            What Happens Next?
                        </h2>

                        <div className="space-y-6">
                            {/* Step 1 */}
                            <div className="flex items-start space-x-4 p-6 rounded-xl bg-blue-50 border-2 border-blue-100 transition-all hover:border-blue-300">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                                        1
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        We Review Your Request
                                    </h3>
                                    <p className="text-gray-600">
                                        Our team will carefully review your moving details to prepare an accurate quote tailored to your needs.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex items-start space-x-4 p-6 rounded-xl bg-blue-50 border-2 border-blue-100 transition-all hover:border-blue-300">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                                        2
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        You'll Hear From Us Soon
                                    </h3>
                                    <p className="text-gray-600">
                                        Expect a call or email from our team within 30 minutes with your personalized moving quote.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex items-start space-x-4 p-6 rounded-xl bg-blue-50 border-2 border-blue-100 transition-all hover:border-blue-300">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                                        3
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        Schedule Your Move
                                    </h3>
                                    <p className="text-gray-600">
                                        Once you approve the quote, we'll work with you to schedule the perfect moving date and time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {/* Response Time */}
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center border-2 border-transparent hover:border-blue-600 transition-all">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
                            <p className="text-gray-600 text-sm">Within 30 minutes</p>
                        </div>

                        {/* Phone */}
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center border-2 border-transparent hover:border-blue-600 transition-all">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                            <a href="tel:773 360-7602" className="text-blue-600 hover:text-blue-700 font-medium">
                                (773) 360-7602
                            </a>
                        </div>

                        {/* Email */}
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center border-2 border-transparent hover:border-blue-600 transition-all">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                            <a href="mailto:info@hireexpertmovers.com" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                                info@hireexpertmovers.com
                            </a>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            onClick={() => router.replace('https://www.hireexpertmovers.com/resources')}
                            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6"
                        >
                            Check out our Moving tips and FAQs
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button
                            onClick={() => router.replace(`https://www.hireexpertmovers.com/services`)}
                            variant="outline"
                            className="text-lg px-8 py-6 border-2"
                        >
                            View Our Services
                        </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-16 pt-8 border-t-2 border-gray-200">
                        <p className="text-center text-gray-600 mb-6">
                            Join thousands of satisfied customers who trusted us with their move
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600">7,000+</div>
                                <div className="text-sm text-gray-600">Successful Moves</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600">4.8★</div>
                                <div className="text-sm text-gray-600">Average Rating</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600">11+</div>
                                <div className="text-sm text-gray-600">Years Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave Decoration */}
            <div className="relative mt-16">
                <svg className="w-full h-24 md:h-32" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        fill="#2563eb"
                        fillOpacity="0.1"
                    />
                </svg>
            </div>
        </div>
    );
}
