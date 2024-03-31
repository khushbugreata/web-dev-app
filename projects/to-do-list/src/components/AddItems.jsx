import React from "react";
function AddItem(){
    let itemName="Buy milk";
    let itemDate="4/3/2023";
    return(
        <>
 <div className="container text-center">
    <div class="row">
         <div className="col-6">{itemName}</div>
        <div className="col-4">{itemDate}</div>
        <div className="col-2">
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
    </div>
    <div className="row">
      <div className="col-6">go to coolege</div>
      <div className="col-4">4/3/2023</div>
      <div className="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
   </div>
 </div>
 </>
    )
}
export default AddItem;