import {Link} from 'react-router-dom'
function Home(){
    return(
        <div>
            This is homepage
            <Link to='Setting'>Setting</Link>
        </div>
    )
}
export default Home