'use client';

import { useState } from 'react';
import { z } from 'zod';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useRouter } from 'next/navigation';

const step1Schema = z.object({
    moveType: z.string().min(1, 'Please select move type'),
    moveDate: z.string().min(1, 'Please select move date'),
    zipFrom: z.string().min(5, 'Please enter a valid zip code').max(5, 'Please enter a valid zip code'),
    zipTo: z.string().min(5, 'Please enter a valid zip code').max(5, 'Please enter a valid zip code'),
    serviceType: z.array(z.string()).min(1, 'Please select at least one service'),
    moveSize: z.string().min(1, 'Please select move size'),
});

const step2Schema = z.object({
    email: z.string().email('Invalid email address'),
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    phone: z.string().min(1, 'Phone is required'),
    hearAboutUs: z.string().min(1, 'Please select an option'),
    otherSource: z.string().optional(),
}).refine((data) => {
    if (data.hearAboutUs === 'Other') {
        return !!data.otherSource && data.otherSource.length > 0;
    }
    return true;
}, {
    message: 'Please specify where you heard about us',
    path: ['otherSource'],
});

const fullFormSchema = step1Schema.merge(step2Schema);

type FormData = z.infer<typeof fullFormSchema>;

interface FormErrors {
    [key: string]: string;
}

