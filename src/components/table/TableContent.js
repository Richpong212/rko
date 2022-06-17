import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.css'

const TableContent = () => {
  const rows = [
    {
       id: 1143155,
       product: 'Acer Nitro 5',
       img: 'https://www.ubuy.com.gh/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzErMkg5NkdIWkwuX0FDX1NMMTUwMF8uanBn.jpg',
       customer: 'John Doe',
       date: '2019-01-01',
       amount: 1000.00,
       method: 'Credit Card',
       status: 'Approved'
    },
    {
       id: 1143156,
       product: 'Nike air max',
       img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b6f0407a-ee1a-4998-bc7c-707b8c33c4f8/air-max-90-shoes-HtBg1x.png',
       customer: 'John Doe',
       date: '2019-01-01',
       amount: 800.00,
       method: 'Credit Card',
       status: 'Approved'
    },
    {
       id: 1140152,
       product: 'Apple iPhone X',
       img: 'https://www.ubuy.com.gh/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzErMkg5NkdIWkwuX0FDX1NMMTUwMF8uanBn.jpg',
       customer: 'Yaw Kese',
       date: '2019-01-01',
       amount: 1200.00,
       method: 'Credit Card',
       status: 'Approved'
    },
    {
      id: 1443136,
      product: 'Ipad Pro',
      img: 'https://images.macrumors.com/article-new/2017/12/ipad-pro-2021-isolated.png',
      customer: 'Monique Drik',
      date: '2019-01-01',
      amount: 800.00,
      method: 'Credit Card',
      status: 'Pending'
   },
   {
      id: 1143156,
      product: 'Nikoten',
      img: 'https://www.news-medical.net/image.axd?picture=2021%2F3%2Fshutterstock_1709594734.jpg',
      customer: 'Moke Doe',
      date: '2019-01-01',
      amount: 800.00,
      method: 'Credit Card',
      status: 'Pending'
   },
 ]

  return (
      <TableContainer component={Paper}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
               <TableRow>
                  <TableCell className='tableCell'>Tracking ID</TableCell>
                  <TableCell className='tableCell'>Product</TableCell>
                  <TableCell className='tableCell'>Customer</TableCell>
                  <TableCell className='tableCell'>Date</TableCell>
                  <TableCell className='tableCell'>Amount</TableCell>
                  <TableCell className='tableCell'>Payment Method</TableCell>
                  <TableCell className='tableCell'>Status</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {rows.map((row) => (
                  <TableRow
                  key={row.id}
                  >
                     <TableCell component="th" scope="row">
                        {row.id}
                     </TableCell>
                     <TableCell className='tablecell'>
                        <div className='p-cellWrapper'>
                            <img src={row.img} alt='product' className='productImg'/>
                            {row.product}
                        </div>
                     </TableCell>
                     <TableCell className='tablecell'>{row.customer}</TableCell>
                     <TableCell className='tablecell'>{row.date}</TableCell>
                     <TableCell className='tablecell'>${row.amount}</TableCell>
                     <TableCell className='tablecell'>{row.method}</TableCell>
                     <TableCell className='tablecell'>
                        <span >{row.status}</span>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
   </TableContainer>
  )
}

export default TableContent