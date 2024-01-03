import React from "react";
import { TextField } from "@mui/material";
import { BsTwitter, BsInstagram, BsFillEnvelopeAtFill } from "react-icons/bs";



const ContactForm = ({ className }) => {

    const classes = className;
    return (
        <div className="md:flex w-full justify-around items-start">
           
                <form action="#" className={`${classes} `}>
                 
                        <TextField
                            helperText="Please enter your name"
                            id="demo-helper-text-misaligned"
                            label="Name"
                            sx={{ width: '100%' }}
                           
                        />
                   
                        <TextField
                            helperText="Please enter your E-mail"
                            id="demo-helper-text-misaligned"
                            label="E-mail"
                            sx={{ width: '100%' }}
                           

                        />
                   

                    <TextField
                        id="outlined-multiline-static"
                        label="message"
                        multiline
                        rows={4}
                        sx={{ width: '100%' }}
                       

                    />
                    <button
                        className="block bg-gradient-to-tr from-blue-600 to-red-500 rounded-lg w-full p-[0.7rem] my-[1rem]"
                        type="submit"
                    >
                        submit

                    </button>
                </form>
          

            <figure className="mt-[2rem] shadow-md p-[1rem] rounded-md">
                <h2 className="capitalize my-[1rem] text-xl">other ways to contact us</h2>

                <div>
                    <span className="flex items-center gap-2 text-normal"><BsInstagram /> Promoteclips</span>
                    <span className="flex items-center gap-2 text-normal"><BsTwitter /> Promoteclips</span>
                    <span className="flex items-center gap-2 text-normal"><BsFillEnvelopeAtFill /> @Promoteclips.com</span>
                </div>
            </figure>
        </div>
    );
};

export default ContactForm;
