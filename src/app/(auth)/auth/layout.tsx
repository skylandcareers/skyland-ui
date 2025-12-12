import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Header />
            <div className="flex items-center justify-center bg-gray-50 py-24">
                <div className="w-full max-w-md p-4">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}
