import Link from "next/link"

export default function ApplictationCard ({ job }){
    return (
        <Link href={'/jobs'+job.uri} className={"card"}>
            <a className="card">
                <h3>{job.title} &rarr;</h3>
            </a>
        </Link>
    )
}