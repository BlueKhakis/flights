// import { DateTime } from 'luxon';
// import('../LoadMore.css');


function LoadMore(props) {
 function handleClick() {
    props.setLimit( props.limit +5 )
    console.log(props.limit)
 }
  return (
    <div className="LoadMoreButton">

        <button onClick={ handleClick } > more flights </button>
     
    </div>
  );
}

export default LoadMore;
