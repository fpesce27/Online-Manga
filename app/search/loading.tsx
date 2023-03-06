import "placeholder-loading/dist/css/placeholder-loading.min.css";

function loading() {
  return (
    <div className="ph-item">
      <Row />
      <Row />
      <Row />
    </div>
  );
}

export default loading;

function Row() {
  return (
    <>
      <Picture />
      <Picture />
      <Picture />
      <Picture />
      <Picture />
      <Picture />
    </>
  );
}

function Picture() {
  return (
    <div className="ph-col-2">
      <div className="ph-row">
        <div
          className="ph-picture"
          style={{
            height: 250,
          }}
        ></div>
      </div>
    </div>
  );
}
