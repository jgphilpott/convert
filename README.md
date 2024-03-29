<p align="center"><img width="225" height="225" src="https://github.com/jgphilpott/convert/blob/main/icon.png"></p>

# Intro

Convert is a library of functions for converting between different units of measurement. It currently supports 17 top level categories each with several different scales and units of measurement within. The project currently supports JavaScript only but it would be desirable to add more languages in the future! If you find this tool useful you may also like this [abbreviations gist](https://gist.github.com/jgphilpott/12783015d68e056e54252355d75b41a9) and this [formating gist](https://gist.github.com/jgphilpott/787659ac4ea57a9971da58a76191079b) to help you turn your converted values into legible strings.

# Contents

 - [Intro](https://github.com/jgphilpott/convert#intro)
 - [Contents](https://github.com/jgphilpott/convert#contents)
 - [Usage](https://github.com/jgphilpott/convert#usage)
 - [Contribute](https://github.com/jgphilpott/convert#contribute)
     - [Adding Features](https://github.com/jgphilpott/convert#adding-features)
     - [Reporting Errors](https://github.com/jgphilpott/convert#reporting-errors)
 - [Categories](https://github.com/jgphilpott/convert#categories)
     - [Angle](https://github.com/jgphilpott/convert#angle)
     - [Area](https://github.com/jgphilpott/convert#area)
     - [Data](https://github.com/jgphilpott/convert#data)
     - [Density](https://github.com/jgphilpott/convert#density)
     - [Dimension](https://github.com/jgphilpott/convert#dimension)
     - [Energy](https://github.com/jgphilpott/convert#energy)
     - [Frequency](https://github.com/jgphilpott/convert#frequency)
     - [Illumination](https://github.com/jgphilpott/convert#illumination)
     - [Length](https://github.com/jgphilpott/convert#length)
     - [Magnetomotive](https://github.com/jgphilpott/convert#magnetomotive)
     - [Mass](https://github.com/jgphilpott/convert#mass)
     - [Pressure](https://github.com/jgphilpott/convert#pressure)
     - [Radiation](https://github.com/jgphilpott/convert#radiation)
     - [Speed](https://github.com/jgphilpott/convert#speed)
     - [Temperature](https://github.com/jgphilpott/convert#temperature)
     - [Time](https://github.com/jgphilpott/convert#time)
     - [Volume](https://github.com/jgphilpott/convert#volume)

# Usage

To use the Convert library in your project you can either link to the [convert.js](https://github.com/jgphilpott/convert/blob/main/convert.js) file in this repo or download it and use your own copy. The library features the `convert` object that contains all of the formulas with the top level keys representing all the different categories available, see the object map below:

```js
convert = {

    angle: {...},
    area: {...},
    data: {...},
    density: {...},
    dimension: {...},
    energy: {...},
    frequency: {...},
    illumination: {...},
    length: {...},
    magnetomotive: {...},
    mass: {...},
    pressure: {...},
    radiation: {...},
    speed: {...},
    temperature: {...},
    time: {...},
    volume: {...}

}
```

The second level keys represent all the different units of measurement available within that category. See the object map below using the `data` category as an example:

```js
data = {

    bit: {...},
    byte: {...},
    kilobyte: {...},
    megabyte: {...},
    gigabyte: {...},
    terrabyte: {...},
    petabyte: {...},
    exabyte: {...},
    zettabyte: {...},
    yottabyte: {...}

}
```

The third level keys represent all the different units of measurement that you can convert the original unit into and the values are formulas in the format of a function. See the object map below using the `bit` unit as an example:

```js
bit = {

    bit: f(x) = x,
    byte: f(x) = x/8,
    kilobyte: f(x) = x/8e+3,
    megabyte: f(x) = x/8e+6,
    gigabyte: f(x) = x/8e+9,
    terrabyte: f(x) = x/8e+12,
    petabyte: f(x) = x/8e+15,
    exabyte: f(x) = x/8e+18,
    zettabyte: f(x) = x/8e+21,
    yottabyte: f(x) = x/8e+24

}
```

So to use these functions just reference them through the `convert` object and pass in the value you want to convert like this, `convert.data.bit.byte(100)` and to reverse the conversion simply switch the order of the unit keys like this, `convert.data.byte.bit(12.5)`.

# Contribute

There are two main ways you can contribute to the Convert library:

1) Adding a new language, category or unit for conversion.
2) Report an inaccurate formula or typo.

See below for more information on each of the options, also feel free to simply [ask any question you like](https://github.com/jgphilpott/convert/issues/new?assignees=jgphilpott&labels=question&template=QUESTION.md&title=).

### Adding Features

Currently this library only supports JavaScript but it would be nice to add more languages in the future. It would also be nice to add new categories and units for conversion since the current list is not universal, yet. If you need an idea for a new category to work on I suggest browsing the [UnitConverters.net](https://www.unitconverters.net) website, this site can also be useful for testing the accuracy of existing formulas.

If you would like to contribute in this way please start by opening a [feature request](https://github.com/jgphilpott/convert/issues/new?assignees=jgphilpott&labels=enhancement&template=FEATURE_REQUEST.md&title=). Once your work is done and ready for review you can proceed to opening a [pull request](https://github.com/jgphilpott/convert/pulls).

### Reporting Errors

I have done my best to ensure the accuracy of all the formulas but I am only human and I can easily make mistakes! If you find an inaccurate formula or typo please don't hesitate to open a [bug report](https://github.com/jgphilpott/convert/issues/new?assignees=jgphilpott&labels=bug&template=BUG_REPORT.md&title=). I have also written some [simple tests](https://gist.github.com/jgphilpott/016c3548db3ab15822c67f85a19ed3c7) that can be run against the `convert` object, if you want you could also contribute by helping to write a more detailed and comprehensive test suite.

If you have any other issues with the Convert library then please open a [general issue](https://github.com/jgphilpott/convert/issues/new/choose). Your efforts will improve the functionality and usability of this tool for everyone, thanks in advance!

# Categories

Each category below is available as a top level key in the `convert` object. If you don't want/need the full library you can also link to a category separately using the gist file referenced in the corresponding subdirectory README. An object map of each category is also available below.

### [Angle](https://github.com/jgphilpott/convert/tree/main/angle/README.md)

The Angle category provides 6 different units for conversion, see the object map below:

```js
convertAngle = {

    degree: {...},
    gradian: {...},
    milliradian: {...},
    radian: {...},
    arcSecond: {...},
    arcMinute: {...}

}
```

### [Area](https://github.com/jgphilpott/convert/tree/main/area/README.md)

The Area category provides 15 different units for conversion, see the object map below:

```js
convertArea = {

    nanometerSq: {...},
    micrometerSq: {...},
    millimeterSq: {...},
    centimeterSq: {...},
    decimeterSq: {...},
    meterSq: {...},
    decameterSq: {...},
    hectometerSq: {...},
    kilometerSq: {...},

    inchSq: {...},
    footSq: {...},
    yardSq: {...},
    mileSq: {...},

    acre: {...},
    hectare: {...}

}
```

### [Data](https://github.com/jgphilpott/convert/tree/main/data/README.md)

The Data category provides 10 different units for conversion, see the object map below:

```js
convertData = {

    bit: {...},
    byte: {...},
    kilobyte: {...},
    megabyte: {...},
    gigabyte: {...},
    terrabyte: {...},
    petabyte: {...},
    exabyte: {...},
    zettabyte: {...},
    yottabyte: {...}

}
```

### [Density](https://github.com/jgphilpott/convert/tree/main/density/README.md)

The Density category provides 8 different units for conversion, see the object map below:

```js
convertDensity = {

    gramCentimeterCu: {...},
    gramMeterCu: {...},
    kilogramCentimeterCu: {...},
    kilogramMeterCu: {...},

    ounceInchCu: {...},
    ounceFootCu: {...},
    poundInchCu: {...},
    poundFootCu: {...}

}
```

### [Dimension](https://github.com/jgphilpott/convert/tree/main/dimension/README.md)

The Dimension category provides 2 different units for conversion, see the object map below:

```js
convertDimension = {

    d2: {...},
    d3: {...}

}
```

### [Energy](https://github.com/jgphilpott/convert/tree/main/energy/README.md)

The Energy category provides 4 different units for conversion, see the object map below:

```js
convertEnergy = {

    joule: {...},
    kilojoule: {...},
    watt: {...},
    kilowatt: {...}

}
```

### [Frequency](https://github.com/jgphilpott/convert/tree/main/frequency/README.md)

The Frequency category provides 4 different units for conversion, see the object map below:

```js
convertFrequency = {

    hertz: {...},
    kilohertz: {...},
    megahertz: {...},
    gigahertz: {...}

}
```

### [Illumination](https://github.com/jgphilpott/convert/tree/main/illumination/README.md)

The Illumination category provides 4 different units for conversion, see the object map below:

```js
convertIllumination = {

    phot: {...},
    lux: {...},
    nox: {...},
    flame: {...}

}
```

### [Length](https://github.com/jgphilpott/convert/tree/main/length/README.md)

The Length category provides 13 different units for conversion, see the object map below:

```js
convertLength = {

    nanometer: {...},
    micrometer: {...},
    millimeter: {...},
    centimeter: {...},
    decimeter: {...},
    meter: {...},
    decameter: {...},
    hectometer: {...},
    kilometer: {...},

    inch: {...},
    foot: {...},
    yard: {...},
    mile: {...}

}
```

### [Magnetomotive](https://github.com/jgphilpott/convert/tree/main/magnetomotive/README.md)

The Magnetomotive category provides 5 different units for conversion, see the object map below:

```js
convertMagnetomotive = {

    milliampere: {...},
    ampere: {...},
    abampere: {...},
    kiloampere: {...},

    gilbert: {...}

}
```

### [Mass](https://github.com/jgphilpott/convert/tree/main/mass/README.md)

The Mass category provides 13 different units for conversion, see the object map below:

```js
convertMass = {

    nanogram: {...},
    microgram: {...},
    milligram: {...},
    centigram: {...},
    decigram: {...},
    gram: {...},
    decagram: {...},
    hectogram: {...},
    kilogram: {...},

    ounce: {...},
    pound: {...},
    stone: {...},
    ton: {...}

}
```

### [Pressure](https://github.com/jgphilpott/convert/tree/main/pressure/README.md)

The Pressure category provides 5 different units for conversion, see the object map below:

```js
convertPressure = {

    bar: {...},
    pascal: {...},
    atmospheric: {...},
    psi: {...},
    torr: {...}

}
```

### [Radiation](https://github.com/jgphilpott/convert/tree/main/radiation/README.md)

The Radiation category provides 14 different units for conversion, see the object map below:

```js
convertRadiation = {

    nanogray: {...},
    microgray: {...},
    milligray: {...},
    centigray: {...},
    decigray: {...},
    gray: {...},
    dekagray: {...},
    hectogray: {...},
    kilogray: {...},
    megagray: {...},
    gigagray: {...},
    teragray: {...},
    petagray: {...},
    exagray: {...}

}
```

### [Speed](https://github.com/jgphilpott/convert/tree/main/speed/README.md)

The Speed category provides 25 different units for conversion, see the object map below:

```js
convertSpeed = {

    millimeterSecond: {...},
    millimeterMinute: {...},
    millimeterHour: {...},
    centimeterSecond: {...},
    centimeterMinute: {...},
    centimeterHour: {...},
    meterSecond: {...},
    meterMinute: {...},
    meterHour: {...},
    kilometerSecond: {...},
    kilometerMinute: {...},
    kilometerHour: {...},

    inchSecond: {...},
    inchMinute: {...},
    inchHour: {...},
    footSecond: {...},
    footMinute: {...},
    footHour: {...},
    yardSecond: {...},
    yardMinute: {...},
    yardHour: {...},
    mileSecond: {...},
    mileMinute: {...},
    mileHour: {...},

    knots: {...}

}
```

### [Temperature](https://github.com/jgphilpott/convert/tree/main/temperature/README.md)

The Temperature category provides 3 different units for conversion, see the object map below:

```js
convertTemperature = {

    celsius: {...},
    fahrenheit: {...},
    kelvin: {...}

}
```

### [Time](https://github.com/jgphilpott/convert/tree/main/time/README.md)

The Time category provides 13 different units for conversion, see the object map below:

```js
convertTime = {

    nanosecond: {...},
    microsecond: {...},
    millisecond: {...},
    second: {...},
    minute: {...},
    hour: {...},
    day: {...},
    week: {...},
    month: {...},
    year: {...},
    decade: {...},
    century: {...},
    millennium: {...}

}
```

### [Volume](https://github.com/jgphilpott/convert/tree/main/volume/README.md)

The Volume category provides 21 different units for conversion, see the object map below:

```js
convertVolume = {

    nanometerCu: {...},
    micrometerCu: {...},
    millimeterCu: {...},
    centimeterCu: {...},
    decimeterCu: {...},
    meterCu: {...},
    decameterCu: {...},
    hectometerCu: {...},
    kilometerCu: {...},

    inchCu: {...},
    footCu: {...},
    yardCu: {...},
    mileCu: {...},

    milliliter: {...},
    liter: {...},

    teaspoon: {...},
    tablespoon: {...},
    cup: {...},
    pint: {...},
    quart: {...},
    gallon: {...}

}
```