import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget';
import FeaturedChart from '../../components/featuredChart/FeaturedChart';
import Chart from '../../components/chart/Chart';


import './home.css';
import TableContent from '../../components/table/TableContent';


const Home = () => {

   

  return (
    <div className='home' >
       <Sidebar />
       <div className='homeContainer'>
          <Navbar />
          <div className='widgets'>
             <Widget  type='user' />
             <Widget  type='order'/>
             <Widget  type='earning'/>
             <Widget  type='balance'/>
          </div>
          {/* Charts container */}
          <div className='chartsContainer'>
             <FeaturedChart />
             <Chart title='Last 6 Months (Revenue)' aspect={2/1} />
          </div>
          <div className='h-listContainer'>
             <div className='h-listTitle'>Latest Transaction</div>
             <TableContent />
          </div>
       </div>
    </div>
  )
}

export default Home