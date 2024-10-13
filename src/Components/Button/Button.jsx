const Button = (props) => {
    return (
        <button 
            className={`capitalize ${props.className} ${props.padding ? props.padding : "px-7 py-1"} `}
            style={{ fontFamily: 'Poppins, sans-serif' }} 
        >
            {props.text}
        </button>
    );
}

export default Button;
