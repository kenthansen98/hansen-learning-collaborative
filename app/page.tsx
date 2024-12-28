import About from "./components/About";
import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Testimonial />
      <ContactForm />
      <footer className="bg-chocolate text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Hansen Learning Collaborative. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
