import React, { useRef, useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ReachOut = () => {
  const [formData, setFormData] = useState({ rName: "", rEmail: "", rMessage: "" });
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal State
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formRef = useRef(null);

  const service_id = "service_d3xuz4a";
  const template_id = "template_zfv5j9b";
  const public_key = "jp3ceBAkBTPfo97YU";

  const validateForm = () => {
    let newErrors = {};
    if (!formData.rName.trim()) {
      newErrors.rName = "Full name is required.";
    }
    if (!formData.rEmail.trim()) {
      newErrors.rEmail = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.rEmail)) {
      newErrors.rEmail = "Enter a valid email address.";
    }
    if (!formData.rMessage.trim()) {
      newErrors.rMessage = "Message cannot be empty.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);
    setErrorMessage("");

    const emailData = {
      rName: formData.rName,
      rEmail: formData.rEmail,
      rMessage: formData.rMessage,
    };

    emailjs
      .send(service_id, template_id, emailData, public_key)
      .then(() => {
        setIsModalOpen(true);
        setFormData({ rName: "", rEmail: "", rMessage: "" });
        setErrors({});
      })
      .catch(() => {
        setErrorMessage("Failed to send message. Please try again...");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <div className="flex items-center justify-center space-y-4">
      <div className="py-6">
        <h2 className="text-[42px] font-bold mb-6 text-white ">Reach Out</h2>
        <p className="text-gray-400 py-2">Feel free to drop me a line using the form or any of my socials.</p>

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="rName" // Add this
              placeholder="Full name"
              value={formData.rName}
              onChange={(e) => setFormData({ ...formData, rName: e.target.value })}
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.rName && <p className="text-red-500 text-sm mt-1">{errors.rName}</p>}
          </div>

          <div>
            <input
              type="email"
              name="rEmail" // Add this
              placeholder="Email"
              value={formData.rEmail}
              onChange={(e) => setFormData({ ...formData, rEmail: e.target.value })}
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.rEmail && <p className="text-red-500 text-sm mt-1">{errors.rEmail}</p>}
          </div>

          <div>
            <textarea
              name="rMessage" // Add this
              placeholder="Message"
              rows="4"
              value={formData.rMessage}
              onChange={(e) => setFormData({ ...formData, rMessage: e.target.value })}
              className="w-full h-28 bg-gray-800 text-white border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 resize-none"
            />
            {errors.rMessage && <p className="text-red-500 text-sm mt-1">{errors.rMessage}</p>}
          </div>

          <button
            type="submit"
            className="w-full border border-gray-600 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition-all"
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </form>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
              <h3 className="text-lg font-semibold text-gray-800">Message Sent Successfully! 🎉</h3>
              <p className="text-gray-600 mt-2">{`Hi${formData.rName}, thank you for reaching out. I'll get back to you soon!`}</p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-center space-x-6 mt-6 text-gray-400 py-2">
          <a href="https://www.linkedin.com/in/musa-yazid-b0b66ab5/" className="hover:text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="https://wa.me/2347061889992" className="hover:text-white">
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
