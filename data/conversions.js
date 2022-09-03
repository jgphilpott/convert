// Generated by CoffeeScript 2.7.0
/* Data Conversions */

var bit$byte, bit$eb, bit$gb, bit$kb, bit$mb, bit$pb, bit$tb, bit$yb, bit$zb, byte$bit, byte$eb, byte$gb, byte$kb, byte$mb, byte$pb, byte$tb, byte$yb, byte$zb, convertData, eb$bit, eb$byte, eb$gb, eb$kb, eb$mb, eb$pb, eb$tb, eb$yb, eb$zb, gb$bit, gb$byte, gb$eb, gb$kb, gb$mb, gb$pb, gb$tb, gb$yb, gb$zb, kb$bit, kb$byte, kb$eb, kb$gb, kb$mb, kb$pb, kb$tb, kb$yb, kb$zb, mb$bit, mb$byte, mb$eb, mb$gb, mb$kb, mb$pb, mb$tb, mb$yb, mb$zb, pb$bit, pb$byte, pb$eb, pb$gb, pb$kb, pb$mb, pb$tb, pb$yb, pb$zb, tb$bit, tb$byte, tb$eb, tb$gb, tb$kb, tb$mb, tb$pb, tb$yb, tb$zb, yb$bit, yb$byte, yb$eb, yb$gb, yb$kb, yb$mb, yb$pb, yb$tb, yb$zb, zb$bit, zb$byte, zb$eb, zb$gb, zb$kb, zb$mb, zb$pb, zb$tb, zb$yb;

convertData = {
  bit: {},
  byte: {},
  kilobyte: {},
  megabyte: {},
  gigabyte: {},
  terrabyte: {},
  petabyte: {},
  exabyte: {},
  zettabyte: {},
  yottabyte: {}
};

/* Bit Conversions */
convertData.bit.byte = bit$byte = function(bit) {
  return bit / 8; // Bit to Byte
};

convertData.bit.kilobyte = bit$kb = function(bit) {
  return bit / 8e+3; // Bit to Kilobyte
};

convertData.bit.megabyte = bit$mb = function(bit) {
  return bit / 8e+6; // Bit to Megabyte
};

convertData.bit.gigabyte = bit$gb = function(bit) {
  return bit / 8e+9; // Bit to Gigabyte
};

convertData.bit.terrabyte = bit$tb = function(bit) {
  return bit / 8e+12; // Bit to Terrabyte
};

convertData.bit.petabyte = bit$pb = function(bit) {
  return bit / 8e+15; // Bit to Petabyte
};

convertData.bit.exabyte = bit$eb = function(bit) {
  return bit / 8e+18; // Bit to Exabyte
};

convertData.bit.zettabyte = bit$zb = function(bit) {
  return bit / 8e+21; // Bit to Zettabyte
};

convertData.bit.yottabyte = bit$yb = function(bit) {
  return bit / 8e+24; // Bit to Yottabyte
};

/* Byte Conversions */
convertData.byte.bit = byte$bit = function(byte) {
  return byte * 8; // Byte to Bit
};

convertData.byte.kilobyte = byte$kb = function(byte) {
  return byte / 1e+3; // Byte to Kilobyte
};

convertData.byte.megabyte = byte$mb = function(byte) {
  return byte / 1e+6; // Byte to Megabyte
};

convertData.byte.gigabyte = byte$gb = function(byte) {
  return byte / 1e+9; // Byte to Gigabyte
};

convertData.byte.terrabyte = byte$tb = function(byte) {
  return byte / 1e+12; // Byte to Terrabyte
};

convertData.byte.petabyte = byte$pb = function(byte) {
  return byte / 1e+15; // Byte to Petabyte
};

convertData.byte.exabyte = byte$eb = function(byte) {
  return byte / 1e+18; // Byte to Exabyte
};

convertData.byte.zettabyte = byte$zb = function(byte) {
  return byte / 1e+21; // Byte to Zettabyte
};

convertData.byte.yottabyte = byte$yb = function(byte) {
  return byte / 1e+24; // Byte to Yottabyte
};

/* Kilobyte Conversions */
convertData.kilobyte.bit = kb$bit = function(kb) {
  return kb * 8e+3; // Kilobyte to Bit
};

convertData.kilobyte.byte = kb$byte = function(kb) {
  return kb * 1e+3; // Kilobyte to Byte
};

convertData.kilobyte.megabyte = kb$mb = function(kb) {
  return kb / 1e+3; // Kilobyte to Megabyte
};

convertData.kilobyte.gigabyte = kb$gb = function(kb) {
  return kb / 8e+6; // Kilobyte to Gigabyte
};

convertData.kilobyte.terrabyte = kb$tb = function(kb) {
  return kb / 8e+9; // Kilobyte to Terrabyte
};

