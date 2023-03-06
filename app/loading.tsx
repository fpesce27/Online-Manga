import "placeholder-loading/dist/css/placeholder-loading.min.css";

function loading() {
  return (
    <>
      <div className="ph-item" style={{ height: "90vh" }}>
        <div className="ph-col-6">
          <div className="ph-row" style={{ height: "100%" }}>
            <div className="ph-col-6 big"></div>
            <div className="ph-col-12"></div>
            <div className="ph-col-12"></div>
            <div className="ph-col-12"></div>
            <div className="ph-col-12"></div>
            <div className="ph-col-12"></div>
            <div className="ph-col-4 big"></div>
            <div style={{ marginRight: 10 }}></div>
            <div className="ph-col-4 big"></div>
          </div>
        </div>
        <div className="ph-col-6">
          <div className="ph-picture" style={{ height: "100%" }}></div>
        </div>
      </div>

      <RecomendationsLoader />
      <RecomendationsLoader />
      <RecomendationsLoader />
      <RecomendationsLoader />
      <RecomendationsLoader />
    </>
  );
}

export default loading;

function RecomendationsLoader() {
  return (
    <div className="ph-item">
      <div className="ph-col-12">
        <div className="ph-row">
          <div className="ph-col-4 big"></div>
        </div>
      </div>
      <div className="ph-col">
        <div className="ph-picture" style={{ height: 300 }}></div>
      </div>
      <div className="ph-col">
        <div className="ph-picture" style={{ height: 300 }}></div>
      </div>
      <div className="ph-col">
        <div className="ph-picture" style={{ height: 300 }}></div>
      </div>
      <div className="ph-col">
        <div className="ph-picture" style={{ height: 300 }}></div>
      </div>
      <div className="ph-col">
        <div className="ph-picture" style={{ height: 300 }}></div>
      </div>
    </div>
  );
}
