import './footer.css';
import react from 'react';
function Footer(){
    return (
        <footer className='footer'>
        
        <ul class="regular">
        <li>Իրադարձությունների ընդհանուր քանակը </li>
        <li>Ապագա իրադարձությունների քանակը </li>
        <li>Վայրերի քանակը </li>
        <li>Արտիստների քանակը </li>
        <li>Վերջին անգամ ավելացվել է իրադարձություն </li> 
        </ul>
       
        
        <div className='amenatak'>
            <p >© Ticket For You 2022 - Բոլոր իրավունքները պաշտպանված են:</p>
        </div>
        </footer>
    )
}
export default Footer;