export interface Weatherinterface  extends Temp,FeelsLike,Weather,Daily ,RootObject {
    
}


    export interface Temp {
        day: number;
        min: number;
        max: number;
        night: number;
        eve: number;
        morn: number;
    }

    export interface FeelsLike {
        day: number;
        night: number;
        eve: number;
        morn: number;
    }

    export interface Weather {
        id: number;
        main: string;
        description: string;
        icon: string;
    }

    export interface Daily {
        dt: number;
        sunrise: number;
        sunset: number;
        moonrise: number;
        moonset: number;
        moon_phase: number;
        temp: Temp;
        feels_like: FeelsLike;
        pressure: number;
        humidity: number;
        dew_point: number;
        wind_speed: number;
        wind_deg: number;
        wind_gust: number;
        weather: Weather[];
        clouds: number;
        pop: number;
        uvi: number;
    }

    export interface RootObject {
        lat: number;
        lon: number;
        timezone: string;
        timezone_offset: number;
        daily: Daily[];
    }