convertData.kilobyte.petabyte = kb$pb = function(kb) {
  return kb / 8e+12; // Kilobyte to Petabyte
};

convertData.kilobyte.exabyte = kb$eb = function(kb) {
  return kb / 8e+15; // Kilobyte to Exabyte
};

convertData.kilobyte.zettabyte = kb$zb = function(kb) {
  return kb / 8e+18; // Kilobyte to Zettabyte
};

convertData.kilobyte.yottabyte = kb$yb = function(kb) {
  return kb / 8e+21; // Kilobyte to Yottabyte
};

/* Megabyte Conversions */
convertData.megabyte.bit = mb$bit = function(mb) {
  return mb * 8e+6; // Megabyte to Bit
};

convertData.megabyte.byte = mb$byte = function(mb) {
  return mb * 1e+6; // Megabyte to Byte
};

convertData.megabyte.kilobyte = mb$kb = function(mb) {
  return mb * 1e+3; // Megabyte to Kilobyte
};

convertData.megabyte.gigabyte = mb$gb = function(mb) {
  return mb / 1e+3; // Megabyte to Gigabyte
};

convertData.megabyte.terrabyte = mb$tb = function(mb) {
  return mb / 1e+6; // Megabyte to Terrabyte
};

convertData.megabyte.petabyte = mb$pb = function(mb) {
  return mb / 1e+9; // Megabyte to Petabyte
};

convertData.megabyte.exabyte = mb$eb = function(mb) {
  return mb / 1e+12; // Megabyte to Exabyte
};

convertData.megabyte.zettabyte = mb$zb = function(mb) {
  return mb / 1e+15; // Megabyte to Zettabyte
};

convertData.megabyte.yottabyte = mb$yb = function(mb) {
  return mb / 1e+18; // Megabyte to Yottabyte
};

/* Gigabyte Conversions */
convertData.gigabyte.bit = gb$bit = function(gb) {
  return gb * 8e+9; // Gigabyte to Bit
};

convertData.gigabyte.byte = gb$byte = function(gb) {
  return gb * 1e+9; // Gigabyte to Byte
};

convertData.gigabyte.kilobyte = gb$kb = function(gb) {
  return gb * 1e+6; // Gigabyte to Kilobyte
};

convertData.gigabyte.megabyte = gb$mb = function(gb) {
  return gb * 1e+3; // Gigabyte to Megabyte
};

convertData.gigabyte.terrabyte = gb$tb = function(gb) {
  return gb / 1e+3; // Gigabyte to Terrabyte
};

convertData.gigabyte.petabyte = gb$pb = function(gb) {
  return gb / 1e+6; // Gigabyte to Petabyte
};

convertData.gigabyte.exabyte = gb$eb = function(gb) {
  return gb / 1e+9; // Gigabyte to Exabyte
};

convertData.gigabyte.zettabyte = gb$zb = function(gb) {
  return gb / 1e+12; // Gigabyte to Zettabyte
};

convertData.gigabyte.yottabyte = gb$yb = function(gb) {
  return gb / 1e+15; // Gigabyte to Yottabyte
};

/* Terrabyte Conversions */
convertData.terrabyte.bit = tb$bit = function(tb) {
  return tb * 8e+12; // Terrabyte to Bit
};

convertData.terrabyte.byte = tb$byte = function(tb) {
  return tb * 1e+12; // Terrabyte to Byte
};

convertData.terrabyte.kilobyte = tb$kb = function(tb) {
  return tb * 1e+9; // Terrabyte to Kilobyte
};

convertData.terrabyte.megabyte = tb$mb = function(tb) {
  return tb * 1e+6; // Terrabyte to Megabyte
};

convertData.terrabyte.gigabyte = tb$gb = function(tb) {
  return tb * 1e+3; // Terrabyte to Gigabyte
};

convertData.terrabyte.petabyte = tb$pb = function(tb) {
  return tb / 1e+3; // Terrabyte to Petabyte
};

convertData.terrabyte.exabyte = tb$eb = function(tb) {
  return tb / 1e+6; // Terrabyte to Exabyte
};

convertData.terrabyte.zettabyte = tb$zb = function(tb) {
  return tb / 1e+9; // Terrabyte to Zettabyte
};

convertData.terrabyte.yottabyte = tb$yb = function(tb) {
  return tb / 1e+12; // Terrabyte to Yottabyte
};

/* Petabyte Conversions */
convertData.petabyte.bit = pb$bit = function(pb) {
  return pb * 8e+15; // Petabyte to Bit
};

convertData.petabyte.byte = pb$byte = function(pb) {
  return pb * 1e+15; // Petabyte to Byte
};

