import Hero from "@/components/Hero";
import LuxeNavbar from "@/components/LuxeNavbar";
import Preloader from "@/components/Preloader";
import SuiteExperience from "@/components/SuiteExperience";
import Booking from "@/components/Booking";
import Location from "@/components/Location";
import LuxeFooter from "@/components/LuxeFooter";
import LuxeGallery from "@/components/LuxeGallery";
import LuxeReviews from "@/components/LuxeReviews";

export default function Home() {
  return (
    <main className="relative bg-cream-luxe selection:bg-earth-luxe selection:text-forest-deep flex flex-col">
      <Preloader />
      <LuxeNavbar />
      <Hero />
      <SuiteExperience />
      <LuxeGallery />
      <LuxeReviews />
      <Location />
      <Booking />
      <LuxeFooter />
    </main>
  );
}

