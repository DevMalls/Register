import './card.style.css';
const CardComponent = (props) => {
    return (<section className="section">
        <div className="card">
        {props.children}
        </div>
    </section>);
}
export default CardComponent;