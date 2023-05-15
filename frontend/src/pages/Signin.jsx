function Signin() {
  return (
    <div className="text-center">
    <main className="form-signin w-100 m-auto">
        <form className="mt-4 p-4">
            <h1 className="h3 mb-3 fw-normal">Please Sign in</h1>
            <div className="row g-3">
                <div className="col-md-12">
            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                <label for="floatingInput">Email Address</label>
            </div>
            </div>
            <div className="col-md-12">
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                <label for="floatingPassword">Password</label>
            </div>
            </div>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
        </main>
    </div>
  )
}

export default Signin