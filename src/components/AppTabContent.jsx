import "./AppTab.css";

export function AppTabContent({ data }) {
  return (
    <div className="app-tab-content">
      <img src={data.image} alt="" />
      <p>{data.fact}</p>
    </div>
  );
}
