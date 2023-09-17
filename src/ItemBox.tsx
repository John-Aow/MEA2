import React from 'react';
import './ItemBox.css';

interface BoxInfo {
  header: string;
  data: string;
  href?: string;
}

const ItemBox: React.FC<BoxInfo> = ({header,data,href}) => {

    if(!header){
        header="Placeholder"
    }
    if(!data){
        data="Descriptionwedkwedpelpkfplwkelpkwedlkwledk\nlwekdlpwlkedklwemfkwemfklwmefklmwkemfkawefmkawefkawkenfgkawenfaefklaewmfkamwfkamweklfklweldkplwekdpkwepdkpwekdpkwedkpwed\nwepdkpklwkedpkwpekdwkedpkwpekdpokwpkdepokwpkpoedkkwpkdepw\npwkedkpwlekdpkwpedkpedkpowkedpkwpekdopwedkopwedkwpoekdopwkedopkweopdkowpkdopwkedopkwopekdopkweopdkopwekdopwkedokweopdkopwekdwd\npwkedkwpledkpwkdeopked"
    }

    
  return (
      <div className="overlay-content">
        {/* Overlay content goes here */}
        <h2 className='item-name'>{header}</h2>
        <div className='item-description'>{data}</div>
        <button>Create</button>
      </div>
  );
};

export default ItemBox;
