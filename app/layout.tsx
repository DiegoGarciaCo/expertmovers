import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Expert Movers Chicago | Professional Moving Services | Licensed & Insured",
    description: "Chicago's #1 rated moving company. Professional local & long distance moving services. Licensed, insured, and trusted by thousands. Get your free quote today!",
    keywords: ["moving company chicago", "movers chicago", "local moving", "long distance moving", "commercial moving", "packing services"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <Script id="mb-js-params" strategy="beforeInteractive">
                    {`
            const tenantId = 119;
            try {
              localStorage.setItem('TENANT_ID', tenantId);
            } catch (error) {
              console.error("Failed to set TENANT_ID in localStorage", error);
            }
            window.mbCommonProps = {
              TENANT_ID: tenantId,
              COMPANY_MOVE_TYPES: ["RESIDENTIAL","COMMERCIAL"],
              COMPANY_PHONE: "(773) 360-7602",
              COMPANY_THANKYOUPAGE_URL: ""
            };
          `}
                </Script>

                <Script
                    src="https://embed.elromco.com/integration.js"
                    strategy="afterInteractive"
                    data-moveboard-company-id="119"
                />
                <Script
                    src="https://elfsightcdn.com/platform.js"
                    strategy="afterInteractive"
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
            <GoogleAnalytics gaId="G-M4P00031PZ" />
        </html>
    );
}
