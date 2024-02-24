import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post(props) {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${props.event._id}`}>
          <img src={'http://localhost:4000/' + props.event.cover} alt="" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${props.event._id}`}>
          <h2>{props.event.title}</h2>
        </Link>
        <p className="info">
          {/* Check if props.event.author is not null before accessing username */}
          {props.event.author && (
            <a href="" className="author">{props.event.author.username}</a>
          )}
          <time>{formatISO9075(new Date(props.event.createdAt), 'MMM d, yyyy HH:mm')}</time>
        </p>
        <p className="summary">{props.event.summary}</p>
      </div>
    </div>
  );
}
