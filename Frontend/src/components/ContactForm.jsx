import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("Something went wrong. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-xl mx-auto px-6 text-center">

        {/* Intro Text */}
        <p className="text-gray-700 text-lg sm:text-xl mb-10">
          Have an idea, opportunity, or just want to say hello?
          <br />
          Drop a message and I’ll get back to you.
        </p>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6 text-left"
        >
          <div>
            <label className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell me about your idea..."
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-black resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white px-8 py-3 rounded-md 
                       hover:bg-gray-900 transition font-medium
                       disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-center text-sm text-gray-700 mt-4">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
