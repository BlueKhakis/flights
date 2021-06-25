// import { DateTime } from 'luxon';
// import('../LoadMore.css');


function LoadMore(props) {

  return (
    <div className="LoadMoreButton">
        
        <button onClick={ ()=>props.setLimit( props.limit +5 ) } > more flights </button>
     
    </div>
  );
}

export default LoadMore;
