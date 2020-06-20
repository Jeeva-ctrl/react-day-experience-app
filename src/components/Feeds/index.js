import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Divider from "@material-ui/core/Divider";
import { LikeTwoTone, DislikeTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Feeds = ({ feeds }) => {
  const classes = useStyles();
  const html = feeds.map((x) => <Feed feed={x} />);
  return <div className={classes.root}>{html}</div>;
};

const Feed = ({ feed }) => {
  console.log(feed);
  const classes = useStyles();
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={"d"}>
          <img
            className="profileicon"
            src={require(`../../assets/profile.png`)}
            alt={feed.username}
          />
        </Link>
        <div className="info">
          <Link className="author" to={`/@${feed.userName}`}>
            {feed.userName}
          </Link>
          <span className="date">
            created at :{new Date(feed.published).toDateString()}
          </span>
        </div>
      </div>
      <div className="description">{feed.message}</div>
      <Divider/>
      <div className="footer_section">
        <div>
          {feed.like}
          <LikeTwoTone />
        </div>
        <div className="comments">{feed.comments.length}Comments</div>
        <div>
          {feed.disLike} <DislikeTwoTone />
        </div>
      </div>
      <Divider/>
    </div>
  );
};

export default Feeds;
