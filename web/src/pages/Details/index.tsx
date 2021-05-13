import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from 'react-modal';
import { useHistory, useParams } from "react-router-dom";
import { PageWrapper } from "../../components/wrappers";
import LoaderSpinner from "../../components/loader";
import { Button } from "../../components/buttons";
import { usePropertiesContext } from "../../contexts/properties";
import { Text } from "../../components/typography";
import { Property } from "../../types";
import LocalImage from "../../components/image";
import { PropertyDetails } from "./style";
import AvailabilityIndicator from "../../components/fields/AvailabilityIndicator";
import Carousel from "styled-components-carousel/dist/Carousel";

const customModalStyles = {
  content : {
    backgroundColor: "none",
  }
};

const Details = () => {
  const propertiesCtx = usePropertiesContext();
  const { propertyId } = useParams<{ propertyId: string }>();
  const ID = parseInt(propertyId);
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const history = useHistory();

  useEffect(() => {
    (async () => {
      await propertiesCtx.fetchProperty(ID);
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ID]);

  const property = propertiesCtx.details.loaded ? propertiesCtx.details.data : null;

  return (
    <>
      <PageWrapper>
        <div className="back-btn-wrapper">
          <Button onClick={() => history.goBack()}>&lt; Back</Button>
        </div>
        {!propertiesCtx.details.loaded ? (
          <LoaderSpinner />
        ) : (() => {
          const {
            price,
            baths,
            beds,
            neighborhood,
            address,
            city,
            zipcode,
            available,
            image,
            type,
            yearBuilt,
            heating,
            parking,
            lot,
            stories,
            anualTax,
            parcelNumber,
            lastSold,
            hasGarage,
            pool,
            virtualTourLink,
            totalVisits,
            images,
          } = property as Property;
          return (
            <>
              <PropertyDetails>
                <div className="images">
                  <div className="scrollable">
                    <div className="main-image">
                      <LocalImage src={image} alt="property image" />
                    </div>
                    <div className="more-images">
                      {
                        images.map(
                          (image, i) =>
                          <div className="image" onClick={() => setModalIsOpen(true)}>
                            <LocalImage src={image} alt={`property image ${i}`} />
                          </div>
                        )
                      }
                    </div>
                  </div>
                </div>
                <div className="info">
                  <div>
                    <Text><b>Price:</b> {price}</Text>
                  </div>
                  <div>
                    <Text><b>Neighborhood:</b> {neighborhood}</Text>
                  </div>
                  <div>
                    <Text><b>Baths:</b> {baths}</Text>
                  </div>
                  <div>
                    <Text><b>Beds:</b> {beds}</Text>
                  </div>
                  <div>
                    <Text><b>Address:</b> {address}</Text>
                  </div>
                  <div>
                    <Text><b>City:</b> {city}</Text>
                  </div>
                  <div>
                    <Text><b>Zip code:</b> {zipcode}</Text>
                  </div>
                  <div>
                    <Text>
                      <b>Available:</b>{" "}
                      <AvailabilityIndicator available={available === "true"} />
                    </Text>
                  </div>
                  <hr />
                  <div>
                    <Text><b>Type:</b> {type}</Text>
                  </div>
                  <div>
                    <Text><b>Year built:</b> {yearBuilt}</Text>
                  </div>
                  <div>
                    <Text><b>Heating:</b> {heating}</Text>
                  </div>
                  <div>
                    <Text><b>Parking:</b> {parking}</Text>
                  </div>
                  <div>
                    <Text><b>Lot:</b> {lot}</Text>
                  </div>
                  <div>
                    <Text><b>Stories:</b> {stories}</Text>
                  </div>
                  <div className="see-more-btn-wrapper">
                    <Button onClick={() => setOpenDetails(!openDetails)}>
                      See {!openDetails ? "more" : "less"}
                    </Button>
                  </div>
                  <div className={!openDetails ? "see-less" : "see-more"}> 
                    <hr />
                    <div>
                      <Text><b>Annual Tax:</b> {anualTax}</Text>
                    </div>
                    <div>
                      <Text><b>Parcel number:</b> {parcelNumber}</Text>
                    </div>
                    <div>
                      <Text><b>Last sold:</b> {lastSold}</Text>
                    </div>
                    <div>
                      <Text><b>Garage:</b> {hasGarage? "yes" : "no"}</Text>
                    </div>
                    <div>
                      <Text><b>Pool:</b> {pool? "yes" : "no"}</Text>
                    </div>
                    <div>
                      <Text><b>Tour link:</b> {virtualTourLink}</Text>
                    </div>
                    <div>
                      <Text><b>Total visits:</b> {totalVisits}</Text>
                    </div>
                  </div>
                </div>
              </PropertyDetails>
            </>
          );
        })()}
        <div className="back-btn-wrapper">
          <Button onClick={() => history.goBack()}>&lt; Back</Button>
        </div>
      </PageWrapper>
      {
        propertiesCtx.details.loaded && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={customModalStyles}
          >
            <Carousel
              center
              infinite
              showArrows
              showIndicator
              slidesToShow={3}
              breakpoints={[
                {
                    size: 200,
                    settings: {
                        slidesToShow: 1,
                        showArrows: false,
                        showIndicator: false,
                        swipeable: true,
                    },
                },
                {
                    size: 600,
                    settings: {
                        slidesToShow: 3,
                        showArrows: false,
                        showIndicator: true,
                        swipeable: true,
                    },
                },
                {
                    size: 1000,
                    settings: {
                        slidesToShow: 4,
                        showArrows: true,
                        showIndicator: true,
                        center: true,
                        swipeable: true,
                    },
                },
            ]}
            >
              {
                (property as Property).images.map(
                  (image, i) =>
                  <CarouselImageWrapperStyled className="image">
                    <LocalImage src={image} alt={`property image ${i}`} />
                  </CarouselImageWrapperStyled>
                )
              }
            </Carousel>
          </Modal>
        )
      }
    </>
  );
};

export default Details;


const CarouselImageWrapperStyled = styled.div`
  max-width: 40vw;
  width: 100%;
  img {
    width: 100%;
    object-fit: fill;
  }
`;
