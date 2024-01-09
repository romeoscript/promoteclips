import { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import './header.css'
import StripeButton from './StripeBTN';
import PaypalBtn from './PaypalBtn';




const modalStyle = () => {
  


    const width = window.innerWidth < 768 ? '90%' : '50%';
    return {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: width,
        borderRadius: '10px',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 2,
    }
};



const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#52af77',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});
export default function TransitionsModal({ setInfo, video }) {
    const [open, setOpen] = useState(true);
    const [data, setData] = useState({
        viewsSlider: 0,
        likesSlider: 0,
        subscribersSlider: 0,
        sharesSlider:0
    });
    const handleSliderChange = (type, newValue) => {
        setData(prevData => ({
            ...prevData,
            [type]: newValue,
            [type.replace("Slider", "")]: newValue
        }))

    }
    const handleClose = () => {
        setInfo(false)
        setOpen(false);

    }

    const likes = data.likesSlider * 0.08
    const likesoff = likes * 0.01
    
    const sub = data.subscribersSlider * 0.0812 
    const suboff = sub * 0.0357
    
    const share = data.sharesSlider * 0.8
    const shareoff = share * 0.035


    const view = data.viewsSlider * 0.0072
    const viewsoff = (view * 0.0181).toFixed(2)

console.log(view);
    const total = (view - viewsoff) + (sub - suboff) + (likes - likesoff) + (share - shareoff)
    return (
        <div className='modal_figure' >
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={modalStyle()}>
                        <div className='image_father'>
                            <p className='vid_title'>{video?.title}</p>
                            <span>by {video?.channelTitle}</span>
                            <img src={video?.thumbnails.high.url} alt="" className='image' />
                        </div>
                        <Box sx={{ width: '100%' }}>

                            <p className='view_Info'>
                                <span>{data.viewsSlider} views</span>
                                <span>${(view - viewsoff).toFixed(2)} (${viewsoff} Off) </span>
                            </p>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                aria-label="pretto slider"
                                value={data.viewsSlider}
                                step={1000}
                                marks
                                onChange={(e, val) => handleSliderChange('viewsSlider', val)}
                                max={10000}
                            />
                            <p className='view_Info'>
                                <span>{data.likesSlider} Likes</span>
                                <span>${(likes - likesoff).toFixed(2)}(${likesoff} Off)</span>
                            </p>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                aria-label="pretto slider"
                                value={data.likesSlider}
                                step={50}
                                marks
                                onChange={(e, val) => handleSliderChange('likesSlider', val)}
                                max={1000}
                            />
                            <p className='view_Info'>
                                <span>{data.subscribersSlider} Subscribers</span>
                                <span>${(sub - suboff).toFixed(2)} (${suboff.toFixed(2)} Off)</span>
                            </p>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                aria-label="pretto slider"
                                step={100}
                                value={data.subscribersSlider}
                                marks
                                onChange={(e, val) => handleSliderChange('subscribersSlider', val)}
                                max={500}
                            />
                            <p className='view_Info'>
                                <span>{data.sharesSlider} Shares</span>
                                <span>${(share - shareoff).toFixed(2)} (${shareoff.toFixed(2)} Off)</span>
                            </p>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                aria-label="pretto slider"
                                step={5}
                                value={data.sharesSlider}
                                marks
                                onChange={(e, val) => handleSliderChange('sharesSlider', val)}
                                max={50}
                            />

                        </Box>
                        <h2 className='modal_details'>You will receive <span>{data.viewsSlider}</span> views, <span>{data.likesSlider}</span> likes, <span>{data.sharesSlider}</span> shares, and <span>{data.subscribersSlider}</span> subscribers</h2>
                        <figure>
                            <h3>TOTAL= ${total.toFixed(2)}</h3>
                            <div className='md:flex items-center justify-center ' >
                                <StripeButton amount={total} />
                                
                                <PaypalBtn amount={total} />
                            </div>
                        </figure>
                    </Box>

                </Fade>
            </Modal>
        </div>
    );
}