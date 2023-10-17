import React from 'react'
import{ Button,Card }from 'react-bootstrap';
const img='data:image/jpeg;base64,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'

function TopProduct() {
 
    const cardData = [
        {
          id: 1,
          img: img,
          title: 'Card Title 1',
          text: 'Some quick example text for card 1.',
        },
        {
          id: 2,
          img: img,
          title: 'Card Title 2',
          text: 'Some quick example text for card 2.',
        },
        {
            id: 1,
            img: img,
            title: 'Card Title 1',
            text: 'Some quick example text for card 1.',
          },
          {
            id: 2,
            img: img,
            title: 'Card Title 2',
            text: 'Some quick example text for card 2.',
          },
          {
            id: 1,
            img: img,
            title: 'Card Title 1',
            text: 'Some quick example text for card 1.',
          },
          {
            id: 2,
            img: img,
            title: 'Card Title 2',
            text: 'Some quick example text for card 2.',
          },
          {
              id: 1,
              img: img,
              title: 'Card Title 1',
              text: 'Some quick example text for card 1.',
            },
            {
                id: 1,
                img: img,
                title: 'Card Title 1',
                text: 'Some quick example text for card 1.',
              },

        // Add more card data as needed
      ];
    
      return (
        <div>
      <h1 className="text-center">Top Product</h1>
      <div className={'d-flex flex-wrap justify-content-start'}>
        {cardData.map((card) => (
          <Card className="mt-3" style={{ width: '18rem', marginLeft: '10px' }} key={card.id}>
            <Card.Img variant="top" src={card.img} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default TopProduct