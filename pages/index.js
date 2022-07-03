import React from 'react'
import Vacatures from './vacatures'
import Link from "next/link"
export default function home() {
  return (
    <div>
       <nav>
        <Link href="/vacatures">
          vacatures
        </Link>
      </nav>

      <h1>Weken by site</h1>
     
    </div>
  )
}
