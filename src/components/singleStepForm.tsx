'use client';

import { useState } from 'react';
import { z } from 'zod';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const formSchema = z
    .object({
        email: z.string().email('Invalid email address'),
        firstName: z.string().min(1, 'First name is required'),
        lastName: z.string().min(1, 'Last name is required'),
        phone: z.string().min(1, 'Phone is required'),
        otherSource: z.string().optional(),
    })

type FormData = z.infer<typeof formSchema>;

interface FormErrors {
    [key: string]: string;
}

type FormVariant = 'default' | 'hero';

export default function SingleStepForm({
    variant = 'default',
}: {
    variant?: FormVariant;
}) {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        otherSource: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);
    const router = useRouter();

    const containerClasses =
        variant === 'hero'
            ? 'bg-white/50 backdrop-blur-md shadow-2xl text-gray-950'
            : 'bg-white shadow-xl text-gray-950';

    const inputClasses =
        variant === 'hero'
            ? 'bg-white placeholder-gray-500 text-gray-900'
            : '';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            formSchema.parse(formData);

            try {
                await fetch(
                    'https://services.leadconnectorhq.com/hooks/abJ6IRAziJKqYWOJlK8P/webhook-trigger/Xdd0HKqpj6L5flaJTa3X',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formData),
                    }
                );
                router.push('/thank-you');
            } catch (error) {
                console.error('Error sending form:', error);
            }

            setSubmitted(true);
            setErrors({});
        } catch (error) {
            if (error instanceof z.ZodError) {
                const newErrors: FormErrors = {};
                error.issues.forEach((err) => {
                    if (err.path[0]) {
                        newErrors[err.path[0] as string] = err.message;
                    }
                });
                setErrors(newErrors);
            }
        }
    };

    if (submitted) {
        return (
            <div
                className={`w-full max-w-2xl mx-auto p-8 rounded-2xl ${containerClasses}`}
            >
                <div className="text-center py-12">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg
                            className="w-10 h-10 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        We'll get back to you shortly with a quote.
                    </p>
                    <Button
                        onClick={() => {
                            setSubmitted(false);
                            setFormData({
                                email: '',
                                firstName: '',
                                lastName: '',
                                phone: '',
                                otherSource: '',
                            });
                        }}
                        className="bg-blue-600 hover:bg-blue-700"
                    >
                        Submit Another Request
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div
            className={`w-full max-w-2xl mx-auto p-8 rounded-2xl ${containerClasses}`}
        >
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Get Your Free Quote
                </h2>
                <p className="text-gray-600">
                    Fill out the form below and we'll contact you soon
                </p>
            </div>

            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="John"
                            className={errors.firstName ? `border-red-500 ${inputClasses}` : inputClasses}
                        />
                        {errors.firstName && (
                            <p className="text-red-500 text-sm">{errors.firstName}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Smith"
                            className={errors.lastName ? `border-red-500 ${inputClasses}` : inputClasses}
                        />
                        {errors.lastName && (
                            <p className="text-red-500 text-sm">{errors.lastName}</p>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={errors.email ? `border-red-500 ${inputClasses}` : inputClasses}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className={errors.phone ? `border-red-500 ${inputClasses}` : inputClasses}
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-sm">{errors.phone}</p>
                    )}
                </div>

                <Button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                >
                    Get My Free Quote
                </Button>
            </div>
        </div>
    );
}
