import React, { useEffect } from "react";
import { Table, Spin, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "../redux/actions";
import { Link } from "react-router-dom";

export default function ListMovie() {
  const { loading, data } = useSelector((state) => state.store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList());
  }, [dispatch]);

  const columns = [
    {
      title: "Title",
      dataIndex: "original_title",
      key: "original_title",
    },
    {
      title: "Popularity",
      dataIndex: "popularity",
      key: "popularity",
      align: "center",
    },
    {
      title: "Vote Average",
      dataIndex: "vote_average",
      key: "vote_average",
      align: "center",
    },
    {
      title: "Vote Count",
      dataIndex: "vote_count",
      key: "release_date",
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "aksi",
      align: "center",
      key: "release_date",
      render: (key, record, e) => (
        <div>
          <Link to={`/detail-movie?id=${record.id}`}>
            <Button type="default" danger>
              Detail
            </Button>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Movie List</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <Link to="/">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                  </Link>
                  <li className="breadcrumb-item active">Movie List</li>
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
                    <h3 class="card-title">Movie List Card</h3>

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
                    {loading ? (
                      <Spin />
                    ) : (
                      <Table dataSource={data} columns={columns} />
                    )}
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
