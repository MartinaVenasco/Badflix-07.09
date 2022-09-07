import './index.scss';
import {RiStarSLine} from 'react-icons/ri'

const Modal = ({data, isVisibile, onModalClick}) => {
  const { title, vote_average, poster_path, overview } = data;

  return isVisibile && (
    <div className="Modal__overlay" onClick={() => onModalClick(false)}>
    
        <div className="Modal">
        <img className="Modal__img" src={`https://image.tmdb.org/t/p/w342${ poster_path }`} alt={ title }></img>
        <div className='Modal_text'>
        <h2 className="Modal__header">{title}</h2>
        <p className="Modal__desc">{overview}</p>
        <div className='average'>
        <p className='vote'> <RiStarSLine size={25}/> {vote_average}</p></div></div>
      </div>
    </div>
  )
}

export default Modal;