import React from 'react'
import './Hervest.css'
import Union from '../Assets/hervest/Union.svg'
import HerVest from '../Assets/hervest/HerVest.svg'
import Category from '../Assets/hervest/Category.svg'
import Document from '../Assets/hervest/Document.svg'
import Bag from '../Assets/hervest/Bag.svg'
import Paper from '../Assets/hervest/Paper.svg'
import BankCard from '../Assets/hervest/Bank Card.svg'
import Users from '../Assets/hervest/2 User.svg'
import Profile from '../Assets/hervest/Profile.svg'
import Portfolio from '../Assets/hervest/Graph.svg'
import About from '../Assets/hervest/Info Square.svg'
import Support from '../Assets/hervest/Chat.svg'
import Logout from '../Assets/hervest/Logout.svg'
import Profilepicture from '../Assets/hervest/Profile Picture.svg'
import Subtract1 from '../Assets/hervest/Subtract1.svg'
import Subtract2 from '../Assets/hervest/Subtract2.svg'
import Awards from '../Assets/hervest/Awards.svg'
import Green from '../Assets/hervest/Green group.svg'
import Freepik from '../Assets/hervest/freepik characters.svg'

const Hervest = () => {
  return (
    <div className='hervest'>

        <div className='sidenav'>
            <div className='logo'>
                <img className="union" src={Union} alt="" />
                <img className="hervest2" src={HerVest} alt="" />
            </div>

            <div>
                <h6 className='menu'>Menu</h6>
            </div>

            <div className='sideboard'>

                <div className="topcategory">
                    <img className="title" src={Category} alt="" />
                    <p className='dashboard'>Dashboard</p>
                </div>

                <div className='category'>
                    <img className="title" src={Document} alt="" />
                    <p className="dashboard">Plans</p>
                </div>

                <div className='category'>
                    <img className="title" src={Bag} alt="" />
                    <p className="dashboard">Purse</p>
                </div>

                <div className='category'>
                    <img className="title" src={Paper} alt="" />
                    <p className="dashboard">Transactions</p>
                </div>

                <div className='category'>
                    <img className="title" src={BankCard} alt="" />
                    <p className="dashboard">Banks & Cards</p>
                </div>

                <div className='category'>
                    <img className="title" src={Users} alt="" />
                    <p className="dashboard">Girl Code</p>
                </div>

                <div className='category'>
                    <img className="title" src={Profile} alt="" />
                    <p className="dashboard">Profile</p>
                </div>

                <div className='category'>
                    <img className="title" src={Portfolio} alt="" />
                    <p className="dashboard">Portfolio</p>
                </div>

                <div className='category'>
                    <img className="title" src={About} alt="" />
                    <p className="dashboard">About HerVest</p>
                </div>

                <div className='category'>
                    <img className="title" src={Support} alt="" />
                    <p className="dashboard">Support</p>
                </div>

                <div className='category'>
                    <img className="title" src={Logout} alt="" />
                    <p className="dashboard">Logout</p>
                </div>

            </div>
        </div>

        <div className="mainboard">
          <div className='profile'>
            <img className="picture" src={Profilepicture} alt="" />
            <p className='profilename'>Hello, <br /> <span className='name'>Oluwatobi</span> </p>
          </div>
           
           <div className='finances'>
             <div className='money'>
               <div className='balance'>
                 <p className='financename'>Available balance</p>
                 <p className='financeamt'>₦1,063,345.04</p>
               </div>
               <div className='balance'>
                 <p className='financename'>Impact Investments</p>
                 <p className='financeamt'>₦1,007,345.04</p>
               </div>
                <img className='sub1' src={Subtract1} alt="" />
               <div className='balance'>
                 <p className='financename'>Total Savings</p>
                 <p className='financeamt'>₦2,007,345.04</p>
               </div>
               <div className='balance'>
                 <p className='financename'>Total Returns</p>
                 <p className='financeamt'>₦56,000.00</p>
               </div>
             </div>
               <img className='sub2' src={Subtract2} alt="" />
           </div>

           <div className='desc'>
             <h3 className='deschead'>Watch your plans</h3>
             <p className='descbody'>A goal without a plan is just a wish</p>
           </div>

           <div className='underbody'>
             <div className='savings'>
                <p className='savetxt'>Saving for rainy days</p>
                <p className='amt'>N400.000</p>
                <div className='bar'><div className="inbar"/></div>
             </div>
             <div className='savings'>
                <p>Savings for rainy days</p>
                <p className='amt'>N400.000</p>
                <div className='bar'><div className="inbar"/></div>
             </div>
             <div className='savings'>
                <p>Savings for rainy days</p>
                <p className='amt'>N400.000</p>
                <div className='bar'><div className="inbar"/></div>
             </div>
           </div>

           <div className="underbody2">
            <div className="choice">
              <div className='writing'>
                <p className='wrt1'>Create a savings plan</p>
                <p className='wrt2'>Earn up to 12%</p>
              </div>
              <img className="awards" src={Awards} alt="" />
            </div>
            <div className="choice" style={{background: '#265859'}}>
              <div className='writing'>
                <p className='wrt3'>Invest in a <br /> Female Farmer</p>
                <p className='wrt4'>Get up to 25% returns per annum</p>
              </div>
              <img className="awards" src={Green} alt="" style={{left:'155px'}}/>
            </div>
            <div className="choice" style={{background: '#F2F1F3'}}>
              <div className='writing'>
                <p className='wrt3' style={{color:'#E2698D'}}>Invite your girls to <br /> HerVest</p>
                <p className='wrt4' style={{color:'#37474F'}}>Share you girl code.</p>
                <div className='share'>
                    <button className='wrt5'>HG7FIB</button>  
                    <p className='wrt6'>Share</p>
                </div>
              </div>
              <img className="awards" src={Freepik} alt="" style={{left:'155px'}}/>
            </div>
            
           </div>

        </div>

    </div>
  )
}

export default Hervest