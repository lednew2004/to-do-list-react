function Button(props) {
  return (
    <button {...props} className="bg-gray-200 p-2 rounded-md text-black">
      {props.children}
    </button>
  );
}

export default Button;
