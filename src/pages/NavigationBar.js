import KuvaLogo from "../media/KuvaLogo.png";

function NavigationBar() {
  return (
    <div
      style={{
        height: "100%",
        width: "15%",
        backgroundColor: "#222222",
      }}
    >
      <img style={{ width: "95%" }} src={KuvaLogo} />
      <span style={{ marginTop: "30%", color: "white" }}> Home </span>
    </div>
  );
}

export default NavigationBar;