convertData.petabyte.kilobyte = pb$kb = function(pb) {
  return pb * 1e+12; // Petabyte to Kilobyte
};

convertData.petabyte.megabyte = pb$mb = function(pb) {
  return pb * 1e+9; // Petabyte to Megabyte
};

convertData.petabyte.gigabyte = pb$gb = function(pb) {
  return pb * 1e+6; // Petabyte to Gigabyte
};

convertData.petabyte.terrabyte = pb$tb = function(pb) {
  return pb * 1e+3; // Petabyte to Terrabyte
};

convertData.petabyte.exabyte = pb$eb = function(pb) {
  return pb / 1e+3; // Petabyte to Exabyte
};

convertData.petabyte.zettabyte = pb$zb = function(pb) {
  return pb / 1e+6; // Petabyte to Zettabyte
};

convertData.petabyte.yottabyte = pb$yb = function(pb) {
  return pb / 1e+9; // Petabyte to Yottabyte
};

/* Exabyte Conversions */
convertData.exabyte.bit = eb$bit = function(eb) {
  return eb * 8e+18; // Exabyte to Bit
};

convertData.exabyte.byte = eb$byte = function(eb) {
  return eb * 1e+18; // Exabyte to Byte
};

convertData.exabyte.kilobyte = eb$kb = function(eb) {
  return eb * 1e+15; // Exabyte to Kilobyte
};

convertData.exabyte.megabyte = eb$mb = function(eb) {
  return eb * 1e+12; // Exabyte to Megabyte
};

convertData.exabyte.gigabyte = eb$gb = function(eb) {
  return eb * 1e+9; // Exabyte to Gigabyte
};

convertData.exabyte.terrabyte = eb$tb = function(eb) {
  return eb * 1e+6; // Exabyte to Terrabyte
};

convertData.exabyte.petabyte = eb$pb = function(eb) {
  return eb * 1e+3; // Exabyte to Petabyte
};

convertData.exabyte.zettabyte = eb$zb = function(eb) {
  return eb / 1e+3; // Exabyte to Zettabyte
};

convertData.exabyte.yottabyte = eb$yb = function(eb) {
  return eb / 1e+6; // Exabyte to Yottabyte
};

/* Zettabyte Conversions */
convertData.zettabyte.bit = zb$bit = function(zb) {
  return zb * 8e+21; // Zettabyte to Bit
};

convertData.zettabyte.byte = zb$byte = function(zb) {
  return zb * 1e+21; // Zettabyte to Byte
};

convertData.zettabyte.kilobyte = zb$kb = function(zb) {
  return zb * 1e+18; // Zettabyte to Kilobyte
};

convertData.zettabyte.megabyte = zb$mb = function(zb) {
  return zb * 1e+15; // Zettabyte to Megabyte
};

convertData.zettabyte.gigabyte = zb$gb = function(zb) {
  return zb * 1e+12; // Zettabyte to Gigabyte
};

convertData.zettabyte.terrabyte = zb$tb = function(zb) {
  return zb * 1e+9; // Zettabyte to Terrabyte
};

convertData.zettabyte.petabyte = zb$pb = function(zb) {
  return zb * 1e+6; // Zettabyte to Petabyte
};

convertData.zettabyte.exabyte = zb$eb = function(zb) {
  return zb * 1e+3; // Zettabyte to Exabyte
};

convertData.zettabyte.yottabyte = zb$yb = function(zb) {
  return zb / 1e+3; // Zettabyte to Yottabyte
};

/* Yottabyte Conversions */
convertData.yottabyte.bit = yb$bit = function(yb) {
  return yb * 8e+24; // Yottabyte to Bit
};

convertData.yottabyte.byte = yb$byte = function(yb) {
  return yb * 1e+24; // Yottabyte to Byte
};

convertData.yottabyte.kilobyte = yb$kb = function(yb) {
  return yb * 1e+21; // Yottabyte to Kilobyte
};

convertData.yottabyte.megabyte = yb$mb = function(yb) {
  return yb * 1e+18; // Yottabyte to Megabyte
};

convertData.yottabyte.gigabyte = yb$gb = function(yb) {
  return yb * 1e+15; // Yottabyte to Gigabyte
};

convertData.yottabyte.terrabyte = yb$tb = function(yb) {
  return yb * 1e+12; // Yottabyte to Terrabyte
};

convertData.yottabyte.petabyte = yb$pb = function(yb) {
  return yb * 1e+9; // Yottabyte to Petabyte
};

convertData.yottabyte.exabyte = yb$eb = function(yb) {
  return yb * 1e+6; // Yottabyte to Exabyte
};

convertData.yottabyte.zettabyte = yb$zb = function(yb) {
  return yb * 1e+3; // Yottabyte to Zettabyte
};