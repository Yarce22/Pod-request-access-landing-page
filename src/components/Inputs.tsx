const Inputs = () => {
  return (
    <>
      <form className="flex flex-col justify-center items-center w-full py-10 gap-5">
        <label className="w-full" htmlFor="">
          <input className="w-full h-12 px-8 bg-input opacity-100 rounded-full font-bold text-sm text-clear border-none outline-none" type="email"  placeholder={'Email address'}/>
        </label>
        <button className="w-full h-12 rounded-full text-base font-bold text-background bg-title hover:bg-hover">Request Access</button>
      </form>
    </>
  );
}

export default Inputs;