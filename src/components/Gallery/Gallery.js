import React from 'react'
import GalleryChild from '../GalleryChild/GalleryChild'
import './Gallery.css'





const MockList = [
    {
        url: 'https://static3.depositphotos.com/1004996/226/i/450/depositphotos_2260019-stock-photo-glowing-font-shiny-letter-s.jpg',
        text1: 'text1',
        text2: 'text2'
    },
    {
        url: 'https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg',
        text1: 'cool',
        text2: 'not cool'
    },
    {
        url: 'https://static3.depositphotos.com/1000992/133/i/450/depositphotos_1337508-stock-photo-a-free-flying-white-dove.jpg',
        text1: 'hi',
        text2: 'bye'
    },
    {
        url: 'https://millionstatusov.ru/pic/statpic/all8/5e04c21a52a39.jpg',
        text1: 'text1',
        text2: 'text2'
    },
]

const MainPicture = {
    url: 'https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg',
    text1: 'cool text',
    text2: 'very cool'
}

const Gallery = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', height: '100%'}}>
            <div class="container">
                <div style={{textAlign: 'left', fontSize: '4em', paddingBottom: '32px'}}><span style={{color: 'white'}}>Our</span> <span style={{color: 'green'}}>Works</span></div>
                <GalleryChild mockList={MockList} mainPicture={MainPicture} />
            </div>
        </div>
    )
}

export default Gallery