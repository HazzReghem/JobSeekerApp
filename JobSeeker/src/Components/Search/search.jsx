import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import './search.scss'

// Imported icons from React Icons =====>
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsHouseDoor } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'

const Search = () => {
  //  store input's value in state
  const [job, setJob] = useState('')
  const [company, setCompany] = useState('')
  const [location, setLocation] = useState('')

  const jobChange = (event) => {
    setJob(event.target.value)
  }
  const companyChange = (event) => {
    setCompany(event.target.value)
  }
  const locationChange = (event) => {
    setLocation(event.target.value)
  }

  const clearJob = () => {
    //  clear input value
    setJob('')
  }
  const clearCompany = () => {
    //  clear input value
    setCompany('')
  }
  const clearLocation = () => {
    //  clear input value
    setLocation('')
  }

  return (
    <div className="searchDiv">
      <form action="">
        <div className="firstDiv">
          <div className="secondDiv">
            <AiOutlineSearch className="icon" />
            <input
              type="text"
              className="inputDiv"
              placeholder="Search a Job here..."
              onChange={jobChange}
              value={job}
            />
            <AiOutlineCloseCircle
              className="icon closeIcon"
              onClick={clearJob}
            />
          </div>

          <div className="secondDiv">
            <BsHouseDoor className="icon" />
            <input
              type="text"
              className="inputDiv"
              placeholder="Search by company..."
              onChange={companyChange}
              value={company}
            />
            <AiOutlineCloseCircle
              className="icon closeIcon"
              onClick={clearCompany}
            />
          </div>

          <div className="secondDiv">
            <CiLocationOn className="icon" />
            <input
              type="text"
              className="inputDiv"
              placeholder="Search by location..."
              onChange={locationChange}
              value={location}
            />
            <AiOutlineCloseCircle
              className="icon closeIcon"
              onClick={clearLocation}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Search
