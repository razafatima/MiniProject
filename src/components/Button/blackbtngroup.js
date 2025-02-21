import buttons from '../Button/databutton';
import BlackButtom from '../Button/ButtonBlack';

const Blackbtngroup = () =>{
    return(
         <div>
            {buttons.map((btn) => (
                <BlackButtom key={btn.id} text={btn.text} button={btn.btns}/>
            ))}
         </div>
    );
}
export default Blackbtngroup;