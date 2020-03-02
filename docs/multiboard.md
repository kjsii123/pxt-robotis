# Multiple boards in one target

This target supports multiple boards. The boards share a common CPU, ATSAMD21, but have
different shapes, and different built-in components.

## Board packages

Boards are defined in board packages. A board package references the `core` package,
and possibly some additional packages (eg `pixel`). It contains a pin definition
file similar to this:

```typescript
declare namespace pins {
    //% shim=pxt::getPin(2)
    const A0: AnalogInOutPin;
    //% shim=pxt::getPin(40)
    const A1: AnalogInOutPin;
    // ...
    //% shim=pxt::getPin(11)
    const D0: DigitalInOutPin;
    // ...
}
```

The arguments to `getPin()` are hardware pin numbers (in the example above: `PA02`, `PB08` 
(port B is at offset `32`), and `PA11`). The `getPin()` function now allocates pins dynamically.
There is no corresponding C++ file (ie no `devpins.cpp`) and no pin object array.

The `boardDefinition` element, formerly from `pxtarget.json`, is now provided by a JSON
file in the board package. The SVG visual is also provided as a file in the board package.
It's possible some code in `sim/*` will need to be further parametrized by the `boardDefinition`.

## Minor stuff

The various WSomething classes will need constructors that take pin numbers, and need to have 
functions that set the pin numbers (with some reasonable defaults).

Things like therometer (`NonLinearAnalogSensor`) would be best handled completely in TypeScript.

## Built-in components

Various SAMD21 Maker's boards have some of the following components:

* touch - this probably needs to be connected with Pin classes
* a single NeoPixel or DotStar Pixel
* monochromatic LEDs in different color (1 or more) - they are bound to
  a single pin, but depending on which one, you have to pull it up or down
  to turn it on
* SPI flash
* other things connected via SPI

## Boards

There's likely more, feel free to add.

### ROBOTIS 

* [CM-300](https://www.robotis.com/)