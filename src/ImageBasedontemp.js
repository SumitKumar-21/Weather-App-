let sunny = "https://i.pinimg.com/736x/d2/40/01/d2400139e521003561d93b66e2c4dbc8.jpg";
let rain = "https://i.pinimg.com/1200x/a8/d4/d8/a8d4d8ed53dee2be7561cc53c91beb70.jpg";
let winter = "https://i.pinimg.com/736x/49/43/e0/4943e0f30b41e64a2cbc84f1360ecbe0.jpg";
let cloudy = "https://i.pinimg.com/1200x/4f/9f/d6/4f9fd6c1abf834b9b8d963d9bafd11ac.jpg";
let clearSky = "https://i.pinimg.com/1200x/82/76/b1/8276b1976566f4f7e57ade0033768ca2.jpg";

export function getImageUrl(arr) {
    if (!arr) {
        return { url: sunny, icon: "☀️" };
    }

    const desc = (arr.description || "").toLowerCase();
    const temp = Number(arr.temp ?? 0);

    // Rainy weather
    if (
        desc.includes("rain") ||
        desc.includes("drizzle") ||
        desc.includes("thunderstorm") ||
        desc.includes("shower")
    ) {
        return { url: rain, icon: "🌧️" };
    }

    // Winter / Snow
    if (
        desc.includes("snow") ||
        desc.includes("sleet") ||
        temp <= 10
    ) {
        return { url: winter, icon: "❄️" };
    }

    // Cloudy
    if (
        desc.includes("cloud") ||
        desc.includes("overcast") ||
        desc.includes("mist") ||
        desc.includes("fog") ||
        desc.includes("haze")
    ) {
        return { url: cloudy, icon: "☁️" };
    }

    // Clear Sky
    if (desc.includes("clear sky")) {
        return { url: clearSky, icon: "☀️" };
    }

    // Sunny / Warm
    if (
        desc.includes("clear") ||
        desc.includes("sunny") ||
        temp >= 25
    ) {
        return { url: sunny, icon: "☀️" };
    }

    // Default
    return { url: cloudy, icon: "☁️" };
}