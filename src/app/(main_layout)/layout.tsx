import MainHeader from "@/components/headers/MainHeader";
import Footer from "@/components/footer/footer";
import Head from "next/head";

export default function Layout({
  children,
  ...rest
}: Readonly<{
  children: React.ReactNode;
}>) {

  console.log("rest ,,,", rest);

  return (
    <>
      {/* Head section to include font CDNs */}
      <Head>
        {/* CDN for Sohne Font */}
        <link href="https://use.typekit.net/jnq5gls.css" rel="stylesheet" />

        {/* Google Fonts for Source Serif Pro */}
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <MainHeader />
      <>{children}</>
      <Footer />
    </>
  );
}


// http://localhost:3000/magazine/trust-in-marriage-is-till-death-do-us-part-just-a-myth?type=app