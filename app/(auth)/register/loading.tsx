import "placeholder-loading/dist/css/placeholder-loading.min.css";

function loading() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'90vh'}}>
      <div className="ph-item" style={{ width:500 }}>
        <div className="ph-picture" style={{height:500}}></div>
      </div>
    </div>
  )
}

export default loading