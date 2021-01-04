import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Made with Love and Spice and Everything Nice!</h1>
            <div className='cards__container'>
                <div  className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src = 'https://images.unsplash.com/photo-1564869733874-7c154d5de210?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80'
                            text = 'Try the most authentic Ma Po Tofu in town!'
                            label ='Ma Po Tofu'
                            path = '/gallery'
                        />
                        <CardItem 
                            src = 'https://images.unsplash.com/photo-1568254500745-c879851c30fe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                            text = 'Smoked Shrimp with Vermicelli and Garlic'
                            label ='Shrimp'
                            path = '/gallery'
                        />
                        <CardItem 
                            src = 'https://images.chinahighlights.com/allpicture/2019/01/482fb1f829ce4e6496b94fea_894x596.jpg'
                            text = 'Our most popular dish, Gourmet Hotpot (火锅 huǒguō)'
                            label ='HotPot'
                            path = '/gallery'
                        />
                        <CardItem 
                            src = 'https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                            text = 'Spicy Noodles glazed with hot sauce and sauted vegetables and pork'
                            label ='Noodles'
                            path = '/gallery'
                        /> 
                    </ul>

                    <ul className='cards__items'>
                        <CardItem 
                            src = 'https://images.unsplash.com/photo-1606525437679-037aca74a3e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                            text = 'Crispy Spring Rolls stuffed with Vegetables fillings.'
                            label = 'Spring Rolls'
                            path = '/gallery'
                        />
                        <CardItem 
                            src = 'https://images.unsplash.com/photo-1564436725-c8e7d874569d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80'
                            text = 'Spicy Chicken Manchurian that goes perfectly with fried rice and noodles.'
                            label = 'Manchurian'
                            path = '/gallery'
                        />
                        <CardItem 
                            src = 'https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80'
                            text = 'Tangy Fried Rice topped with Fried Prawns to explode your taste buds!'
                            label = 'Fried Rice'
                            path = '/gallery'
                        />
                        <CardItem 
                            src = 'https://images.chinahighlights.com/allpicture/2019/11/c544b75a1c1c416da0cf885c_893x595.jpg'
                            text = 'Peking duck (北京烤鸭 Běijīng kǎoyā) considered as one of China’s national dishes.'
                            label = 'Roasted Duck'
                            path = '/gallery'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
