export const  userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {field: 'user', headerName: 'User', width: 230, renderCell: (params) =>{
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt='avatar' />
                {params.row.username}
            </div>
        )
    }},
    {
        field: 'email',
        headerName: 'Email',
        width: 230,
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 100,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 100,
        renderCell: (params) => {
            return (
                   <div className={`cellWithStatus ${params.row.status}`}>
                      {params.row.status}
                   </div>
                )
        }
    },
]

//Temporary Data
export const userRows = [
    {
        id: 1,
        username: 'Snow',
        img: 'http://c.files.bbci.co.uk/61E6/production/_114326052_shattawale4.jpg',
        status: 'active',
        email: '1snow@gmail.com',
        age: 55,
    },
    {
        id: 2,
        username: 'Brew',
        img: 'https://cdn.pmnewsnigeria.com/wp-content/uploads/2021/10/55217EB0-DE55-4DE2-814D-34A272B1F0EA.jpeg',
        status: 'Pending',
        email: '1soknow@gmail.com',
        age: 25,
    },
    {
        id: 3,
        username: 'DKB',
        img: 'https://cdn.pmnewsnigeria.com/wp-content/uploads/2021/10/55217EB0-DE55-4DE2-814D-34A272B1F0EA.jpeg',
        status: 'active',
        email: '1soknow@gmail.com',
        age: 45,
    },
    {
        id: 4,
        username: 'Broa',
        img: 'https://cdn.pmnewsnigeria.com/wp-content/uploads/2021/10/55217EB0-DE55-4DE2-814D-34A272B1F0EA.jpeg',
        status: 'Pending',
        email: '1soknow@gmail.com',
        age: 20,
    },
    {
        id: 5,
        username: 'Kwaiew',
        img: 'https://cdn.pmnewsnigeria.com/wp-content/uploads/2021/10/55217EB0-DE55-4DE2-814D-34A272B1F0EA.jpeg',
        status: 'active',
        email: '1soknow@gmail.com',
        age: 59,
    },
    {
        id: 6,
        username: 'Kwaiew',
        img: 'https://cdn.pmnewsnigeria.com/wp-content/uploads/2021/10/55217EB0-DE55-4DE2-814D-34A272B1F0EA.jpeg',
        status: 'active',
        email: '1soknow@gmail.com',
        age: 59,
    },
    {
        id: 7,
        username: 'Kwaiew',
        img: 'https://cdn.pmnewsnigeria.com/wp-content/uploads/2021/10/55217EB0-DE55-4DE2-814D-34A272B1F0EA.jpeg',
        status: 'active',
        email: '1soknow@gmail.com',
        age: 59,
    },

];

