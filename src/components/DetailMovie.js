import React, { useEffect } from "react";
import ItemsDetailMovie from "./ItemsDetailMovie";
import { useDispatch, useSelector } from "react-redux";
import { getDetailMovie } from "../redux/actions";
import { Link, useLocation } from "react-router-dom";
import TextArea from "./TextArea";

export default function DetailMovie() {
  const id = useLocation().search;
  const movie_id = new URLSearchParams(id).get("id");
  const { detailMovie } = useSelector((state) => state.store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailMovie(movie_id));
  }, [dispatch]);
  return (
    <div>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Detail Movie</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <Link to="/">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                  </Link>
                  <li className="breadcrumb-item active">Detail Movie</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Detail Movie Card</h3>

                    <div class="card-tools">
                      <button
                        type="button"
                        class="btn btn-tool"
                        data-card-widget="collapse"
                        title="Collapse"
                      >
                        <i class="fas fa-minus"></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-tool"
                        data-card-widget="remove"
                        title="Remove"
                      >
                        <i class="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <div class="card-body">
                    <ItemsDetailMovie
                      label="Title Movie"
                      value={detailMovie ? detailMovie.original_title : ""}
                    />
                    <TextArea
                      label="Overview Movie"
                      value={detailMovie ? detailMovie.overview : ""}
                    />
                    <ItemsDetailMovie
                      label="Tagline Movie"
                      value={detailMovie ? detailMovie.tagline : ""}
                    />
                    <ItemsDetailMovie
                      label="Status Movie"
                      value={detailMovie ? detailMovie.status : ""}
                    />
                    <ItemsDetailMovie
                      label="Popularity Movie"
                      value={detailMovie ? detailMovie.popularity : ""}
                    />
                    <ItemsDetailMovie
                      label="Release Date"
                      value={detailMovie ? detailMovie.release_date : ""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
