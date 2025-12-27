const ContactForm = () => {
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
        <form className="space-y-6 text-left">
          <div>
            <label className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
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
              placeholder="you@example.com"
              className="w-full border border-gray-300 px-4 py-3 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Tell me about your idea..."
              className="w-full border border-gray-300 px-4 py-3 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-black resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white px-8 py-3 rounded-md 
                       hover:bg-gray-900 transition font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
