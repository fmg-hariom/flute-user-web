import MainHeader from "@/components/headers/MainHeader";
import Footer from "@/components/footer/footer";



export default function Layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <MainHeader />
            <>{children}</>
            <Footer />
        </>
    )
}
