import React from 'react'
import { Link } from 'react-router-dom';
import  '../styles/Home.css'; 

const Home = () => {
  const applications = [
    {
       id: 1,
       title: "заявка",
       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
       img: "https://avatars.mds.yandex.net/i?id=2a00000187c1fe3ea939c322000fc7bdc9a7-919303-fast-images&n=13",
       category: 'Опасные дороги',
       status: "На рассмотрении",
     },
     {
       id: 2,
       title: "заявка",
       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
       img: "https://avatars.mds.yandex.net/i?id=2a00000187c1fe3ea939c322000fc7bdc9a7-919303-fast-images&n=13",
       category: 'Опасные дороги',
       status: "На рассмотрении",
     },
     {
       id: 3,
       title: "заявка",
       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
       img: "https://avatars.mds.yandex.net/i?id=2a00000187c1fe3ea939c322000fc7bdc9a7-919303-fast-images&n=13",
       category: 'Опасные дороги',
       status: "На рассмотрении",
     },
     {
       id: 4,
       title: "заявка",
       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
       img: "https://avatars.mds.yandex.net/i?id=2a00000187c1fe3ea939c322000fc7bdc9a7-919303-fast-images&n=13",
       category: 'Опасные дороги',
       status: "На рассмотрении",
     },
  ]
  return (
    <div className='home'>
      <div className="applications">
        {applications.map((application)=> (
          <div className="application" key={application.id}>
            <div className="img">
              <img src={application.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${application.id}`}>
                <h1>{application.title}</h1>
                </Link>
                <p>{application.desc}</p>
                <p>{application.category}</p>
                <p>{application.status}</p>
                <button>Узнать больше</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home