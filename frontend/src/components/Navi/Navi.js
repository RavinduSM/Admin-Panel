import React from 'react'
import "./Navi.css";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useNavigate } from 'react-router-dom';
export default function Navi() {
    const navigate =useNavigate();
    const handleSelect = (selected) => {
        console.log(selected);
        navigate('/' + selected); // Use the navigate function to navigate to the selected route
    };
  return (
    <div className='si'>
    <SideNav
    onSelect={handleSelect}
     className='myside'>
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="dashboard">
        <NavItem eventKey="dashboard">
            <NavIcon>
            <i className="fa-solid fa-gauge-high" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            Dashboard
            </NavText>
            
        </NavItem>
        <NavItem eventKey="Master Data">
            <NavIcon>
            
            <i className="fa-regular fa-address-card" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            Master Data
            </NavText>
            <NavItem eventKey='adddrivers' style={{ paddingLeft: '25px' }}>
            <NavIcon>
            
            <i className="fa-solid fa-user-group" style={{ fontSize: '1.5em' ,paddingRight: '8px'}} />
                Add Drivers
            </NavIcon>
             
                

            </NavItem>
            
            
        </NavItem>
        <NavItem eventKey="Notification">
        
            <NavIcon>
            <i className="fa-solid fa-bell" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            Notifications
            </NavText>
            <NavItem eventKey='expiry' style={{ paddingLeft: '25px' }}>
            <NavIcon>
                      
            <i className="fa-solid fa-triangle-exclamation" style={{ fontSize: '1.5em' ,paddingRight: '8px'}} />
                Expiry Notifications
            </NavIcon>                 
            </NavItem>
            
        </NavItem>
        <NavItem eventKey="Booking">
            <NavIcon>
           
            <i className="fa-solid fa-book-open-reader" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            Booking
            </NavText>
            <NavItem  eventKey='addbooking' style={{ paddingLeft: '25px' }}>
            <NavIcon>
                    
            <i className="fa-solid fa-circle-plus" style={{ fontSize: '1.5em' ,paddingRight: '8px'}} />
                Add Booking
            </NavIcon>                 
            </NavItem>
            
        </NavItem>
        <NavItem eventKey="Setting">
            <NavIcon>
            
            <i className="fa-solid fa-gear" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            Setting
            </NavText>
            
        </NavItem>
        </SideNav.Nav>
        

    </SideNav>
    </div>
    
  )
}
