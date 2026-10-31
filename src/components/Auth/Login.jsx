import React ,{useState} from "react";

const Login = ({handlelogin}) => {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const submithandler = (e) => {
    e.preventDefault();
    console.log("Email : ",Email,"\nPassword : ",Password);
    handlelogin(Email,Password);
  };
  
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#454443]">
      <div className="hover:shadow-red-600 active:shadow-red-600 hover:shadow-xl/50 border bg-[#858481] border-red-500 px-15 py-30 rounded-xl absolute">
        <h1 className="text-3xl font-bold text-black relative -top-[80px] -left-[40px] mb-10">
          Log In
        </h1>
        <form
          onSubmit={(e) => {
            submithandler(e);
            setEmail('')
            setPassword('')
            
          }}
          action="#"
          className="flex flex-col items-center justify-center"
        >
          <input
          value={Email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required
            className=" text-xl active:outline-2 outline-red-300 text-black outline-none border-2 px-5 py-3 border-red-700 bg-transparent rounded-full placeholder:text-black"
            type="email"
            name=""
            id=""
            placeholder="Email"
          />
          <input
          value={Password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required
            className=" text-xl text-black outline-none border-2 px-5 py-3 border-red-700 mt-4 bg-transparent rounded-full placeholder:text-black"
            type="password"
            name=""
            id=""
            placeholder="Password"
          />
          <a
            className="mt-3 relative left-20 hover:text-red-500 text-red-300"
            href="#"
          >
            Forgot Password ?
          </a>
          <button className="hover:scale-95 active:scale-95 active:bg-red-400 active:text-gray-400  px-[100px] py-[10px] text-xl text-white outline-none border-none   bg-red-600  mt-6 rounded-full placeholder:text-gray-500">
            Login In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
