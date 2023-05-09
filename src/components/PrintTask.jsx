const PrintTask = (props) => {
  return (
    <div>
      {props.save.map((data, index) => {
        console.log(index);
        return (
          <div
            key={index}
            style={{
              textAlign: "left",
              margin: "5px",
              padding: "5px 20px",
              width: "90%",
              border: "2px solid black"
            }}
          >
            <h3 style={{ margin: 0 }}>{data.title}</h3>
            <p style={{ margin: 0 }}>{data.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PrintTask;
