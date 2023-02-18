import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

import apiKeys from '../apiKeys';

import {
  Button,
  Input,
  Label,
  Link,
  PageTitleFrame,
  Spacer,
  WeatherCard,
} from '../../components';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
`;

const ControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 0.7rem 0;
  width: 30%;
  min-width: 220px;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 1.5rem 0;
  gap: 0.7rem;
`;

const ControlStyles = css`
  width: 80%;
`;

const StyledSwapButton = styled(Button)`
  ${ControlStyles}
`;

const StyledLoadByLocation = styled(Button)`
  ${ControlStyles}
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-bottom: 1px solid ${palette('grayscale', 4)};
  padding: 1.5rem 0 1.5rem;
  width: 90%;
`;

const StyledInput = styled(Input)`
  ${ControlStyles}
  border-radius: 0.5rem;
`;

const StyledFormButton = styled(Button)`
  ${ControlStyles}
`;

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const APICredit = styled(Link)`
  font-size: 0.8rem;
  margin: 0.3rem;
`;

const CodeWeather = () => {
  const [weather, setWeather] = useState();
  const [loaded, setLoaded] = useState(false);
  const [tempCelsius, setTempCelsius] = useState(false);
  const appId = apiKeys.codeWeather.appid;

  function fetchWeatherByPosition(latitude, longitude) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appId}`
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.cod === 200) {
          setWeather(result);
          setLoaded(true);
        } else {
          setLoaded(false); // Used for refresh where already set to true
        }
      })
      .catch((error) => {
        console.error();
      });
  }

  // NOTE: Less accurate location fetch method
  function fetchWeather() {
    fetch(`https://ipapi.co/json/`)
      .then((response) => response.json())
      .then((position) => {
        fetchWeatherByPosition(position.latitude, position.longitude);
      })
      .catch(() => {});
  }

  // NOTE: Requires HTTPS and Certificate
  // function fetchWeather() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       fetchWeatherByPosition(
  //         position.coords.latitude,
  //         position.coords.longitude
  //       );
  //     });
  //   } else {
  //     alert('Geolocation is not supported by this browser.');
  //   }
  // }

  const handleCitySearch = (e) => {
    e.preventDefault();
    const city = e.target[0].value;
    const state = e.target[1].value;
    const country = e.target[2].value;
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=100&appid=${appId}`
    )
      .then((response) => response.json())
      .then((result) => {
        fetchWeatherByPosition(result[0].lat, result[0].lon);
      })
      .catch((error) => {
        console.error();
      });
  };

  const handleZipSearch = (e) => {
    e.preventDefault();
    const zip = e.target[0].value;
    fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${appId}`)
      .then((response) => response.json())
      .then((result) => {
        fetchWeatherByPosition(result.lat, result.lon);
      })
      .catch((error) => {
        console.error();
      });
  };

  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTitleFrame title='Weather App Project' noBottomRule>
      <MainWrapper>
        {!loaded && (
          <ErrorWrapper>
            <Label>OOPS! Something went wrong!</Label>
            <Label>Please enter a valid location</Label>
          </ErrorWrapper>
        )}
        {loaded && (
          <WeatherCard
            weather={weather}
            tempCelsius={tempCelsius}
            loaded={loaded}
          />
        )}
        <ControlWrapper>
          <StyledForm onSubmit={handleCitySearch}>
            <StyledInput type='text' id='city' placeholder='City' required />
            <StyledInput
              type='text'
              id='state'
              placeholder='State Code'
              maxLength='2'
              required
            />
            <StyledInput
              type='text'
              id='country'
              placeholder='Country Code'
              maxLength='2'
              required
            />
            <StyledFormButton variant='primary'>Search</StyledFormButton>
          </StyledForm>
          <StyledForm onSubmit={handleZipSearch}>
            <StyledInput type='text' placeholder='Zip Code' />
            <StyledFormButton variant='primary'>Search</StyledFormButton>
          </StyledForm>
          <ButtonWrapper>
            <StyledLoadByLocation
              onClick={() => fetchWeather()}
              variant='primary'
            >
              Load By Location
            </StyledLoadByLocation>
            <StyledSwapButton
              onClick={() => setTempCelsius(!tempCelsius)}
              variant='ghost'
            >
              {tempCelsius ? 'Show in Fahrenheit' : 'Show in Celsius'}
            </StyledSwapButton>
          </ButtonWrapper>
        </ControlWrapper>
      </MainWrapper>
      <Spacer padding={1} />
      <APICredit href={'https://ipapi.co/'} target='_blank'>
        Location API courtesy of ipapi (If your location isn't right, I blame
        them.)
      </APICredit>
      <APICredit href={'https://openweathermap.org/'} target='_blank'>
        Weather API courtesy of OpenWeather
      </APICredit>
      <Spacer padding={2} />
    </PageTitleFrame>
  );
};

export default CodeWeather;
