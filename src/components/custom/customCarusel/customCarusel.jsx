import React from "react"

//styles
import "./customCarusel.css";
//MUI
import Carousel from 'react-material-ui-carousel'
import {Button, Paper} from '@mui/material'
import Home from '@mui/icons-material/Home';


function Item(props) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

const CustomCarusel = () => {

    let items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            Image: "https://source.unsplash.com/featured/?macbook",

        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            Image: "https://source.unsplash.com/featured/?macbook",


        },
        {
            name: "Random Name #3",
            description: "Hello World!",
            Image: "https://source.unsplash.com/featured/?macbook",
        },
        {
            name: "Random Name #4",
            description: "Hello World!",
            Image: "https://source.unsplash.com/featured/?macbook",
        }
    ]


    return (
        <div className="stylesBlock">
            <Carousel
                height={"100vh"}
                interval={1000}
                NextIcon={<Home/>}
                PrevIcon={<Home/>}
                IndicatorIcon={<Home/>} // Previous Example
                indicatorIconButtonProps={{
                    style: {
                        padding: '10px',    // 1
                        color: 'blue'       // 3
                    }
                }}
                activeIndicatorIconButtonProps={{
                    style: {
                        backgroundColor: 'rgba(255, 255, 255, 0.336)' // 2
                    }
                }}
                indicatorContainerProps={{
                    style: {
                        marginTop: '50px', // 5
                        textAlign: 'center' // 4
                    }

                }}
            >
                {
                    items.map((item, i) => <Item key={i} item={item}/>)
                }
            </Carousel>


        </div>

    );
};

export default CustomCarusel;
