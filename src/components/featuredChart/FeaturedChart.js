import React from 'react'
import './FeaturedChart.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const FeaturedChart = () => {
  return (
    <div className='featured'>
      <div className='top'>
         <h1 className='title'>Total Revenue</h1>
         <MoreVertOutlinedIcon fontSize='small' />
      </div>

      <div className='featured-bottom'>
        <div className='featuredChart'>
          <CircularProgressbar 
              value={40} 
              text={"70%"} 
              strokeWidth={5}
              className='progressbar'
          />
        </div>
          <p className='bottom-title'>Total sales made today</p>
          <p className='bottomamount'>$420</p>
          <p className='bottom-description'>
            Previous transactions processing.Last payments may not be included
          </p>
          <div className='summary'>
             <div className='s-item'>
                <div className='s-itemTitle'>Today</div>
                <div className='s-itemResult'>
                  <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                  <div className='resultsAmount negative'>$12.4k</div>
                </div>
             </div>
             <div className='s-item'>
                <div className='s-itemTitle'>Last Week</div>
                <div className='s-itemResult'>
                  <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                  <div className='resultsAmount'>$12.4k</div>
                </div>
             </div>
             <div className='s-item'>
                <div className='s-itemTitle'>Last Month</div>
                <div className='s-itemResult positive'>
                  <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                  <div className='resultsAmount'>$12.4k</div>
                </div>
             </div>
          </div>
      </div>
    </div>
  )
}

export default FeaturedChart