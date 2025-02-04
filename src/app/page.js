import Hero from "@/app/components/hero";
import CourseDetails from "@/app/components/course-details";
import PlansList from "@/app/components/PlansList";
import Author from "@/app/components/Author";
import Reviews from "@/app/components/Reviews";
import FAQ from "@/app/components/FAQ";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
      <>
        <Hero />
        <CourseDetails />
          <PlansList />
          <Author />
          <FAQ />
          <Footer />
      </>

  );
}
