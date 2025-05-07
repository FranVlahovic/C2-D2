export default function TextButton({ text, onClick, className = "", disabled = false }) {
    return (
        <button type="button" className={className} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
}
