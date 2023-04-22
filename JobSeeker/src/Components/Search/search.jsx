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
  //  Store Input's value in state ====>
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

  //   Clear Input's value =====>
  const clearJob = () => {
    setJob('')
  }
  const clearCompany = () => {
    setCompany('')
  }
  const clearLocation = () => {
    setLocation('')
  }

  return (
    <div className="searchDiv">
      <form action="">
        <div className="firstDiv">
          <div className="fieldDiv">
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

          <div className="fieldDiv">
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

          <div className="fieldDiv">
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

          <button className="searchButton">Search</button>
        </div>
      </form>

      <div className="secondDiv">
        <div className="singleSearch">
          <label htmlFor="relevance" className="labelDiv">
            Sort by
          </label>
          <select name="" id="relevance" className="selectDiv">
            <option value="">Relevance</option>
            <option value="">Contains</option>
            <option value="">Starts with</option>
          </select>
        </div>

        <div className="singleSearch">
          <label htmlFor="type" className="labelDiv">
            Type :
          </label>
          <select name="" id="type" className="selectDiv">
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Part-time</option>
            <option value="">Contract</option>
          </select>
        </div>

        <div className="singleSearch">
          <label htmlFor="level" className="labelDiv">
            Sort by
          </label>
          <select name="" id="level" className="selectDiv">
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Search
