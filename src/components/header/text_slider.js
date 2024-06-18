const TextSlider = (props) => {
  let text = props.text;
  return (
    <div class="slider">
      <div class="caption">
        <div class="text-box">
          {text.map((e) => {
            return <div>{e}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default TextSlider;
