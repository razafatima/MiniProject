import buttons from '../Button/databutton';
import Button from './Button';

const Buttongroup = () => {
    return (
        <div>
            {buttons.map((btn) => (
                <Button key={btn.id} text={btn.text} btns={btn.btns} />
            ))}
        </div>
        
    );
};

export default Buttongroup;
