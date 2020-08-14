import React from 'react'
import './GalleryChild.css'
import { useState, useEffect } from 'react';
import styled from 'styled-components'



const GalleryChild = (props) => {
    const [smallPics, setSmallPics] = useState(props.mockList);
    const [mainPic, setMainPic] = useState(props.mainPicture);
    const MainPicture = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${mainPic.url});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    `
    return <div class="galleryContainer">{!props.binary ? <div class="galleryGrid">
        <div style={{display: 'flex', flexWrap: 'wrap'}} className="picWidth">
            {smallPics.map(el => {
                const SmallPicture = styled.div`
                position: relative;
                background-image: url(${el.url});
                height: 50%;
                width: 50%;
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                `
                return <SmallPicture className="hoveringPics">
                    <div className="smallPicArrow"><i class="fas fa-arrow-right"></i>
                    </div>
                    <div className="smallPicInners">
                    <div>{el.text1}</div>
                    <div>{el.text2}</div>
                    </div>
                    </SmallPicture>
            })}
        </div>
        <div className="picWidth">
            <MainPicture className="hoveringPics">
                <div style={{position: 'absolute', bottom: '6px', left: '16px'}}>
                    <div style={{color: 'white', fontSize: '3em', textAlign: 'left'}}>{props.mainPicture.text1}</div>
                    <div style={{color: 'green', fontSize: '2em', textAlign: 'left'}}>{props.mainPicture.text2}</div>
                    </div>
                    <div style={{fontSize: '2em', position: 'absolute', top: '0', right: '10px', color: 'white', transform: 'rotate(-45deg)'}}><i class="fas fa-arrow-right"></i>
                    </div>
                </MainPicture>
        </div>
        </div>
        :
        null}
    </div>
}

export default GalleryChild