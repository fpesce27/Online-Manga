import "placeholder-loading/dist/css/placeholder-loading.min.css";

function loading() {
  return (
    <div className="ph-item" style={{ height: "90vh" }}>
        <div className="ph-col-12" style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
            <div className="ph-picture" style={{ height: "100%", width:450 }}></div>
        </div>
    </div>
  )
}

export default loading