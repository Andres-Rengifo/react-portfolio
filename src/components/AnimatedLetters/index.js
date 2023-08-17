import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx}) => {
    return ( //Number of characters not specified here
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${i + idx}`}> 
                        {char} 
                    </span>   
                )) 
            }
        </span>

    )
};

export default AnimatedLetters