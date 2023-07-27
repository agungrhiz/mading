export default function Login() {
  return (
    <div className="flex flex-col min-h-full items-center justify-center px-6 py-12 lg:px-8">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="divider">
            <h2 className="card-title">Masuk</h2>
          </div>

          <form className="space-y-6" action="#" method="POST">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-sm"
            />

            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-sm"
            />
            <button className="btn btn-block">Masuk</button>
          </form>
        </div>
      </div>
    </div>
  );
}
