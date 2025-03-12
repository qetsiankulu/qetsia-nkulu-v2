import NavigationBar from "./components/navigation/NavigationBar";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <NavigationBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh", // Adjust height to center vertically
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1
            className="next-error-h1"
            style={{
              margin: "0 20px 0 0",
              padding: "0 23px 0 0",
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "49px",
            }}
          >
            404
          </h1>
          <h2
            style={{
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "49px",
              margin: 0,
            }}
          >
            This page is coming soon.
          </h2>
        </div>
      </div>
    </main>
  );
}