export default function Card(props) {
  let profileBadge;
  if (props.openSpots === 0) {
    profileBadge = "SOLD OUT";
  } else if (props.status === "Friends") {
    profileBadge = "FRIENDS";
  }

  return (
    <div className="ui link cards">
      <div className="card">
        <div className="image">
          {profileBadge && <div className="card--badge">{profileBadge}</div>}
          <img src={props.avatar} alt="avatar-matt" />
        </div>
        <div className="content">
          <div className="header">{props.name}</div>
          <div className="meta">
            <a>{props.status}</a>
          </div>
          <div className="description">{props.description}</div>
        </div>
        <div className="extra content">
          <span className="right floated">{props.dateJoined}</span>
          <span>
            <i className="user icon"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
