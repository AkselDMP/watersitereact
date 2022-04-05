import React from 'react'
import Rgraphic from '../Assets/rightgraphic.svg'
import Lgraphic from '../Assets/leftgraphic.svg'
import Whale from '../Assets/whales.svg'
import Logo from '../Assets/logo.svg'
import Crabe from '../Assets/crab.svg'
import Play from '../Assets/play.svg'
import Burger from '../Assets/burger.svg'
import {
    Container,
    RightGraphic,
    LeftGraphic,
    Navbar,
    Crab,
    ItemText,
    Aksel,
}from './HeaderStyled'

const Header = () => {
    return (
    <Container>
        <Navbar>
            <div className='leftitems'>
                <img src={Logo} />
                <h1>waterworks</h1>
            </div>
            <ul>
                <li>
                    Services
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
            </ul>
            <div>
            <img className='burger' src={Burger} />
            </div>
        </Navbar>
        <ItemText>
            <h1>Protect Our Water Buddies</h1>
            <p>You did not inherit the Earth’s water from your ancestors, you owe it to your future generations ahead.</p>
            <div className='button'>
                <button>
                    Let's Begin
                </button>
                <p>
                    <img src={Play}/>
                    Watch Video
                </p>
            </div>
        </ItemText>
        <Crab>
            <img src={Crabe}/>
        </Crab>

        <RightGraphic>
            <img className='whale' src={Whale}/>
            <img className='bg' src={Rgraphic}/>
        </RightGraphic>
        <LeftGraphic>
        <img src={Lgraphic}/>
        </LeftGraphic>
        <Aksel>
            <p>
                Made by Aksel
            </p>
        </Aksel>
    </Container>
    )
}

export default Header