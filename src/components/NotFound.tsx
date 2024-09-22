import {Link} from 'react-router-dom'
import { Button } from './ui/button'
function NotFound() {
  return (<>
    <div className="font-sans text-2xl font-semibold">NotFound</div>
    <Button><Link to="/">Go to Home</Link></Button>
  </>
  )
}

export default NotFound