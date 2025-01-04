import Engagement from "@/components/Engagement";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Posts from "@/components/Posts";
import Response from "@/components/Response";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Posts/>
    <Response />
    <Engagement/>
    <Footer/>
    </>
  );
}
