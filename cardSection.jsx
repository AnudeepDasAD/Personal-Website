import React, { Component } from 'react'
//import CardLink from './cardLink.jsx'
import img1 from '../fear.png'


/*
const Section = ( {image, anch} )=> {
    return ( <section class = 'card'>
                <img src={image} alt = ''/>
            </section>
    );
};
*/


class CardSection extends Component {
    
    state = {  
        images: [img1, img1, img1]
    }

    /*
    render() { 
        return ( 
        <div class='container'>
            {
                this.state.images.map(element => <Section image={element}/>)
            }
            <h1>Help</h1>
        </div> 
        );
    }
    */

    //state = {}
    render() {
        return (
            <div class='container'>
                <a href="https://www.youtube.com/watch?v=ptfUwPJbGlQ&t=285s">
                    <section class = 'card' data-aos='fade-right'>
                        <img src={img1} alt = ''/>
                        <div>
                        <h3>About me</h3>
                    </div>
                    </section>
                </a>
                <section class = 'card' data-aos='fade-left'>
                    <img src={img1} alt = ''/>
                    <div>
                        <h3>Projects</h3>
                    </div>
                </section>
                <section class = 'card' data-aos='fade-right'>
                    <img src={img1} alt = ''/>
                    <div>
                        <h3>Contact</h3>
                    </div>
                </section>
            </div>
        )
    }
}
 
export default CardSection;