import '../stylesheets/Button.css';

const Button = ({value, fn}) => {
    return (
        <div className="button">
            <input type="button" value={value} onClick={fn}></input>
        </div>
    );
};

export default Button;