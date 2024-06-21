import { useState } from "react";
import Nav from "./Nav";

const Apps = () => {
  const [showImg, setShowImg] = useState(true);
  const [color, setColor] = useState("red");
  const [input, setInput] = useState("");
  const [fontSize, setFontSize] = useState(30);
  const [changeColor, setChangeColor] = useState("red");
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const addList = () => {
    if (value.length === 0) {
      alert("input field required");
    } else {
      setData([...data, value]);
      setValue("");
    }
  };
  const deleteList = (item, index) => {
    alert(item + " has been deleted");
    const copyOfArray = [...data];
    console.log(copyOfArray.splice(index, 1));
    setData(copyOfArray);
  };
  return (
    <div>
      <Nav />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            background: "#ddd",
            width: "70%",
            minHeight: "500px",
            overflow: "hidden",
            padding: "20px",
          }}
        >
          <h2>Show and Hide App</h2>
          {showImg && <img src="./flower.jpg" style={{ borderRadius: 10 }} />}
          <button
            onClick={() => setShowImg(!showImg)}
            style={{
              background: "dodgerblue",
              color: "white",
              padding: "8px 24px",
              borderRadius: 4,
              border: "none",
              marginTop: 6,
              cursor: "pointer",
            }}
          >
            {showImg ? "Hide" : "Show"}
          </button>
          <hr
            style={{
              color: "black",
              backgroundColor: "white",
              height: 0.5,
              borderColor: "#000000",
              width: "100%",
            }}
          />
          <h2>background toggle app</h2>
          <div
            style={{
              height: 180,
              width: 300,
              background: color,
              borderRadius: 10,
            }}
          ></div>
          <button
            onClick={() => setColor(color === "red" ? "blue" : "red")}
            style={{
              background: "dodgerblue",
              color: "white",
              padding: "8px 24px",
              borderRadius: 4,
              border: "none",
              marginTop: 6,
              cursor: "pointer",
            }}
          >
            {color === "red" ? "blue" : "red"}
          </button>
          <hr
            style={{
              color: "black",
              backgroundColor: "white",
              height: 0.5,
              borderColor: "#000000",
              width: "100%",
            }}
          />
          <div>
            <h2> Live input preview</h2>
            <input
              type="text"
              placeholder="Enter text to preview"
              style={{ border: "1px solid #ccc", padding: 8, width: 300 }}
              onChange={(e) => setInput(e.target.value)}
            />
            <h1>{input}</h1>
          </div>
          <hr
            style={{
              color: "black",
              backgroundColor: "white",
              height: 0.5,
              borderColor: "#000000",
              width: "100%",
            }}
          />
          <h2>Font increaser</h2>
          <p style={{ fontSize: fontSize }}>Kishan lavadiya</p>
          <input
            type="range"
            min="30"
            max="200"
            onChange={(e) => {
              setFontSize(Number(e.target.value));
            }}
          />
          <hr
            style={{
              color: "black",
              backgroundColor: "white",
              height: 0.5,
              borderColor: "white",
              width: "100%",
            }}
          />
          <h2>Color value sample</h2>
          <input
            placeholder="Enter color name"
            onChange={(e) => setChangeColor(e.target.value)}
            style={{ border: "1px solid #ccc", padding: 8, width: 300 }}
          />
          <div
            style={{
              width: 150,
              height: 150,
              background: changeColor,
              marginTop: 16,
            }}
          />
          <h1>Dynamic list (using useState & Array)</h1>
          <div>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter product name"
              style={{
                border: "1px solid #ccc",
                padding: 12,
                borderRadius: 4,
                width: 315,
              }}
            />
            <button
              onClick={addList}
              style={{
                border: "none",
                background: "darkorange",
                padding: 13,
                fontWeight: "bold",
                marginLeft: 6,
                width: 110,
                borderRadius: 6,
              }}
            >
              Add
            </button>
            <ul>
              {data.map((item, index) => (
                <li key={index}>
                  {item}
                  <button onClick={() => deleteList(item, index)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Apps;
