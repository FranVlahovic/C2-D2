export default function TextButton({ text, onClick, className = "", disabled = false, onMouseEnter, onMouseLeave }) {
    return (
        <button type="button" className={className} onClick={onClick} disabled={disabled} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {text}
        </button>
    );
}
