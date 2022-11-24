import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../utils/hooks/useFetch';
import Error from '../Error/Error';
import Carousel from '../../layout/Carousel/carousel';
import Title from '../../layout/Title/title';
import Stars from '../../layout/Stars/stars';
import Accordion from '../../components/Accordion/accordion';
import Tags from '../../layout/Tags/tags';
import Host from '../../layout/Host/host';

function SingleCard() {
  const params = useParams();
  const { data, isLoading } = useFetch('../datas/logements.json', []);
  const foundCard = data?.filter((card) => card.id === params.id);
  return (
    <>
      {isLoading ? (
        <span className="loading">Loading...</span>
      ) : !foundCard || foundCard.length === 0 ? (
        <Error />
      ) : (
        foundCard &&
        foundCard.map(
          ({
            title,
            pictures,
            description,
            host,
            rating,
            location,
            equipments,
            tags,
          }) => (
            <div className="main" key={foundCard}>
              <Carousel pictures={pictures} />
              <section className="details">
                <Title title={title} location={location} />
                <Host host={host} />
                <Tags tags={tags} />
                <Stars rating={rating} />
              </section>
              <div className="container_accordion_singleCard">
                <Accordion title="Description" content={description} />
                <Accordion
                  title="Equipements"
                  content={
                    <ul>
                      {equipments.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  }
                />
              </div>
            </div>
          )
        )
      )}
    </>
  );
}
export default SingleCard;
