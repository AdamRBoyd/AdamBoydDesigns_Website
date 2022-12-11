import React, { useState } from 'react';

import styled from 'styled-components';
import { palette } from 'styled-theme';
import { useEffect } from 'react';

import {
  Button,
  Heading,
  Label,
  PageTitleFrame,
  Spacer,
} from '../../components';

const WeatherCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  padding: 0 1rem 1rem;
  width: 30%;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
  margin: 2rem 0 1rem;
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-bottom: 1px solid ${palette('grayscale', 4)};
  background-color: ${palette('primary', 3)};
  width: 100%;
  align-self: center;
  border-radius: 0.5rem 0.5rem 0 0;
  box-shadow: 0px 0px 5px 0px ${palette('grayscale', 4)};
`;

const HeaderLabel = styled(Label)`
  align-self: center;
`;

const StyledHeading = styled(Heading)`
  margin: 0 0.5rem 0.5rem;
  align-self: center;
`;

const StyledLocation = styled(Label)`
  /* font-style: italic; */
  font-size: 0.8rem;
  margin: 0 0.5rem;
  align-self: center;
`;

const StyledIconLabel = styled(Label)`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  text-transform: capitalize;
  margin: 1rem 0 0.5rem -1rem; ;
`;

const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 0 0 2rem;
  border-bottom: 1px solid ${palette('grayscale', 5)};
  width: 90%;
`;

const StyledTemp = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const StyledFeels = styled(Label)`
  margin: 0 0 0.5rem;
  font-size: 0.8rem;
`;

const StyledMaxMin = styled(Label)`
  font-size: 0.8rem;
`;

const WeatherIcon = styled.img`
  max-width: 50px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${palette('grayscale', 5)};
  width: 90%;
`;

const StyledInfoLabel = styled(Label)`
  font-size: 0.8rem;
`;

const StyledSwapButton = styled(Button)`
  max-width: 70%;
  align-self: center;
  margin: 1.5rem 0 0.5rem;
  border-radius: 0.5rem;
`;

const StyledRefresh = styled(Button)`
  height: 1.5rem;
  color: ${palette('primary', 0)};
  background-color: transparent;
  border: 1px solid ${palette('grayscale', 4)};
  border-radius: 0.5rem;

  &:focus {
    background-color: transparent;
  }
`;

const CodeWeather = () => {
  const [location, setLocation] = useState();
  const [weather, setWeather] = useState();
  const [loaded, setLoaded] = useState(false);
  const [tempCelsius, setTempCelsius] = useState(false);

  function setFetchFinished(result) {
    if (result.cod === 200) {
      setWeather(result);
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }

  function fetchWeather(result) {
    setLocation(result);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${result.latitude}&lon=${result.longitude}&appid=059dcee9c15c93a942eb1f38b72876be`
    )
      .then((response) => response.json())
      .then((result2) => setFetchFinished(result2))
      .catch(() => {});
  }

  function fetchLoc() {
    fetch(`https://ipapi.co/json/`)
      .then((response) => response.json())
      .then((result) => fetchWeather(result))
      .catch(() => {});
  }

  // Kelvin to Fahrenheit T(K) × 9/5 - 459.67
  function fTemp(temp) {
    return Math.floor((temp * 9) / 5 - 459.67);
  }

  // Kelvin to Celsius T(K) - 273.15
  function cTemp(temp) {
    return Math.floor(temp - 273.15);
  }

  const handleClick = () => {
    fetchLoc();
  };

  const handleTempSwap = () => {
    setTempCelsius(!tempCelsius);
  };

  useEffect(() => {
    fetchLoc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTitleFrame title='Weather App Project' noBottomRule>
      {loaded && (
        <WeatherCard>
          <StyledHeader>
            <HeaderLabel>Weather for:</HeaderLabel>
            <StyledHeading>{`${location?.city}, ${location?.region}`}</StyledHeading>
            <StyledLocation>{`${location?.latitude} Lat., ${location?.longitude} Lon.`}</StyledLocation>
          </StyledHeader>
          <StyledIconLabel>
            <WeatherIcon
              src={`http://openweathermap.org/img/w/${
                weather?.weather?.at(0)?.icon
              }.png`}
            />
            {`${weather?.weather?.at(0)?.description}`}
          </StyledIconLabel>
          <TempWrapper>
            <StyledTemp>
              {tempCelsius ? (
                <>{`${cTemp(weather?.main?.temp)}ºC`}</>
              ) : (
                <>{`${fTemp(weather?.main?.temp)}ºF`}</>
              )}
            </StyledTemp>
            <StyledFeels>
              {tempCelsius ? (
                <>{`Feels Like: ${cTemp(weather?.main?.feels_like)}ºC`}</>
              ) : (
                <>{`Feels Like: ${fTemp(weather?.main?.feels_like)}ºF`}</>
              )}
            </StyledFeels>
            {tempCelsius ? (
              <StyledMaxMin>{`Min: ${cTemp(
                weather?.main?.temp_min
              )}ºC, Max: ${cTemp(weather?.main?.temp_max)}ºC`}</StyledMaxMin>
            ) : (
              <StyledMaxMin>{`Min: ${fTemp(
                weather?.main?.temp_min
              )}ºF, Max: ${fTemp(weather?.main?.temp_max)}ºF`}</StyledMaxMin>
            )}
          </TempWrapper>
          <InfoWrapper>
            <StyledInfoLabel>{`Humidity: ${weather?.main?.humidity}%`}</StyledInfoLabel>
            <StyledInfoLabel>{`Pressure: ${weather?.main?.pressure}º`}</StyledInfoLabel>
            <StyledInfoLabel>{`Wind Speed: ${weather?.wind?.speed}km/h`}</StyledInfoLabel>
          </InfoWrapper>
          <StyledSwapButton onClick={handleTempSwap}>
            {tempCelsius ? 'Show in Fahrenheit' : 'Show in Celsius'}
          </StyledSwapButton>
        </WeatherCard>
      )}
      <Spacer padding='large' />
      <StyledRefresh onClick={handleClick}>
        {loaded ? 'Refresh' : 'Load Weather'}
      </StyledRefresh>
    </PageTitleFrame>
  );
};

export default CodeWeather;
