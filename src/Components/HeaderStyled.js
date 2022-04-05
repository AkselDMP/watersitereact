import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: white;
`

export const RightGraphic = styled.div`
    img{
        position: absolute;
        width: 45.5%;
        right: 0;
        top:0;
    }
    img.whale{
        z-index:1;
    }
    img.bg{
        width: 37%;
    }
    @media (max-width: 1536px) {
        img{
            width: 45%;
        }
    }
    @media (max-width: 768px) { 
        display: none;
    }
`

export const LeftGraphic = styled.div`
    img{
        position: absolute;
        left: 0;
        bottom:0;
        width: 50%;
    }
    @media (max-width: 768px) { 
        display: none;
    }
`


export const Crab = styled.div`
    img{
        position:absolute; 
        left: 0;
        top: 25%;
    }
    @media (max-width: 768px) { 
        display: none;
    }
`


export const Navbar = styled.nav`
    display: flex;
    align-items:center;
    justify-content: left;
    color: #454545;
    padding: 3vh;
    gap: 28%;
    ul{
        display: flex;
        align-items:center;
        gap: 7.5vh;    }
    li{
        list-style: none;
        font-size: 1.05rem;
        cursor: pointer;
    }
    .leftitems{
        display: flex;
        align-items: center;
        gap:1vh;
    }
    .leftitems h1{
        font-size: 1.4rem;
    }
    /* RESPONSIVE */
    @media (max-width: 1536px) { 
        gap: 20%;
    }
    @media (max-width: 768px) {
        ul{
            display: none;
        }
        display: flex;
        align-items:center;
        justify-content: space-between;
        padding: 3.2vh;
    }
    @media (min-width: 768px) {
        img.burger{
            display:none;
        }
    }


`

export const ItemText = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8%;
    margin-left: 13.5%;
    gap: 4vh;
    h1{
        width: 600px;
        font-size: 4em;
        font-weight: 800;
        background: linear-gradient(180deg, rgba(27,24,249,1) 21%, rgba(27,24,249,1) 51%, rgba(225,70,173,1) 93%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    p{
        color: #454545;
        width: 500px;
        font-size: 1.4rem;
        font-weight: 500;
        display: flex;
        align-items:center;
    }
    .button{
        display: flex;
        align-items:center;
        gap: 2.5vh;
    }
    img{
        width: 50px;
    }
    button{
        padding: 18px 32px;
        cursor : pointer;
        border-radius: 10px;
        color: #fff;
        font-weight: 500;
        font-size: 1.3rem;
        border: none;
        background: rgb(3,104,255);
        background: linear-gradient(293deg, rgba(3,104,255,1) 0%, rgba(194,127,207,1) 68%);
    }
    @media (max-width: 1536px){
        margin-top: 5.90%;
        margin-left: 14.5%;
        h1{
            font-size: 3em;
            width: 450px;
        }
        p{
            font-size: 1.25rem;
            width:450px;
            line-height: 1.25;
        }
        button{
            padding: 17px 28px;
        }
    }
    @media (max-width: 768px) { 
        margin-top: 4%;
        margin-left: 2%;
        h1{
            font-size: 2.8em;
            width: 400px;
        }
        p{
            font-size: 1.2rem;
            width: 350px;
        }
        button{
            padding: 17px 22px;
            font-size: 1rem;
            white-space:nowrap;
        }
        img{
            width:47.5px;
        }
    }
`

export const Aksel = styled.div`
    p{
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 1vh;
    }
`