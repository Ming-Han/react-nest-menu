import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Menu, {  SubMenu , RightSubMenu, MenuItem} from '../src/Menu';
import style from './test.css';


ReactDOM.render(
  <div>
    <Menu width="200" className = {style.btn}>
    	<RightSubMenu title="Legend">
    		<MenuItem>Overall</MenuItem>
        <SubMenu title="Data">
          <MenuItem>RRC Setup SR (%)</MenuItem>
          <MenuItem>Call Setup time (ms)</MenuItem>
          <MenuItem>ERAB Setup SR (%)</MenuItem>
          <MenuItem>Attech SR (%)</MenuItem>
          <MenuItem>Bearer Create SR (%)</MenuItem>
          <MenuItem>Retransmissions (%)</MenuItem>
          <MenuItem>Throughput (Mbps)</MenuItem>
        </SubMenu>
        <SubMenu title="VoLTE">
          <MenuItem>RRC Setup SR (%)</MenuItem>
          <MenuItem>Call Setup time (ms)</MenuItem>
          <MenuItem>Drop Call Rate (%)</MenuItem>
          <MenuItem>ERAB Setup SR (%)</MenuItem>
          <MenuItem>Registration SR (%)</MenuItem>
          <MenuItem>Registration Latency (ms)</MenuItem>
          <MenuItem>MOS</MenuItem>
        </SubMenu>
        <SubMenu title="Streaming">
          <MenuItem>Throughput (Mbps)</MenuItem>
          <MenuItem>Latency (ms)</MenuItem>
          <MenuItem>Retransmissions (%)</MenuItem>
          <MenuItem>Buffering Time (msec)</MenuItem>
          <MenuItem>The number of Re-buffering</MenuItem>
          <MenuItem>MOS</MenuItem>
          <MenuItem>Jitter</MenuItem>
          <MenuItem>Dropped Frame Rate (%)</MenuItem>
          <MenuItem>Inter-Packet delay (msec)</MenuItem>
          <MenuItem>Packet Loss Rate (%)</MenuItem>
        </SubMenu>
        <SubMenu title="Gaming">
          <MenuItem>Throughput (Mbps)</MenuItem>
          <MenuItem>Latency (ms)</MenuItem>
          <MenuItem>Retransmissions (%)</MenuItem>
          <MenuItem>MOS</MenuItem>
          <MenuItem>Jitter</MenuItem>
          <MenuItem>Dropped Frame Rate (%)</MenuItem>
          <MenuItem>Inter-Packet delay (msec)</MenuItem>
          <MenuItem>Packet Loss Rate (%)</MenuItem>
        </SubMenu>
        <SubMenu title="IM">
          <MenuItem>Throughput (Mbps)</MenuItem>
          <MenuItem>Latency (ms)</MenuItem>
          <MenuItem>Retransmissions (%)</MenuItem>
          <MenuItem>Dropped Frame Rate</MenuItem>
          <MenuItem>Inter-Packet delay (msec)</MenuItem>
          <MenuItem>Packet Loss Rate (%)</MenuItem>
        </SubMenu>
    	</RightSubMenu>
      <RightSubMenu title="Top List by">
        <MenuItem>Window</MenuItem>
        <MenuItem>Polygon(New)</MenuItem>
        <SubMenu title="Polygon">
          <MenuItem>SMB</MenuItem>
          <MenuItem>YSH</MenuItem>
        </SubMenu>
      </RightSubMenu>
    </Menu>
  </div>
  , document.getElementById('root'));