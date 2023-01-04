const prepareWeathersDataForCardComponents = async (weatherDatas) => { // funkcja zwracająca tablice zawierającą siedem obiektów, z których każdy reprezentuje dane pogodowe dla konkretnego dnia tygodnia
    // Dekstrukturyzacja obiektów, wskazanie tablic do podzielenia, kluczy pod nazwami, których będą znajdować się ich właściwości, ilości tablic do podzielenia, ilosći elementów na tablicę  ilości tablic jaka ma pozsotać po dzieleniu.
    const { hourly, daily } = weatherDatas
    const { cloudcover, weathercode, surface_pressure, windspeed_10m, apparent_temperature } = hourly
    const arraysToDivide = [cloudcover, weathercode, surface_pressure, windspeed_10m, apparent_temperature];
    const keys = ["cloudcover", "weathercode", "surface_pressure", "windspeed_10m", "apparent_temperature"];
    const numberOfArrays = 5;
    const elementsPerArray = 24;
    const numberOfSubarraysToKeep = 7;
  
    const result = {}; // pusty obiekt w którym będą tworzone klucze i ich właściwości dla poszczególnego dnia.
  
    for (let i = 0; i < numberOfArrays; i++) { // pętla która dzieli wskazane tablice na 7 podtablic zwierających po 24 elementy.
      const originalArray = arraysToDivide[i];
      let index = 0;
      const subarrays = originalArray.map(() => {
        const subarray = originalArray.slice(index, index + elementsPerArray);
        index += elementsPerArray;
        return subarray;
      });
  
      result[keys[i]] = subarrays; // przypisanie wyniku funkcji mapujące subarray do poszczególnego klucza w obiekcie result np. cloudcover: Array(24) itd.
    }
  
    for (const key in result) { // pętla, która z każdej tablicy przypisanej do klucza w obiekcie result usuwa puste wartości - sprawia że pozostanie tylko 7 z nich które reprezentują 7 dniową prognozę pogody
      result[key] = result[key].slice(0, numberOfSubarraysToKeep);
    }
      const prepWeatherArrays = [] // bazowa tablica do której będą wprowadzane przygotowane obiekty pogodowe na bazie poniższej klasy WeatherObject.
      class weatherObject { // klasa któa jest fundamentem dla tworzenia nowych obiektów pogodowych. 
        constructor(
          time,
          temperature_2m_max,
          temperature_2m_min,
          apparent_temperature_max,
          apparent_temperature_min,
          rain_sum,
          showers_sum,
          snowfall_sum,
          sunrise,
          sunset,
          cloudcover,
          weathercode,
          surface_pressure,
          apparent_temperature,
          windspeed_10m,
          current_weather,
          predicted_pressure,
          predicted_temperature
  
        ) {
          this.time = new Date(time).toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"}).split(',');
          this.temperature_2m_max = temperature_2m_max;
          this.temperature_2m_min = temperature_2m_min;
          this.apparent_temperature_max = apparent_temperature_max;
          this.apparent_temperature_min = apparent_temperature_min;
          this.rain_sum = rain_sum;
          this.showers_sum = showers_sum;
          this.snowfall_sum = snowfall_sum;
          this.sunrise = new Date(sunrise).getHours() + `:` + String(new Date(sunrise).getMinutes()).padStart(2, "0");
          this.sunset = new Date(sunset).getHours() + `:` + String(new Date(sunset).getMinutes()).padStart(2, "0");
          this.cloudcover = cloudcover;
          this.weathercode = weathercode;
          this.surface_pressure = surface_pressure;
          this.apparent_temperature = apparent_temperature;
          this.windspeed_10m = windspeed_10m;
          this.current_weather = current_weather;
          this.predicted_pressure = predicted_pressure;
          this.predicted_temperature = predicted_temperature;
        }
      }
  
      for(let i=0;i<7;i++) { // pętla w której tworzymy obiekty pogodowe dla każdego z 7 dni zawierające dane jak poniżej.
        let preparedWeatherObject = new weatherObject(
          daily.time[i],
          daily.temperature_2m_max[i],
          daily.apparent_temperature_min[i],
          daily.apparent_temperature_max[i],
          daily.apparent_temperature_min[i],
          daily.rain_sum[i],
          daily.showers_sum[i],
          daily.snowfall_sum[i],
          daily.sunrise[i],
          daily.sunset[i],
          result.cloudcover[i],
          result.weathercode[i],
          result.surface_pressure[i],
          result.apparent_temperature[i],
          result.windspeed_10m[i],
          i===0 ? weatherDatas.current_weather : undefined,
          i > 0 ?  Math.round(result.surface_pressure[i].reduce((el,acc) => el + acc)/24) : undefined,
          i > 0 ? Math.round((daily.temperature_2m_max[i] + daily.temperature_2m_min[i])/2) : undefined
        )
        prepWeatherArrays.push(preparedWeatherObject) // wypychamy stworzony obiekt do tablicy PrepWeatherArrays i tak 7 razy
      }
      return prepWeatherArrays; // zwracamy utworzoną tablicę z przygotowanymi danymi po czym staje się ona stanem aplikacji pod kluczem current_weather
    } 

export default prepareWeathersDataForCardComponents;