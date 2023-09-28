import React from 'react'
import { Link, NavLink} from 'react-router-dom'

export default function Header() {
  return (<>
 <div class="card text-center">
  <div class="card-header">
    <ul style={{margin:"0px"}} class="nav nav-pills card-header-pills">
      <li><h1>urbanic</h1></li>&nbsp;&nbsp;&nbsp;
      <li class="nav-item">
        <NavLink style={{paddingLeft:"10px",color:"red"}} to="/form" class="nav-link disabled">NEW IN</NavLink>
      </li>&nbsp;&nbsp;&nbsp;
      <li class="nav-item">
        <NavLink to="/clothing" class="nav-link disabled">CLOATHING</NavLink>
      </li>&nbsp;&nbsp;&nbsp;
      <li class="nav-item">
        <NavLink to="/dress" class="nav-link disabled">DRESSES</NavLink>
      </li>&nbsp;&nbsp;&nbsp;
      <li class="nav-item">
        <NavLink to="/knitwear" class="nav-link disabled">KNITWEAR</NavLink>
      </li>&nbsp;&nbsp;&nbsp;
      <li class="nav-item">
        <NavLink to="/denim" class="nav-link disabled">DENIM</NavLink>
      </li>&nbsp;&nbsp;&nbsp;
      <li class="nav-item">
        <NavLink to="/sports" class="nav-link disabled">SPORTS</NavLink>
      </li>&nbsp;&nbsp;&nbsp;
      <li class="nav-item">
        <NavLink to="/swimwear" class="nav-link disabled">SWIM WEAR</NavLink>
      </li>&nbsp;&nbsp;&nbsp;
      <li class="nav-item">
        <NavLink to="/special" class="nav-link danger">SPECIAL PRICES</NavLink>
      </li>&nbsp;&nbsp;&nbsp;
     
      <li class="nav-item">
        <NavLink to="/membership" class="nav-link disabled">MEMBERSHIP</NavLink>
      </li>&nbsp;&nbsp;&nbsp;
    </ul>
  </div>
 
</div>
  </>)
}
