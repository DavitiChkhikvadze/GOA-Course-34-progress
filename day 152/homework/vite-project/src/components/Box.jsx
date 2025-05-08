export default function Box({ number, color }) {
    return (
      <div
        style={{
          backgroundColor: color,
          padding: "20px",
          margin: "10px",
          color: "white",
          borderRadius: "8px",
        }}
      >
        {number}
      </div>
    );
  }
  