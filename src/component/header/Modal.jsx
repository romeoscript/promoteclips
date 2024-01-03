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
        viewsSlider: 500,
        likesSlider: 80,
        subscribersSlider: 20,
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

    const likes = data.likesSlider * 2
    const sub = data.subscribersSlider * 0.1
    const view = data.viewsSlider * 0.2


    const total = view + sub + likes
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
                                <span>${view}</span>
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
                                <span>${likes}</span>
                            </p>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                aria-label="pretto slider"
                                value={data.likesSlider}
                                step={10}
                                marks
                                onChange={(e, val) => handleSliderChange('likesSlider', val)}
                                max={1000}
                            />
                            <p className='view_Info'>
                                <span>{data.subscribersSlider}Subscribers</span>
                                <span>${sub}</span>
                            </p>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                aria-label="pretto slider"
                                value={data.subscribersSlider}
                                marks
                                onChange={(e, val) => handleSliderChange('subscribersSlider', val)}
                                max={500}
                            />

                        </Box>
                        <h2 className='modal_details'>You will receive <span>{data.viewsSlider}</span> views, <span>{data.likesSlider}</span> likes, and <span>{data.subscribersSlider}</span> subscribers</h2>
                        <figure>
                            <h3>TOTAL= ${total}</h3>
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