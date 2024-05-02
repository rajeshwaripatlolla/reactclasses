// import './map.css'
const DataMapping = ()=>{
        const data = [
        {
            name : 'CSK',
            image : 'https://images.news18.com/ibnlive/uploads/2024/03/ms-dhoni-csk-captain-bcci-2024-03-7512d1efc43affe64167b4a6449f8eb7.jpg',
            captain : 'Rituraj Gaikwad',
            age:21
        } ,
        {
            name : 'RCB',
            image : 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-244654,resizemode-75,msid-99712684/news/new-updates/rcb-vs-rr-ipl-2023-match-why-virat-kohlis-team-wears-green-jersey-every-year.jpg',
            captain : 'Faf',
            age:32
        },
        {
            name : 'MI',
            image : 'https://y20india.in/wp-content/uploads/2024/04/mi-squad-ipl-2024-sportstiger-1702967642348-original.jpg',
            captain : 'Hardik',
            age:87
        },
        {
            name : 'KKR',
            image : 'https://cdn.zeebiz.com/sites/default/files/2024/03/22/285175-news-89.jpg',
            captain : 'Shreyas',
            age:54
        },
        {
            name : 'GT',
            image : 'https://y20india.in/wp-content/uploads/2024/04/gt-1702843909497-original.jpg',
            captain : 'Gill',
            age:45
        },
        {
            name : 'RR',
            image : 'https://y20india.in/wp-content/uploads/2024/04/rr-squad-ipl-2024-sportstiger-1702965836944-original.jpg',
            captain : 'Sanju',
            age:78
        },
        {
            name : 'PBKS',
            image : 'https://im.rediff.com/cricket/2023/mar/28dhawan-pbks.jpg',
            captain : 'Shikhar',
            age:56
        },
        {
            name : 'LSG',
            image : 'https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2023/04/15/3294cb2b7d193a7eb3cc3b064563dbdb.jpg?fit=885%2C1292&quality=80&zoom=1&ssl=1?v=1681572797',
            captain : 'KL Rahul',
            age:72
        },
        {
            name : 'DC',
            image : 'https://static.tnn.in/thumb/msid-105514031,width-1280,height-720,resizemode-75/105514031.jpg',
            captain : 'Rishab Pant',
            age:45
        }
    ]
    return(
        <div className="iplContainer">
           
                <h1>IPL Teams</h1>
         
            <div className="iplCardContainer">
                <>
                {
                    data.map(eachObj =>{
                        const {image,name,captain} = eachObj
                        return(
                            <div className="iplCard">
                                <img src={image} alt="" height={180} width={150}/>
                                <h3 >{name} </h3>
                                <h5>{captain}</h5>
                            </div>
                        )
                    })
                }
                </>
            </div>
        </div>
    )
}
export default DataMapping