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
      <div className="itembox-content">
        {/* Overlay content goes here */}
        <h2 className='itembox-name'>{header}</h2>
        <div className='item-description'>
        <div
          dangerouslySetInnerHTML={{ __html: data }}
        />
      </div>
        <button className='itembox-btn'>Request</button>
      </div>
  );
};

export default ItemBox;
