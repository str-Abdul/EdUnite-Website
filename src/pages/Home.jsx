import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />

      {/* Lady Tutor Service Section */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-12">
          {/* Full Left-Side Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://png.pngtree.com/png-clipart/20241222/original/pngtree-teacher-day-professional-look-of-a-female-in-the-class-png-image_18129406.png"
              alt="Lady Tutor"
              className="w-full h-full rounded-2xl object-cover shadow-2xl border-4 border-pink-600 bg-white"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-6">
              Lady Tutor Service Available
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              At Edunite, we proudly offer dedicated lady tutors for students and families who prefer female educators. Our platform empowers women in Karachi to share their expertise, build confidence, and create new earning opportunities.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our experienced female tutors are available for home tuition, online classes, and group sessions—covering all grades from primary to higher education. Whether you want your child to learn at home, online, or even at the tutor’s place, we have flexible options to suit your needs.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Home tuition and online classes for all subjects</li>
              <li>Group sessions and one-on-one learning</li>
              <li>Safe, comfortable, and engaging environment</li>
              <li>Empowering women educators in your community</li>
            </ul>
            <p className="text-md text-gray-600 mb-6">
              Our lady tutors are not just teachers—they are mentors who help bridge educational gaps and inspire students to achieve their best.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Link
                to="/contact"
                className="inline-block bg-white text-blue-400 px-8 py-3 rounded-full font-semibold shadow hover:bg-pink-100 border-2 border-gray-100 transition text-lg"
              >
                Request a Free Demo
              </Link>

              <a
                href="tel:+923070340788"
                className="inline-block bg-white text-blue-400 px-8 py-3 rounded-full font-semibold shadow hover:bg-pink-100 border-2 border-gray-100 transition text-lg"
              >
                Call Us Now!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Online & Home Tutor Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Online Tutor Service */}
          <div className="flex flex-col items-center justify-center bg-blue-50 rounded-2xl shadow-lg p-10 h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-blue-100 group cursor-pointer">
            <img
              src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?w=500"
              alt="Online Tutor Service"
              className="w-40 h-40 object-cover mb-6 rounded-xl shadow transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="text-2xl font-bold text-blue-400 mb-4 transition-colors duration-300 group-hover:text-blue-500">
              Online Tutor Service
            </h3>
            <p className="text-gray-700 text-center mb-2 transition-colors duration-300 group-hover:text-blue-600">
              Get expert guidance from the comfort of your home. Our online tutors use interactive tools and personalized methods to help you excel in any subject, anytime, anywhere.
            </p>
          </div>

          {/* Home Tutor Service */}
          <div className="flex flex-col items-center justify-center bg-pink-50 rounded-2xl shadow-lg p-10 h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-pink-100 group cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/128/10049/10049235.png"
              alt="Home Tutor Service"
              className="w-40 h-40 object-cover mb-6 rounded-xl shadow transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="text-2xl font-bold text-pink-500 mb-4 transition-colors duration-300 group-hover:text-pink-600">
              Home Tutor Service
            </h3>
            <p className="text-gray-700 text-center mb-2 transition-colors duration-300 group-hover:text-pink-600">
              Prefer learning face-to-face? Our qualified tutors can visit your home for one-on-one sessions, ensuring a safe and focused environment tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* EdUnite Tutors Featured Section  */}
      <section className="bg-blue-300 text-black py-16 px-4 rounded-b-3xl mb-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Heading and Button */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              EdUnite Tutor Academy – No. #1 Tutors In Karachi
            </h1>
          </div>
          {/* Right: Features */}
          <div>
            <p className="mb-4 text-lg">
              Our standout feature that elevates EdUnite Tutors as <span className="font-bold">No. # 1 Tutors Academy in Karachi.</span>
            </p>
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-2">
                <Check className="text-black font-bold mt-1" size={22} strokeWidth={3} />
                Providing the most trusted and expert home tutor in Karachi for all grades
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-black font-bold mt-1" size={22} strokeWidth={3} />
                Homework and Assignment help
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-black font-bold mt-1" size={22} strokeWidth={3} />
                Cover full course outline
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-black font-bold mt-1" size={22} strokeWidth={3} />
                Revise concept
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-black font-bold mt-1" size={22} strokeWidth={3} />
                Special focus on math, English, and confidence of the students
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-black font-bold mt-1" size={22} strokeWidth={3} />
                Online support and learning material
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission Statement Section with Background Animation */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Animated Gradient Circles */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full opacity-40 animate-pulse z-0"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-100 rounded-full opacity-40 animate-pulse z-0"></div>
        {/* Decorative Mandala Pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center opacity-10 z-0 pointer-events-none"
        >
          <img
            src="https://png.pngtree.com/png-clipart/20220116/original/pngtree-mandala-floral-pattern-png-image_7100146.png"
            alt=""
            className="w-3/4 max-w-2xl mx-auto"
          />
        </div>
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6 leading-tight flex flex-col items-center">
            Perfect Home<br />
            Tuition in Karachi<br />
            And Online Tution Globally
            <img
              src="https://cdn-icons-png.flaticon.com/128/869/869196.png"
              alt="Globe Logo"
              className="inline-block mt-2 h-12 w-12"
            />
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-gray-900 mt-4">
            Our Mission: <span className="font-bold">“To Provide you safe and quality education at your doorstep”</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
