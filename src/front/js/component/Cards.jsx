import React, { useEffect, useState } from "react";
import { HttpHandler } from "../../../http/handler";

function Cards() {
  const [data, setData] = useState([]);

  const handler = new HttpHandler();
  useEffect(() => {
    async function fetchData() {
      const result = await handler.getProduct();
      setData(result);
    }
    fetchData();
  }, []);
  console.log(data);

  return (
    <div className="m-5">
      <div className="container-xl">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="card xl m-4 p-1">
            <img src="" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"></p>
              <a href="" className="btn btn-primary">
                ir al anuncio
              </a>
            </div>
          </div>
          <div className="card xl m-4 p-1">
            <img src="" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"></p>
              <a href="" className="btn btn-primary">
                ir al anuncio
              </a>
            </div>
          </div>
          <div className="card xl m-4 p-1">
            <img src="" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"></p>
              <a href="" className="btn btn-primary">
                ir al anuncio
              </a>
            </div>
          </div>

          <div className="card xl m-4 p-1">
            <img src="" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"></p>
              <a href="" className="btn btn-primary">
                ir al anuncio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
