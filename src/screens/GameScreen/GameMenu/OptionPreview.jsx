export default function OptionPreview({ heading, description  }){
    return(
        <div className="option-preview">
            <h2>{heading}</h2>
            <p>{description}</p>
        </div>
    );
}