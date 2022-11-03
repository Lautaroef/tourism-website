import Link from "next/link";

// Bootstrap snippet
function Error() {
  return (
    <div className="overflow-x-hidden">
            <div className="row justify-content-center mt-12 mb-20">
      <div className="col-md-12 col-sm-12">
        <div
          className="card shadow-lg border-0 rounded-lg mt-5 mx-auto"
          style={{
            width: "30rem",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            wordWrap: "break-word",
            backgroundColor: "#fff",
            backgroundClip: "border-box",
            border: "1px solid rgba(0, 0, 0, 0.04)",
            borderRadius: ".25rem",
          }}
        >
          <h3
            className="card-header display-1 text-muted text-center"
            style={{ backgroundColor: "#fff", borderBottom: "none" }}
          >
            404
          </h3>

          <span className="card-subtitle mb-2 px-4 text-muted text-center">
            This may not mean anything. I'm probably working on something that
            has blown up
          </span>

          <div className="card-body mx-auto">
            <Link
              href="/"
              type="button"
              className="btn btn-sm btn-info text-white"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default Error;
