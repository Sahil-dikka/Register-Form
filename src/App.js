import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card shadow p-4">
                <h2 class="text-center mb-4">Register</h2>
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter your full name" required></input>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter your email" required></input>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter your password" required></input>
                    </div>
                    <div class="mb-3">
                        <label for="confirm-password" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="confirm-password" placeholder="Confirm your password" required></input>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="terms" required></input>
                        <label class="form-check-label" for="terms">I agree to the terms and conditions</label>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Register</button>
                </form>
            </div>
        </div>
    </div>
</div>
    </div>
  );
}

export default App;
