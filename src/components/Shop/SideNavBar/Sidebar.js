import React, { useEffect, useRef } from 'react';
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import iconImage from './logo.png';
import { IconContext } from 'react-icons';
import './Sidebar.css';

function Sidebar() {

	var flag = true;

	const toggleSidebar = () => {
		if (flag) {
			// console.log("opening sidebar");
			document.getElementById("sidebar").style.width = "250px";
			// document.getElementById("main").style.marginLeft = "250px";
			flag = false;
		} else {
			// console.log("closing sidebar");
			document.getElementById("sidebar").style.width = "75px";
			// document.getElementById("main").style.marginLeft = "85px";
			flag = true;
		}
	}

	return (
		<div>
			<div id="sidebar" className="sidebar" onMouseOver={toggleSidebar} onMouseOut={toggleSidebar}>
				<a href="#/shop">
					<img src={iconImage} alt="" width="30" height="30" className="logo" />
					<span className="company">MedConnect</span>
				</a>
				<a href="#/shop/dashboard">
						<MdIcons.MdDashboard className="material-icons" />
						<span class="icon-text">Dashboard</span>
				</a>
				<a href="#/shop/inventory">
					<FaIcons.FaBoxes className="material-icons" />
					<span class="icon-text">Inventory</span>
				</a>
				<a href="#/shop">
					<FaIcons.FaCashRegister className="material-icons" />
					<span class="icon-text">Bookings</span>
				</a>
				<a href="#/shop">
					<MdIcons.MdPerson className="material-icons" />
					<span class="icon-text">Profile</span>
				</a>
			</div>
		</div>
	);
}

export default Sidebar;