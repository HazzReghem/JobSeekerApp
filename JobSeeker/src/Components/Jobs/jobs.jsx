import React from 'react'
import './jobs.scss'

// Imported icons from React Icons ====>
import { BiTimeFive } from 'react-icons/bi'

// Imported Images =====>
import logo1 from '../../Assets/logo1.jpg'
import logo2 from '../../Assets/logo2.jpg'
import logo3 from '../../Assets/logo3.jpg'
import logo4 from '../../Assets/logo4.jpg'
import logo5 from '../../Assets/logo5.jpg'
import logo6 from '../../Assets/logo6.jpg'
import logo7 from '../../Assets/logo7.jpg'
import logo8 from '../../Assets/logo8.webp'

const Data = [
  {
    id: 1,
    image: logo1,
    title: 'Web Developper',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    company: 'Planet Co.',
  },
  {
    id: 2,
    image: logo2,
    title: 'UI Designer',
    time: '8Hrs',
    location: 'Manchester',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    company: 'Flowers Co.',
  },
  {
    id: 3,
    image: logo3,
    title: 'Software Engineer',
    time: '19Hrs',
    location: 'Paris',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    company: 'Hispter Bros',
  },
  {
    id: 4,
    image: logo4,
    title: 'UI/UX Designer',
    time: '2Hrs',
    location: 'New-York',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    company: 'Jungle Company',
  },
  {
    id: 5,
    image: logo5,
    title: 'Product Designer',
    time: 'Now',
    location: 'Madrid',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    company: 'Flying animals',
  },
  {
    id: 6,
    image: logo6,
    title: 'Data Scientist',
    time: '2 Days',
    location: 'Las Vegas',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    company: 'Money rules Co.',
  },
  {
    id: 7,
    image: logo7,
    title: 'Researcher',
    time: '1 Day',
    location: 'Reims',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    company: 'Sun & Clouds',
  },
  {
    id: 8,
    image: logo8,
    title: 'Lead Developper',
    time: '1 week',
    location: 'Lyon',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    company: 'Absterigo Co.',
  },
]

const Jobs = () => {
  return (
    <div className="jobContainer">
      {Data.map(({ id, image, title, time, location, desc, company }) => {
        return (
          <div key={id} className="jobCard">
            <div className="jobName">
              <h1>{title}</h1>
              <span className="jobIcon">
                <BiTimeFive />
                {time}
              </span>
            </div>

            <h6>{location}</h6>

            <p>{desc}</p>

            <div className="company">
              <img src={image} alt="Company Logo" />
              <span>{company}</span>
            </div>

            <button>Apply Now</button>
          </div>
        )
      })}
    </div>
  )
}

export default Jobs
