import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {

    return (

        <div className="dashboard">

            <h1>🎬 BookMyShow Admin Dashboard</h1>

            <p>
                Manage Movies, Theatres, Screens and Shows
            </p>

            <div className="card-container">

                <div className="dashboard-card">

                    <h2>🎥 Add Movie</h2>

                    <p>
                        Create a new movie in the system.
                    </p>

                    <Link to="/admin/add-movie">
                        <button>Open</button>
                    </Link>

                </div>

                <div className="dashboard-card">

                    <h2>📋 Movie List</h2>

                    <p>
                        View, Edit and Delete Movies.
                    </p>

                    <Link to="/admin/movies">
                        <button>Open</button>
                    </Link>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;