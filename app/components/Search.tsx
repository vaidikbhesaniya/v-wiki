'use client'

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"
import ic from "./icons8-search-52.png"
export default function Search() {
    const [search, setSearch] = useState('')
    const router = useRouter()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch('')
        router.push(`/${search}/`)
    }

    return (
        <form className="w-50 flex justify-center md:justify-between" onSubmit={handleSubmit}>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white p-2 w-80 text-xl rounded-xl"
                placeholder="Search"
            />
            <button className="p-2 text-xl rounded-xl bg-white ml-2 font-bold">
    
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDXOTx3E7DUW2_E5YECBJNM8tUyd0H7AoM5O2c_90&s" className='w-9' alt="" />
            </button>
        </form>
    )
}