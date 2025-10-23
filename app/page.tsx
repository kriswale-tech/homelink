import Header from "./partials/Header";
import SectionDescription from "./partials/SectionDescription";
import ImageAndServices from "./partials/ImageAndServices";
import Services from "./partials/Services";
import WhyChooseUs from "./partials/WhyChooseUs";
import HowItWorks from "./partials/HowItWorks";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <div className="p-4">
        <Header />

        <section className="max-width my-28">
          <SectionDescription title="About Us" buttonText="More About Us">
            At HomeLink, we believe home care shouldn&apos;t be stressful.
            That&apos;s why we&apos;ve built a platform where you can find
            trusted, affordable, and verified professionals for any service.
            From electricians and cleaners to technicians and delivery experts.
            Every provider is screened, trained, and committed to giving you a
            smooth, worry-free experience.
          </SectionDescription>
        </section>

        <section className=" my-28">
          <ImageAndServices />
        </section>

        <section className="max-width my-28 mt-48">
          <SectionDescription
            title="Our Services"
            buttonText="View All Services"
            type="short"
          >
            Find trusted professionals for all your home needs. From repairs and
            installations to cleaning and delivery. Fast, reliable, and verified
            services, all on one simple platform.
          </SectionDescription>
        </section>

        <section className="max-width my-28">
          <Services />
        </section>

        <section className="max-width my-28 mt-48">
          <SectionDescription title="Why Choose HomeLink" type="short">
            Whether it&apos;s a last-minute fix or scheduled maintenance, you
            can count on HomeLink to link you with trusted professionals,
            quickly and safely.
          </SectionDescription>
        </section>

        <section className="max-width my-28">
          <WhyChooseUs />
        </section>

        <section className="max-width my-28 mt-48">
          <SectionDescription title="How It Works" type="short">
            While our app is in beta state, booking a trusted home service is as
            easy as starting a WhatsApp chat.
          </SectionDescription>
        </section>

        <section className="max-width my-28">
          <HowItWorks />
        </section>
      </div>
      <Footer />
    </div>
  );
}
