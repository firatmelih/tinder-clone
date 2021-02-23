import React from 'react';
import './SwipeButtons.css';
import ReplayIcon from "@material-ui/icons/Replay"
import CloseIcon from "@material-ui/icons/Close"
import StarRateIcon from "@material-ui/icons/StarRate"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FlashOnIcon from "@material-ui/icons/FlashOn"
import IconButton from "@material-ui/core/IconButton"

function SwipeButtons() {
    return (
        <div className="swipeButtons">

            <IconButton className="swipeButtons__repeat">
                <ReplayIcon fonstSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__close">
                <CloseIcon fonstSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__star">
                <StarRateIcon fonstSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__like">
                <FavoriteIcon fonstSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__lightning">
                <FlashOnIcon fonstSize="large" />
            </IconButton>

        </div >
    )
}

export default SwipeButtons
