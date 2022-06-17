
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar'
import Chart from '../../components/chart/Chart';
import './single.css'
import TableContent from '../../components/table/TableContent';

function Single() {
  return (
    <div className='single'>
       <Sidebar />
       <div className='singleContainer'>
          <Navbar />
          <div className='s-Top'>
             <div className='s-TopLeft'>
                 <div className='editButton'>Edit</div>
                 <h1 className='s-title'>Information</h1>
                 <div className='s-TopLeftItem'>
                    <img 
                      src='https://media.self.com/photos/5b97d869a2b2275f3ea9ae70/4:3/w_2560%2Cc_limit/GettyImages-1029858210.jpg' 
                      alt='user' 
                      className='s-TopLeftItem-img'
                    />
                   {/* details*/}
                    <div className='details'>
                      <h1 className='d-itemTitle'>Jane Bruce</h1>
                      <div className='detailItem'>
                        <span className='Itemkey'>Email:</span>
                        <span className='ItemValue'>jancole@gmail.com</span>
                      </div>
                      <div className='detailItem'>
                        <span className='Itemkey'>Phone</span>
                        <span className='ItemValue'>+1 23209383</span>
                      </div>
                      <div className='detailItem'>
                        <span className='Itemkey'>Address:</span>
                        <span className='ItemValue'>34 Jango Dr </span>
                      </div>
                      <div className='detailItem'>
                        <span className='Itemkey'>Country:</span>
                        <span className='ItemValue'>USA</span>
                      </div>
                    </div>
                    {/* details*/}
                 </div>
             </div>
             <div className='s-TopRight'>
               <Chart aspect={3/1} title='User Spending(Last 6 Months)'/>
             </div>
          </div>
          <div className='s-Bottom'>
              <h1 className='s-title'>Last Transactions</h1>
              <TableContent />
          </div>
       </div>
    </div>
  )
}

export default Single