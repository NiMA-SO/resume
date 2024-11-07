import { motion } from "framer-motion";

interface Props {
  setPage: (page: "login" | "register") => void;
}

const RegisterPage = ({ setPage }: Props) => {
  return (
    <motion.div
      className="w-[320px] border-[#00c49f] py-6 rounded-xl flex flex-col gap-6 justify-center items-center border-2"
      initial={{ x: "-100%", opacity: 0 }} // شروع انیمیشن
      animate={{ x: 0, opacity: 1 }} // انیمیشن نمایش
      exit={{ x: "-100%", opacity: 0 }} // انیمیشن خروج
      transition={{
        type: "spring",
        duration: 0.5,
        stiffness: 200,
        damping: 10,
      }}
    >
      <motion.form
        className="w-full flex flex-col items-center justify-between gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <input
          type="text"
          className="w-[80%] h-[40px] border-2 focus:border-[#00c49f] outline-none rounded-xl px-2 italic"
          placeholder="User Name"
        />
        <input
          type="email"
          className="w-[80%] h-[40px] border-2 focus:border-[#00c49f] outline-none rounded-xl px-2 italic"
          placeholder="Email"
        />
        <input
          type="password"
          className="w-[80%] h-[40px] border-2 focus:border-[#00c49f] outline-none rounded-xl px-2 italic"
          placeholder="Password"
        />
        <button className="bg-[#00c49f] text-white w-[80%] rounded-xl h-[40px]">
          Register
        </button>
        <p>
          Already have an account?
          <button
            onClick={() => setPage("login")}
            className="ml-2 text-[#00c49f]"
          >
            {" "}
            login
          </button>
        </p>
      </motion.form>
    </motion.div>
  );
};

export default RegisterPage;
