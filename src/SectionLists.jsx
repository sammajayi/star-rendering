import StarRating from './StarRating';

function SectionLists(props) {
  const {name, rating} = props
  
  const TOTAL = 5;
  return (
    <section style={{width:'50%'}}>
      <h2 style={{textAlign:'center'}}>{name}</h2>
      <p>
        Rating: {rating} / {TOTAL}
      </p>
      <StarRating rating={rating} />
    </section>
  );
}

export default SectionLists;
