import React from 'react';
import chat from './chat.png';
import coin from './coin.png';
import fDelivery from './f-delivery.png';
import Img from './Img';
import Title from './Title';
import Description from './Description';

const Guarantee = ()=>{
  const guaranteeData = [
    {
        img: chat,
        title: 'Free Shipping',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in',
        alt: 'chat'
      },
      {
        img: coin,
        title: '100% money back',
        desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        alt: 'coin'
      },
      {
        img: fDelivery,
        title: 'Online Support 24/7',
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        alt: 'delivery'
      },


  ]

  return guaranteeData.map((guaranteeItem) =>{
     return (<div className='guarantee' style = {{width:'33%', display:'inline-block'}}>
            <Img img= {guaranteeItem.img} alt={guaranteeItem.alt}/>
            <Title title={guaranteeItem.title}/>
            <Description desc={guaranteeItem.desc} />
            </div>
    )

  })
}

export default Guarantee;