export default function TwoStepForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        moveType: '',
        moveDate: '',
        zipFrom: '',
        zipTo: '',
        serviceType: [],
        moveSize: '',
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        hearAboutUs: '',
        otherSource: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleRadioChange = (value: string) => {
        setFormData(prev => ({ ...prev, moveType: value }));
        if (errors.moveType) {
            setErrors(prev => ({ ...prev, moveType: '' }));
        }
    };

    const handleCheckboxChange = (service: string, checked: boolean) => {
        setFormData(prev => ({
            ...prev,
            serviceType: checked
                ? [...prev.serviceType, service]
                : prev.serviceType.filter(item => item !== service)
        }));
        if (errors.serviceType) {
            setErrors(prev => ({ ...prev, serviceType: '' }));
        }
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleNext = () => {
        try {
            step1Schema.parse({
                moveType: formData.moveType,
                moveDate: formData.moveDate,
                zipFrom: formData.zipFrom,
                zipTo: formData.zipTo,
                serviceType: formData.serviceType,
                moveSize: formData.moveSize,
            });
            setErrors({});
            setStep(2);
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

    const handleBack = () => {
        setStep(1);
    };

    const handleSubmit = async () => {
        try {
            fullFormSchema.parse(formData);
            try {
                await fetch('https://services.leadconnectorhq.com/hooks/abJ6IRAziJKqYWOJlK8P/webhook-trigger/Xdd0HKqpj6L5flaJTa3X', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...formData,
                    }),
                });
                router.push('/thank-you');
            } catch (error) {
                console.error('Error sending button click event:', error);
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

    const serviceTypes = ['Local Moving', 'Inbuilding', 'Packing', 'Out of State'];

    if (submitted) {
        return (
            <div className="w-full max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-xl">
                <div className="text-center py-12">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h2>
                    <p className="text-lg text-gray-600 mb-8">We'll get back to you shortly with a quote for your move.</p>
                    <Button
                        onClick={() => {
                            setSubmitted(false);
                            setStep(1);
                            setFormData({
                                moveType: '',
                                moveDate: '',
                                zipFrom: '',
                                zipTo: '',
                                serviceType: [],
                                moveSize: '',
                                email: '',
                                firstName: '',
                                lastName: '',
                                phone: '',
                                hearAboutUs: '',
                                otherSource: ''
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
        <div className="w-full max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-xl">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step === 1 ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
                            }`}>
                            1
                        </div>
                        <span className={`font-medium ${step === 1 ? 'text-gray-900' : 'text-gray-500'}`}>
                            Move Details
                        </span>
                    </div>
                    <div className="flex-1 h-1 mx-4 bg-gray-200 rounded">
                        <div className={`h-full rounded transition-all duration-500 ${step === 2 ? 'w-full bg-blue-600' : 'w-0 bg-blue-600'
                            }`} />
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                            }`}>
                            2
                        </div>
                        <span className={`font-medium ${step === 2 ? 'text-gray-900' : 'text-gray-500'}`}>
                            Contact Info
                        </span>
                    </div>
                </div>
            </div>

            {step === 1 ? (
                <>
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Tell Us About Your Move</h2>
                        <p className="text-gray-600">Help us understand your moving needs</p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-3 text-gray-950">
                            <Label>Move Type *</Label>
                            <RadioGroup value={formData.moveType} onValueChange={handleRadioChange}>
                                <div className="flex items-center space-x-6">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="Residential" id="residential" />
                                        <Label htmlFor="residential" className="font-normal cursor-pointer">Residential</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="Commercial" id="commercial" />
                                        <Label htmlFor="commercial" className="font-normal cursor-pointer">Commercial</Label>
                                    </div>
                                </div>
                            </RadioGroup>
                            {errors.moveType && <p className="text-red-500 text-sm">{errors.moveType}</p>}
                        </div>

                        <div className="space-y-2 text-gray-950">
                            <Label htmlFor="moveDate">Move Date *</Label>
                            <Input
                                id="moveDate"
                                name="moveDate"
                                type="date"
                                value={formData.moveDate}
                                onChange={handleChange}
                                className={errors.moveDate ? 'border-red-500' : ''}
                            />
                            {errors.moveDate && <p className="text-red-500 text-sm">{errors.moveDate}</p>}
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 text-gray-950">
                            <div className="space-y-2">
                                <Label htmlFor="zipFrom">Zip From *</Label>
                                <Input
                                    id="zipFrom"
                                    name="zipFrom"
                                    type="text"
                                    value={formData.zipFrom}
                                    onChange={handleChange}
                                    placeholder="10001"
                                    maxLength={5}
                                    className={errors.zipFrom ? 'border-red-500' : ''}
                                />
                                {errors.zipFrom && <p className="text-red-500 text-sm">{errors.zipFrom}</p>}
                            </div>

                            <div className="space-y-2 text-gray-950">
                                <Label htmlFor="zipTo">Zip To *</Label>
                                <Input
                                    id="zipTo"
                                    name="zipTo"
                                    type="text"
                                    value={formData.zipTo}
                                    onChange={handleChange}
                                    placeholder="10002"
                                    maxLength={5}
                                    className={errors.zipTo ? 'border-red-500' : ''}
                                />
                                {errors.zipTo && <p className="text-red-500 text-sm">{errors.zipTo}</p>}
                            </div>
                        </div>

                        <div className="space-y-3 text-gray-950">
                            <Label>Service Type * (select all that apply)</Label>
                            <div className="grid grid-cols-2 gap-3">
                                {serviceTypes.map((service) => (
                                    <div key={service} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={service}
                                            checked={formData.serviceType.includes(service)}
                                            onCheckedChange={(checked) => handleCheckboxChange(service, checked as boolean)}
                                        />
                                        <Label htmlFor={service} className="font-normal cursor-pointer">
                                            {service}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                            {errors.serviceType && <p className="text-red-500 text-sm">{errors.serviceType}</p>}
                        </div>

                        <div className="space-y-2 text-gray-950">
                            <Label htmlFor="moveSize">Move Size *</Label>
                            <Select value={formData.moveSize} onValueChange={(value) => handleSelectChange('moveSize', value)}>
                                <SelectTrigger className={errors.moveSize ? 'border-red-500' : ''}>
                                    <SelectValue placeholder="Select size" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Studio">Studio</SelectItem>
                                    <SelectItem value="1 Bedroom">1 Bedroom</SelectItem>
                                    <SelectItem value="2 Bedroom">2 Bedroom</SelectItem>
                                    <SelectItem value="3 Bedroom">3 Bedroom</SelectItem>
                                    <SelectItem value="4 Bedroom">4 Bedroom</SelectItem>
                                    <SelectItem value="5+ Bedroom">5+ Bedroom</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.moveSize && <p className="text-red-500 text-sm">{errors.moveSize}</p>}
                        </div>

                        <Button
                            onClick={handleNext}
                            className="w-full bg-blue-600 hover:bg-blue-700"
                        >
                            Continue to Contact Info
                        </Button>
                    </div>
                </>
            ) : (
                <>
                    <div className="mb-8 text-gray-950">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Almost Done!</h2>
                        <p className="text-gray-600">Let us know how to reach you</p>
                    </div>

                    <div className="space-y-6 text-gray-950">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First Name *</Label>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="John"
                                    className={errors.firstName ? 'border-red-500' : ''}
                                />
                                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                            </div>

                            <div className="space-y-2 text-gray-950">
                                <Label htmlFor="lastName">Last Name *</Label>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Smith"
                                    className={errors.lastName ? 'border-red-500' : ''}
                                />
                                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                            </div>
                        </div>

                        <div className="space-y-2 text-gray-950">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                className={errors.email ? 'border-red-500' : ''}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        <div className="space-y-2 text-gray-950">
                            <Label htmlFor="phone">Phone *</Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="(555) 123-4567"
                                className={errors.phone ? 'border-red-500' : ''}
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>

                        <div className="space-y-2 text-gray-950">
                            <Label htmlFor="hearAboutUs">How did you hear about us? *</Label>
                            <Select value={formData.hearAboutUs} onValueChange={(value) => handleSelectChange('hearAboutUs', value)}>
                                <SelectTrigger className={errors.hearAboutUs ? 'border-red-500' : ''}>
                                    <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Returning Customer">Returning Customer</SelectItem>
                                    <SelectItem value="Customer Referral">Customer Referral</SelectItem>
                                    <SelectItem value="Google Search">Google Search</SelectItem>
                                    <SelectItem value="Google Guaranteed Services">Google Guaranteed Services</SelectItem>
                                    <SelectItem value="Yelp">Yelp</SelectItem>
                                    <SelectItem value="Facebook">Facebook</SelectItem>
                                    <SelectItem value="Truck Advertisement">Truck Advertisement</SelectItem>
                                    <SelectItem value="Postcard">Postcard</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.hearAboutUs && <p className="text-red-500 text-sm">{errors.hearAboutUs}</p>}
                        </div>

                        {formData.hearAboutUs === 'Other' && (
                            <div className="space-y-2 text-gray-950">
                                <Label htmlFor="otherSource">Please specify *</Label>
                                <Input
                                    id="otherSource"
                                    name="otherSource"
                                    type="text"
                                    value={formData.otherSource}
                                    onChange={handleChange}
                                    placeholder="Tell us where you heard about us"
                                    className={errors.otherSource ? 'border-red-500' : ''}
                                />
                                {errors.otherSource && <p className="text-red-500 text-sm">{errors.otherSource}</p>}
                            </div>
                        )}

                        <div className="flex gap-4">
                            <Button
                                onClick={handleBack}
                                variant="outline"
                                className="flex-1 text-white"
                            >
                                Back
                            </Button>
                            <Button
                                onClick={handleSubmit}
                                className="flex-1 bg-blue-600 hover:bg-blue-700"
                            >
                                Get My Free Quote
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
