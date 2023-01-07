function Card(props) {
  const classes = props.className;
  return (
    <li>
      <div className={classes}>{props.children}</div>
    </li>
  );
}

export default Card;
