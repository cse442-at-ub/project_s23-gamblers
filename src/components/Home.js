import './Home.css'
import { Link } from 'react-router-dom'
function Home() {
    return <div>
        This is home page
        <Link to='/Login'>Login</Link>
    </div>
}
export default Home