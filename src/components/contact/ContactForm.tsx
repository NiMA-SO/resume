// ContactForm.tsx
import React, { useState } from "react";
import { db } from "../../../firebase"; // Import db instead of firestore
import { collection, addDoc } from "firebase/firestore";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await addDoc(collection(db, "contacts"), {
        // Use db here
        name,
        subject,
        message,
        timestamp: new Date(),
      });
      setStatus("success");
      setName("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message: ", error);
      setStatus("error");
    }
  };

//   const [name, setName] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");

// const mutation = useMutation(addContact, {
//   onSuccess: () => {
//     // پاک کردن فرم پس از موفقیت
//     setName("");
//     setSubject("");
//     setMessage("");
//     console.log("Contact added successfully!");
//   },
//   onError: (error) => {
//     console.error("Error adding contact: ", error);
//   },
// });

// const handleSubmit = (e: any) => {
//   e.preventDefault();
//   // ارسال درخواست به mutation
//   mutation.mutate({
//     name,
//     subject,
//     message,
//     timestamp: new Date(),
//   });
// };


  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>
      {status === "success" && <p>Your message has been sent!</p>}
      {status === "error" && (
        <p>There was an error sending your message. Please try again.</p>
      )}
    </div>
  );
};

export default ContactForm;
