function Button({ onClick, children }) {
  return (
    <button 
      className="bg-white font-sans font-semibold w-fit p-3 rounded-md
      transition-all hover:bg-cyan-700 hover:text-white m-2"

      onClick={onClick}
    >{children}</button>
  );
}

export default Button;
