import React from 'react';
import { BsBoxSeam } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Home.scss';
import heroImg from '../../assets/inv-img.png';
import { ShowOnLogin, ShowOnLogout } from '../../components/protect/HiddenLink';

const Home = () => {
  return (
    <div className='home'>
      <nav className='container --flex-between'>
        <div className='logo'>
            <BsBoxSeam size={50} />
        </div>
        <ul className='home-links'>
            <ShowOnLogout>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
            </ShowOnLogout>
            <ShowOnLogout>
                <li>
                    <button className='--btn --btn-primary'>
                        <Link to='/login'>Login</Link>
                    </button>
                </li>
            </ShowOnLogout>
            <ShowOnLogin>
                <li>
                    <button className='--btn --btn-primary'>
                        <Link to='/dashboard'>Dashboard</Link>
                    </button>
                </li>
            </ShowOnLogin>
        </ul>
      </nav>
      {/*HERO SECTION*/}
      <section className='container hero'>
        <div className='hero-text'>
            <h2>CMS Inventory Management</h2>
            <p>
              CMS created to manage Bonetto's database, enabling the creation of new products, updating existing ones, and deleting products.
            </p>
            
        </div>
        <div className='hero-image' >
            <img src={heroImg} alt='Inventory' style={{ maxWidth: '450px', width: '100%', height: 'auto' }}/>
        </div>
      </section>
    </div>
  )
}

const NumberText = ({num, text}) => {
    return (
        <div className='--mr'>
            <h3 className='--color-white'>{num}</h3>
            <p className='--color-white'>{text}</p>
        </div>
    )
};

export default Home
