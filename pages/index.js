
import jobs from './jobs'
import Link from "next/link"
export default function home() {
  return (
    <div>
       <nav>
        <Link href="/jobs">
          vacatures
        </Link>
      </nav>

      <h1>Weken by site</h1>
     
    </div>
  )
}
