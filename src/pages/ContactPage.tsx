import { MdEmail } from "react-icons/md";
import Footer from "../components/Footer";
import { FaPhone } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm("service_b9d6ri8", "template_d7m2lpn", formRef.current, {
        publicKey: "wjG0qEbYkoa3KZJSJ",
      })
      .then(
        () => {
          console.log("Email sent successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };

  return (
    <>
      <div className="grid grid-cols-1 my-5 container lg:grid-cols-2 min-h-[82vh] gap-12 items-center">
        <div className="shadow-sm rounded-md border py-10">
          <form
            onSubmit={sendEmail}
            ref={formRef}
            className="max-w-lg mx-4 md:mx-auto"
          >
            <div className="mb-5">
              <label htmlFor="name" className="block text-sm text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block text-sm text-gray-600">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="subject" className="block text-sm text-gray-600">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="user_subject"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                placeholder="Write Your Subject"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="block text-sm text-gray-600">
                Message
              </label>
              <textarea
                name="user_message"
                id="message"
                rows={3}
                required
                placeholder="Your Message here..."
                className="outline-none resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              ></textarea>
            </div>
            <div className="mb-5">
              <label htmlFor="street" className="block text-sm text-gray-600">
                Street
              </label>
              <input
                type="text"
                id="street"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                placeholder="Street..."
              />
            </div>
            <div className="mb-5 flex items-center gap-6">
              <div className="mb-5 flex-[4]">
                <label htmlFor="zip" className="block text-sm text-gray-600">
                  Zip
                </label>
                <input
                  type="number"
                  id="zip"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                  placeholder="Zip No."
                />
              </div>
              <div className="mb-5 flex-[6]">
                <label htmlFor="town" className="block text-sm text-gray-600">
                  Town
                </label>
                <input
                  type="text"
                  id="town"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                  placeholder="Town"
                />
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="number" className="block text-sm text-gray-600">
                Phone No.
              </label>
              <input
                type="number"
                id="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                placeholder="Enter Your No."
              />
            </div>

            <button
              type="submit"
              className="text-white mt-5 bg-rose-500 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Send Message
            </button>
          </form>
        </div>
        <img
          src="/contact-img.svg"
          width="600"
          className="object-cover hidden md:block"
          alt=""
        />
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Details:</h3>
          <p className="flex items-center gap-2">
            <MdEmail />
            <span className="font-medium">Email</span> : akumar8oct.ak@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <FaPhone />
            <span className="font-medium">Phone No.</span> : 9560307153
          </p>
          <p className="flex items-center gap-2">
            <BsWhatsapp />
            <span className="font-medium">WhatsApp Phone No.</span> : 8851500167
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
