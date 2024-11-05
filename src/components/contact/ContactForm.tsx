// ContactForm.tsx
import React, { useState } from "react";
import { db } from "../../../firebase"; // Import db instead of firestore
import { collection, addDoc } from "firebase/firestore";
import Error from "./Error";
import HeaderSocial from "../Social";
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error" | null
  >(null);

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
    <motion.div
      className="min-w-[320px] px-4 bg-[#eaeaea] rounded-xl flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {status && <Error text={status} setStatus={() => setStatus(null)} />}
      <form
        onSubmit={handleSubmit}
        className="justify-around py-6 items-center flex flex-col gap-5 w-full"
      >
        <motion.input
          type="text"
          placeholder="Your Name"
          className="w-[80%] h-[40px] rounded-xl px-2 border-2 outline-none focus:border-[#00c49f]"
          value={name}
          onChange={(e) => setName(e.target.value)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          required
        />
        <motion.input
          type="text"
          placeholder="Subject"
          className="w-[80%] h-[40px] rounded-xl px-2 border-2 outline-none focus:border-[#00c49f]"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          required
        />
        <motion.textarea
          placeholder="Your Message"
          className="w-[80%] h-[80px] rounded-xl px-2 py-1 border-2 outline-none focus:border-[#00c49f] max-h-[200px]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          required
        ></motion.textarea>
        <motion.button
          type="submit"
          disabled={status === "loading"}
          className="bg-blue-500 text-slate-200 rounded-xl px-3 py-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {status === "loading" ? (
            <div>
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 me-3 text-white animate-spin mb-[2px]"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Loading...
            </div>
          ) : (
            "Send Message"
          )}
        </motion.button>
      </form>
      <div className="mb-4">
        <HeaderSocial />
      </div>
    </motion.div>
  );
};

export default ContactForm;
